import React, { useState } from "react";
import {} from "../home/styles/home.styles";
import { Link } from "react-router-dom";
import {
  FilterBox,
  FilterList,
  PostAuthor,
  PostBox,
  PostDate,
  PostListBox,
  PostProfileAvatar,
  PostProfileBox,
  PostText,
  PostTitle,
  UtilBox,
  UtilText,
} from "./styles/post.styles";
import { IPostListProps } from "./interface/post.interface";

const PostList = (props: IPostListProps) => {
  const { Navigation } = props;
  const [activeFilter, setActiveFilter] = useState("");

  const handleFilterClick = (filterName: string) => {
    setActiveFilter(filterName);
  };
  return (
    <>
      {Navigation && (
        <FilterBox>
          <FilterList
            active={activeFilter === "전체"}
            onClick={() => handleFilterClick("전체")}
          >
            전체
          </FilterList>
          <FilterList
            active={activeFilter === "새글"}
            onClick={() => handleFilterClick("새글")}
          >
            새글
          </FilterList>
        </FilterBox>
      )}

      <PostBox>
        {[...Array(10)].map((item, index) => (
          <PostListBox key={index}>
            <Link to={`/posts/${index}`}>
              <PostProfileBox>
                <PostProfileAvatar />
                <PostAuthor>ji hoon</PostAuthor>
                <PostDate>2023.11월.21일 화요일</PostDate>
              </PostProfileBox>
              <PostTitle>게시글{index}</PostTitle>
              <PostText>안녕하세요 한지훈입니다.</PostText>
              <UtilBox>
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
              </UtilBox>
            </Link>
          </PostListBox>
        ))}
      </PostBox>
    </>
  );
};

export default PostList;
