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
  work: TypeProps;
  reels: TypeProps;
  writings: TypeProps;
}

export interface HikeDataProps {
  mountainName: string;
  mountainENName: string;
  month: string;
  date: string;
  intro: string;
  images: string[];
}
