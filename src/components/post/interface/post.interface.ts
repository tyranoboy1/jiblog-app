/** post 분류 태그 유무 */
export interface IPostListProps {
  Navigation?: boolean;
}
/** post 태그 타입 */
export type TabType = "all" | "my";

/** 게시글 데이터 타입 */
export interface IPostType {
  id?: string;
  content: string;
  createAt: string;
  email: string;
  summary: string;
  title: string;
}
