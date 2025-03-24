import styled from "styled-components";

const FooterContainer = styled.footer`
  background: #333;
  color: white;
  padding: 1rem;
  text-align: center;
  margin-top: 2rem;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <p>© 2025 Monks. Todos os direitos reservados.</p>
    </FooterContainer>
  );
}
