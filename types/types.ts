export interface MenuItems {
  title: string;
  href: string;
  icon?: React.ReactNode;
}

export interface TypeProps {
  title: string;
  subtitle?: string;
}

export interface BlockTypeProps {
  works: TypeProps;
  reels: TypeProps;
}
