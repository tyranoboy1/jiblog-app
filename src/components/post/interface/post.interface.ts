/** post 분류 태그 유무 타입 인터페이스 */
export interface IPostListProps {
  hasNavigation?: boolean;
  defaultTab?: TabType | CategoryType;
}
/** post 태그 타입 인터페이스 */
export type TabType = "all" | "my" | "category";

/** 게시글 데이터 타입 인터페이스 */
export interface IPostType {
  id?: string;
  content: string;
  createAt: string;
  email: string;
  summary: string;
  title: string;
  updateAt: string;
  uid: string;
  category?: CategoryType;
  comments?: ICommentDataProps[];
}
/** 카테고리 타입 */
export type CategoryType = "Frontend" | "Backend" | "Web" | "Native";
export const CATEGORIES: CategoryType[] = [
  "Frontend",
  "Backend",
  "Web",
  "Native",
];

/** 댓글 props 타입 인터페이스 */
export interface ICommentProps {
  post: IPostType;
  getPost: (id: string) => Promise<void>;
}
/** 댓글 데이터 타입 인터페이스 */
export interface ICommentDataProps {
  content: string;
  uid: string;
  email: string;
  createAt: string;
}
