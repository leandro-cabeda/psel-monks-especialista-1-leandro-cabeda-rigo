import styled from "styled-components";
import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  padding: 2rem;
`;

const Tag = styled.span`
  background: #333;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
`;

export default function CategoryTags() {
  const { categories } = useContext(DataContext);
  return (
    <TagsContainer>
      {categories?.map(tag => (
        <Tag key={tag.id}>{tag.name}</Tag>
      ))}
    </TagsContainer>
  );
}
