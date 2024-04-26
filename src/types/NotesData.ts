export interface INoteData {
  _id: string;
  title: string;
  content: string[];
  tags: string[];
  viewsCount: number;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
}
