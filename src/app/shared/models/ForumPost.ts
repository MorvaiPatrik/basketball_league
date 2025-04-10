export interface ForumPost {
  id: string;
  authorId: string;
  authorName: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt?: Date;
  commentsCount: number;
  likes: number;
  tags?: string[];
  isPinned?: boolean;
}
