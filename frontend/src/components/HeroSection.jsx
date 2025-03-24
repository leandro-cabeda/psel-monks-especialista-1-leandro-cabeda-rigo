import styled from "styled-components";

const Hero = styled.section`
  background: url('https://via.placeholder.com/1500x400') no-repeat center;
  background-size: cover;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  padding: 2rem;

  @media (max-width: 768px) {
    height: 250px;
  }
`;

const HeroText = styled.div`
  background: rgba(0,0,0,0.6);
  padding: 1rem 2rem;
  border-radius: 8px;
`;

export default function HeroSection() {
  return (
    <Hero>
      <HeroText>
        <h1>Bem-vindo ao Monks</h1>
        <p>Transformando ideias em soluções digitais</p>
      </HeroText>
    </Hero>
  );
}
