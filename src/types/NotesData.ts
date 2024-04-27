export interface INoteData {
  _id: string;
  title: string;
  description: string;
  content: string[];
  tags: string[];
  viewsCount: number;
  slug: string;
  likes: string[];
  likedPosts: string[];
  createdAt: Date;
  updatedAt: Date;
}
