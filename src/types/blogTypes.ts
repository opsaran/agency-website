import { ImageProps } from "./imagePropsTypes";

export type BlogPostType = "Web Design" | "SEO";

export interface BlogPost {
  catagory: BlogPostType[];
  date: string;
  id: string;
  readTime: number;
  image: ImageProps;
  title: string;
}

export interface Author {
  name: string;
  picture: Picture;
}

export interface Picture {
  fileName: string;
  width: number;
  height: number;
  url: string;
}

export interface Content {
  raw: any;
}

export interface CoverImage {
  url: string;
  width: number;
  height: number;
  fileName: string;
}

interface SeoImage {
  url: string;
}
export interface Seo {
  title: string;
  description: string;
  image: SeoImage;
}

export interface BlogPostInterface {
  id: string;
  title: string;
  slug: string;
  publishedAt: any;
  excerpt: string;
  readTime: number;
  author: Author;
  content: Content;
  coverImage: CoverImage;
  seo: Seo;
}

export type BlogPostHero = Omit<BlogPostInterface, "content">;
