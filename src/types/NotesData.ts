export interface INoteData {
  _id: string;
  title: string;
  description: string;
  content: string[];
  tags: string[];
  viewsCount: number;
  slug: string;
  createdBy: string;
  likes: string[];
  likedNotes: string[];
  category: string;
  favoriteNotes: string[];
  createdAt: Date;
  updatedAt: Date;
}
