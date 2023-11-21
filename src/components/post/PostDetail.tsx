import React, { useState } from "react";
import {
  DetailUtilBox,
  PostAuthor,
  PostDate,
  PostDetailBox,
  PostDetailProfileBox,
  PostDetailText,
  PostDetailTitle,
  PostProfileAvatar,
  UtilText,
} from "./styles/post.styles";

const PostDetail = () => {
  const [activeFilter, setActiveFilter] = useState("");

  const handleFilterClick = (filterName: string) => {
    setActiveFilter(filterName);
  };
  return (
    <PostDetailBox>
      <div>
        <PostDetailTitle>dfdfdfdfasdfadsfdfasddsfadsfdsfsdfasd</PostDetailTitle>
      </div>
      <PostDetailProfileBox>
        <PostProfileAvatar />
        <PostAuthor>ji hoon</PostAuthor>
        <PostDate>2023.11월.21일 화요일</PostDate>
      </PostDetailProfileBox>
      <DetailUtilBox>
        <UtilText
          active={activeFilter === "삭제"}
          onClick={() => handleFilterClick("삭제")}
        >
          삭제
        </UtilText>
        <UtilText
          active={activeFilter === "수정"}
          onClick={() => handleFilterClick("수정")}
        >
          수정
        </UtilText>
      </DetailUtilBox>
      <PostDetailText>안녕하세요 한지훈입니다.</PostDetailText>
    </PostDetailBox>
  );
};

export default PostDetail;
