import styled from "styled-components";
import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  padding: 2rem;
`;

const Card = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  width: 250px;
  text-align: center;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

export default function CardList() {
  const { cards } = useContext(DataContext);
  return (
    <CardContainer>
      {cards?.map(card => (
        <Card key={card.id}>
          <CardImage src={card.image_url} alt={card.title} />
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </Card>
      ))}
    </CardContainer>
  );
}
