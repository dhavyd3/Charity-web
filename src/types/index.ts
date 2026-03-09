export interface NavLink {
  name: string;
  href: string;
}

export interface NewsArticle {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

export interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  href: string;
  color: string;
}

export interface StatItem {
  icon: React.ReactNode;
  number: string;
  label: string;
  description: string;
  color: string;
}
