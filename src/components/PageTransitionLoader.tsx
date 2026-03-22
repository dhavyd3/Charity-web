'use client';

import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

const MIN_VISIBLE_MS = 900;
const EXIT_DELAY_MS = 220;
const MAX_VISIBLE_MS = 8000;

// Future tweaks live here: update the bloom paths, particle map, and timing constants to retune the whole loader.
const BLOOM_PATHS = [
  'M116 154C104 144 92 135 81 126C62 111 50 95 50 76C50 57 64 42 83 42C96 42 108 49 116 61C124 49 136 42 149 42C168 42 182 57 182 76C182 95 170 111 151 126C140 135 128 144 116 154Z',
  'M116 157C103 147 90 138 78 129C60 115 47 99 47 78C47 58 62 44 82 44C95 44 107 51 116 63C125 51 137 44 150 44C170 44 185 58 185 78C185 99 172 115 154 129C142 138 129 147 116 157Z',
];

const HORIZON_PATH =
  'M30 173C52 160 73 154 96 153C108 152 120 154 132 156C149 159 165 164 183 163C192 162 200 159 208 154V194H30V173Z';

const PARTICLES = [
  { cx: 116, cy: 22, r: 4.5, fill: '#E67E22', x: [0, 3, 0, -3, 0], y: [0, -7, -2, -6, 0], delay: 0 },
  { cx: 168, cy: 48, r: 3.6, fill: '#7FD8BE', x: [0, 4, 8, 2, 0], y: [0, -4, 2, 6, 0], delay: 0.3 },
  { cx: 191, cy: 105, r: 4.2, fill: '#F6C78A', x: [0, -4, -8, -2, 0], y: [0, 5, 1, -4, 0], delay: 0.45 },
  { cx: 168, cy: 160, r: 3.8, fill: '#7FD8BE', x: [0, -5, 0, 5, 0], y: [0, 4, 9, 3, 0], delay: 0.65 },
  { cx: 116, cy: 187, r: 4.4, fill: '#E67E22', x: [0, 2, 0, -2, 0], y: [0, 6, 10, 5, 0], delay: 0.8 },
  { cx: 64, cy: 160, r: 3.7, fill: '#A4E8D3', x: [0, 6, 1, -4, 0], y: [0, 2, 8, 3, 0], delay: 1.05 },
  { cx: 39, cy: 104, r: 4.1, fill: '#F2A65A', x: [0, 4, 7, 3, 0], y: [0, -6, -1, 5, 0], delay: 1.2 },
  { cx: 63, cy: 48, r: 3.5, fill: '#7FD8BE', x: [0, -6, -2, 5, 0], y: [0, -5, 3, 4, 0], delay: 1.35 },
];

function getTargetPath(value: string | URL | null | undefined): string | null {
  if (!value) {
    return null;
  }

  const href = typeof value === 'string' ? value : value.toString();

  if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return null;
  }

  try {
    const url = new URL(href, window.location.href);

    if (url.origin !== window.location.origin) {
      return null;
    }

    return url.pathname;
  } catch {
    return null;
  }
}

export default function PageTransitionLoader() {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const { isLanguagePending, t } = useLanguage();

  const [isVisible, setIsVisible] = useState(false);

  const hasMountedRef = useRef(false);
  const currentPathRef = useRef(pathname);
  const targetPathRef = useRef<string | null>(null);
  const transitionSourceRef = useRef<'route' | 'language' | null>(null);
  const isTransitioningRef = useRef(false);
  const wasLanguagePendingRef = useRef(false);
  const startTimeRef = useRef(0);
  const navIdRef = useRef(0);
  const exitTimerRef = useRef<number | null>(null);
  const fallbackTimerRef = useRef<number | null>(null);

  const clearTimer = (timerRef: { current: number | null }) => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const clearPendingTimers = useCallback(() => {
    clearTimer(exitTimerRef);
    clearTimer(fallbackTimerRef);
  }, []);

  const hideLoader = useCallback(
    (navId: number) => {
      if (navId !== navIdRef.current) {
        return;
      }

      clearPendingTimers();
      isTransitioningRef.current = false;
      targetPathRef.current = null;
      transitionSourceRef.current = null;
      setIsVisible(false);
    },
    [clearPendingTimers]
  );

  const beginTransition = useCallback(
    (targetPath: string | null) => {
      if (typeof window === 'undefined' || !targetPath) {
        return;
      }

      if (targetPath === currentPathRef.current) {
        return;
      }

      if (isTransitioningRef.current && targetPathRef.current === targetPath) {
        return;
      }

      navIdRef.current += 1;
      startTimeRef.current = performance.now();
      targetPathRef.current = targetPath;
      transitionSourceRef.current = 'route';
      isTransitioningRef.current = true;
      setIsVisible(true);
      clearPendingTimers();

      const navId = navIdRef.current;
      fallbackTimerRef.current = window.setTimeout(() => {
        hideLoader(navId);
      }, MAX_VISIBLE_MS);
    },
    [clearPendingTimers, hideLoader]
  );

  const beginLanguageTransition = useCallback(() => {
    if (typeof window === 'undefined') {
      return;
    }

    if (isTransitioningRef.current && transitionSourceRef.current === 'language') {
      return;
    }

    navIdRef.current += 1;
    startTimeRef.current = performance.now();
    targetPathRef.current = null;
    transitionSourceRef.current = 'language';
    isTransitioningRef.current = true;
    setIsVisible(true);
    clearPendingTimers();

    const navId = navIdRef.current;
    fallbackTimerRef.current = window.setTimeout(() => {
      hideLoader(navId);
    }, MAX_VISIBLE_MS);
  }, [clearPendingTimers, hideLoader]);

  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      currentPathRef.current = pathname;
      return;
    }

    if (pathname === currentPathRef.current) {
      return;
    }

    currentPathRef.current = pathname;

    if (!isTransitioningRef.current || transitionSourceRef.current !== 'route') {
      return;
    }

    const navId = navIdRef.current;
    const elapsed = performance.now() - startTimeRef.current;
    const remaining = Math.max(MIN_VISIBLE_MS - elapsed, 0);

    clearTimer(exitTimerRef);
    exitTimerRef.current = window.setTimeout(() => {
      hideLoader(navId);
    }, remaining + EXIT_DELAY_MS);
  }, [hideLoader, pathname]);

  useEffect(() => {
    currentPathRef.current = pathname;
  }, [pathname]);

  useEffect(() => {
    if (!hasMountedRef.current) {
      return;
    }

    if (!wasLanguagePendingRef.current && isLanguagePending) {
      beginLanguageTransition();
    }

    if (
      wasLanguagePendingRef.current &&
      !isLanguagePending &&
      isTransitioningRef.current &&
      transitionSourceRef.current === 'language'
    ) {
      const navId = navIdRef.current;
      const elapsed = performance.now() - startTimeRef.current;
      const remaining = Math.max(MIN_VISIBLE_MS - elapsed, 0);

      clearTimer(exitTimerRef);
      exitTimerRef.current = window.setTimeout(() => {
        hideLoader(navId);
      }, remaining + EXIT_DELAY_MS);
    }

    wasLanguagePendingRef.current = isLanguagePending;
  }, [beginLanguageTransition, hideLoader, isLanguagePending]);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const anchor = target.closest('a[href]');

      if (!(anchor instanceof HTMLAnchorElement)) {
        return;
      }

      if (anchor.target && anchor.target !== '_self') {
        return;
      }

      if (anchor.hasAttribute('download')) {
        return;
      }

      const href = anchor.getAttribute('href');

      if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
        return;
      }

      const url = new URL(anchor.href, window.location.href);

      if (url.origin !== window.location.origin || url.pathname === currentPathRef.current) {
        return;
      }

      beginTransition(url.pathname);
    };

    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;

    window.history.pushState = function pushState(state, unused, url) {
      beginTransition(getTargetPath(url));
      return originalPushState.apply(window.history, [state, unused, url]);
    };

    window.history.replaceState = function replaceState(state, unused, url) {
      beginTransition(getTargetPath(url));
      return originalReplaceState.apply(window.history, [state, unused, url]);
    };

    const handlePopState = () => {
      const targetPath = window.location.pathname;

      if (targetPath !== currentPathRef.current) {
        beginTransition(targetPath);
      }
    };

    document.addEventListener('click', handleDocumentClick, true);
    window.addEventListener('popstate', handlePopState);

    return () => {
      document.removeEventListener('click', handleDocumentClick, true);
      window.removeEventListener('popstate', handlePopState);
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
      clearPendingTimers();
    };
  }, [beginTransition, clearPendingTimers]);

  const overlayTransition = shouldReduceMotion
    ? { duration: 0.18, ease: 'easeOut' as const }
    : { duration: 0.42, ease: [0.16, 1, 0.3, 1] as const };

  const shellVariants = {
    hidden: {
      opacity: 0,
      scale: shouldReduceMotion ? 0.98 : 0.92,
      y: shouldReduceMotion ? 10 : 28,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.6,
        delay: shouldReduceMotion ? 0 : 0.06,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
    exit: {
      opacity: 0,
      scale: shouldReduceMotion ? 0.985 : 1.05,
      y: shouldReduceMotion ? -6 : -26,
      transition: {
        duration: shouldReduceMotion ? 0.18 : 0.45,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <AnimatePresence initial={false}>
      {isVisible && (
        <motion.div
          key="hope-bloom-loader"
          className="page-transition-loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: overlayTransition }}
          role="status"
          aria-live="polite"
          aria-atomic="true"
          aria-busy="true"
        >
          <span className="page-transition-loader__sr-only">{t.common.loadingPage}</span>

          <div className="page-transition-loader__grain" aria-hidden="true" />
          <div className="page-transition-loader__veil" aria-hidden="true" />
          <div className="page-transition-loader__glow page-transition-loader__glow--warm" aria-hidden="true" />
          <div className="page-transition-loader__glow page-transition-loader__glow--cool" aria-hidden="true" />

          <motion.div
            className="page-transition-loader__shell"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={shellVariants}
          >
            <motion.div
              className="page-transition-loader__constellation"
              animate={
                shouldReduceMotion
                  ? { scale: [1, 1.015, 1], opacity: [1, 0.96, 1] }
                  : { rotate: [0, 1.6, 0, -1.6, 0], scale: [1, 1.02, 0.995, 1] }
              }
              transition={{
                duration: shouldReduceMotion ? 2.2 : 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'easeInOut',
              }}
              aria-hidden="true"
            >
              <motion.svg
                viewBox="0 0 232 232"
                className="page-transition-loader__svg"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="hope-bloom-fill" x1="58" y1="40" x2="176" y2="180" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#F6C78A" />
                    <stop offset="40%" stopColor="#E67E22" />
                    <stop offset="100%" stopColor="#2D5F3F" />
                  </linearGradient>
                  <radialGradient id="hope-bloom-core" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(116 104) rotate(90) scale(76)">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.78" />
                    <stop offset="45%" stopColor="#A4E8D3" stopOpacity="0.38" />
                    <stop offset="100%" stopColor="#A4E8D3" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="hope-bloom-wave" x1="30" y1="150" x2="208" y2="182" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#A4E8D3" stopOpacity="0.15" />
                    <stop offset="45%" stopColor="#7FD8BE" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#E67E22" stopOpacity="0.2" />
                  </linearGradient>
                </defs>

                <motion.circle
                  cx="116"
                  cy="104"
                  r="72"
                  stroke="rgba(255,255,255,0.32)"
                  strokeWidth="1.5"
                  strokeDasharray="0 1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={
                    shouldReduceMotion
                      ? { pathLength: 1, opacity: 0.3 }
                      : { pathLength: [0.1, 1, 0.96, 1], opacity: [0.12, 0.55, 0.2, 0.45] }
                  }
                  transition={{
                    duration: shouldReduceMotion ? 0.35 : 3.6,
                    repeat: shouldReduceMotion ? 0 : Number.POSITIVE_INFINITY,
                    ease: 'easeInOut',
                  }}
                />

                <motion.circle
                  cx="116"
                  cy="104"
                  r="56"
                  fill="url(#hope-bloom-core)"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={
                    shouldReduceMotion
                      ? { opacity: 0.75, scale: 1 }
                      : { opacity: [0.35, 0.78, 0.42], scale: [0.92, 1.04, 0.98] }
                  }
                  transition={{
                    duration: shouldReduceMotion ? 0.25 : 4.8,
                    repeat: shouldReduceMotion ? 0 : Number.POSITIVE_INFINITY,
                    ease: 'easeInOut',
                  }}
                />

                <motion.path
                  d={HORIZON_PATH}
                  fill="url(#hope-bloom-wave)"
                  initial={{ opacity: 0, y: 18, pathLength: 0 }}
                  animate={
                    shouldReduceMotion
                      ? { opacity: 0.9, y: 0, pathLength: 1 }
                      : { opacity: [0.35, 0.88, 0.55], y: [12, 0, -2, 0], pathLength: [0.45, 1, 0.92, 1] }
                  }
                  transition={{
                    duration: shouldReduceMotion ? 0.3 : 3.4,
                    repeat: shouldReduceMotion ? 0 : Number.POSITIVE_INFINITY,
                    ease: 'easeInOut',
                  }}
                />

                <motion.path
                  d={BLOOM_PATHS[0]}
                  fill="url(#hope-bloom-fill)"
                  stroke="rgba(255,255,255,0.5)"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                  initial={{ opacity: 0, scale: 0.8, pathLength: 0.2 }}
                  animate={
                    shouldReduceMotion
                      ? { opacity: 1, scale: [1, 1.02, 1], pathLength: 1 }
                      : { d: BLOOM_PATHS, opacity: [0.88, 1, 0.94], scale: [0.96, 1.04, 1], pathLength: [0.3, 1, 0.9, 1] }
                  }
                  transition={{
                    duration: shouldReduceMotion ? 1.5 : 4.4,
                    repeat: shouldReduceMotion ? Number.POSITIVE_INFINITY : Number.POSITIVE_INFINITY,
                    ease: 'easeInOut',
                  }}
                />

                <motion.path
                  d="M116 73C109 87 99 97 86 108C98 109 108 116 116 129C124 116 134 109 146 108C133 97 123 87 116 73Z"
                  fill="rgba(255,255,255,0.18)"
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={
                    shouldReduceMotion
                      ? { opacity: 0.4, scale: 1 }
                      : { opacity: [0.18, 0.42, 0.22], scale: [0.8, 1.04, 0.92] }
                  }
                  transition={{
                    duration: shouldReduceMotion ? 0.35 : 3,
                    repeat: shouldReduceMotion ? 0 : Number.POSITIVE_INFINITY,
                    ease: 'easeInOut',
                  }}
                />

                {PARTICLES.map((particle) => (
                  <motion.circle
                    key={`${particle.cx}-${particle.cy}`}
                    cx={particle.cx}
                    cy={particle.cy}
                    r={particle.r}
                    fill={particle.fill}
                    initial={{ opacity: 0, scale: 0.2 }}
                    animate={
                      shouldReduceMotion
                        ? { opacity: 0.9, scale: [0.95, 1.05, 0.95] }
                        : {
                            opacity: [0.35, 1, 0.45, 0.82],
                            scale: [0.55, 1, 0.86, 1.08],
                            x: particle.x,
                            y: particle.y,
                          }
                    }
                    transition={{
                      duration: shouldReduceMotion ? 2.4 : 5.4,
                      delay: particle.delay,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: 'easeInOut',
                    }}
                  />
                ))}
              </motion.svg>
            </motion.div>

            <motion.div
              className="page-transition-loader__caption"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: shouldReduceMotion ? 0.18 : 0.38, delay: 0.08 }}
            >
              <div className="page-transition-loader__brand">TFO</div>
              <div className="page-transition-loader__tagline">{t.header.tagline}</div>
            </motion.div>

            <div className="page-transition-loader__rail" aria-hidden="true">
              <motion.div
                className="page-transition-loader__rail-fill"
                animate={
                  shouldReduceMotion
                    ? { opacity: [0.55, 0.9, 0.55] }
                    : { x: ['-58%', '28%', '115%'] }
                }
                transition={{
                  duration: shouldReduceMotion ? 1.6 : 2.1,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: 'easeInOut',
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
