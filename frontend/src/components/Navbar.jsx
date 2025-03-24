import styled from "styled-components";
import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

const Nav = styled.nav`
  background: #333;
  padding: 1rem;
  color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default function Navbar() {
  const { categories } = useContext(DataContext);
  return (
    <Nav>
      {categories?.map(cat => (
        <span key={cat.id}>{cat.name}</span>
      ))}
    </Nav>
  );
}
