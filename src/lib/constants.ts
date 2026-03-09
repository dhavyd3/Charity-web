export const SITE_NAME = "Together For Orphans";
export const SITE_DESCRIPTION =
  "A charitable organization dedicated to supporting orphans through education, healthcare, and sustainable development programs.";
export const SITE_URL = "https://togetherfororphans.org";

export const CONTACT = {
  phone: "+1 (555) 123-4567",
  email: "info@togetherfororphans.org",
  address: "123 Charity Lane, Hope City, HC 12345",
  officeHours: "Monday - Friday: 8:00 AM - 4:00 PM",
} as const;

export const SOCIAL_LINKS = {
  facebook: "https://facebook.com",
  instagram: "https://instagram.com",
} as const;

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Hospital", href: "/hospital" },
  { name: "Reception Centers", href: "/centers" },
  { name: "Education", href: "/education" },
  { name: "Projects", href: "/projects" },
  { name: "News", href: "/news" },
  { name: "Contact", href: "/contact" },
] as const;
