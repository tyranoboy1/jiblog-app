import styled from "styled-components";

export const PostDetailBox = styled.div`
  min-height: 90vh;
  padding: 20px 40px;
  text-align: left;
  max-width: 680px;
  margin: 0 auto;
  line-height: 24px;
`;

export const PostDetailTitle = styled.div`
  font-size: 36px;
  line-height: 40px;
`;
export const PostDetailProfileBox = styled.div`
  display: flex;
  gap: 8px;
  font-size: 14px;
  align-items: center;
  padding: 10px 0px;
`;

export const DetailUtilBox = styled.div`
  padding: 10px 0px;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  display: flex;
  gap: 10px;
`;
export const PostDetailText = styled.div`
  color: dimgray;
  font-size: 16px;
  padding: 20px 0px;
`;

export const PostBox = styled.div`
  min-height: 90vh;
  padding: 20px 40px;
  text-align: left;
  max-width: 680px;
  margin: 0 auto;
  line-height: 24px;
`;
export const PostListBox = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
  border-top: 1px solid gray;
`;

export const PostProfileAvatar = styled.div`
  width: 36px;
  height: 36px;
  background-color: gray;
  border-radius: 50%;
`;
export const PostProfileBox = styled.div`
  display: flex;
  gap: 8px;
  font-size: 14px;
  align-items: center;
`;
export const PostDate = styled.div`
  color: gray;
`;
export const PostAuthor = styled.div`
  color: gray;
`;
export const PostTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin: 14px 0px;
`;
export const PostText = styled.div`
  color: dimgray;
  font-size: 16px;
`;
export const UtilBox = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: row-reverse;
  font-size: 14px;
  color: gray;
`;
export const UtilText = styled.div<{ active: boolean }>`
  color: ${({ active }) => (active ? "black" : "gray")};
  font-weight: 600;
  &:hover {
    color: black;
  }
  &:focus {
    color: black;
  }
`;

export const FilterBox = styled.div`
  display: flex;
  gap: 12px;
  margin: 0 auto;
  max-width: 680px;
  font-size: 16px;
  color: gray;
  cursor: pointer;
  padding: 48px 20px 0px 20px;
`;

export const FilterList = styled.div<{ active: boolean }>`
  color: ${({ active }) => (active ? "black" : "gray")};
  font-weight: 600;
`;
