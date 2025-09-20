import {
  RichTextItemResponse,
  PartialSelectResponse,
} from '@notionhq/client/build/src/api-endpoints';

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
