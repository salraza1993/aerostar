export interface PageData<TNode = unknown> {
  pages: {
    edges: {
      node: TNode;
    }[];
  };
}
export interface ButtonInterface {
  url: string,
  title: string,
  target: string,
}
export interface ImageInterface {
  node: {
    altText: string,
    title?: string,
    sourceUrl: string,
  }
}
export type SubBannerQueryData = {
  title: string
  featuredImage: ImageInterface
}
