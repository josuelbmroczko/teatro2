import React from 'react';
import styled from 'styled-components';
import Navbar from './barraMenu/barra';

const SectionAluno = () => {
  return (
    <Section>
        <Navbar/>
      <Container>
        <Header>
          <h1>ACCEC</h1>
          <h2>CURSO TÉCNICO PROFISSIONALIZANTE DE TEATRO</h2>
          <h3>ASSOCIAÇÃO CASA DE CULTURA EDUARDO CABÚS</h3>
        </Header>

        <Info>
          <p>
            <strong>Informações:</strong> (mensagem)
          </p>
          <p>
            <strong>Whatsapp:</strong> 21 981266619
          </p>
          <Button>Fazer Login</Button>
          <Promo>
            <strong>NOVAS TURMAS COM VALORES PROMOCIONAIS.</strong>
          </Promo>
        </Info>

        <CallToAction>
          <h2>FAÇA TEATRO</h2>
          <p>
            <strong>INFORMAÇÕES SOMENTE POR WHATSAPP</strong>
          </p>
          <p>
            <strong>BEM-VINDOS</strong>
          </p>
        </CallToAction>

        <Message>
          <p>
            Olá, sou professora de Teatro da Escola Eduardo Cabús - ACCEC e gostaria de conversar com você, saber de suas pretensões e também de suas necessidades, até porque algumas pessoas têm objetivos, traçam metas e que, por vezes, se torna difícil dar o primeiro passo. E nós, estamos aqui para ajudá-lo. Entre em contato, faça-nos uma visita. <q>Se permita sonhar, nós o ajudaremos a realizar.</q> Di Velloso//
          </p>
        </Message>

        <Membership>
          <h3>Torne-se um membro da ACCEC!</h3>
          <p>
            Faça logo seu Login, registre-se e poderá navegar em nossas páginas exclusivas, onde você encontrará assuntos e comentários sobre Arte, trechos de aula, peças e até making of de alunos.
          </p>
        </Membership>
      </Container>
    </Section>
  );
};

export default SectionAluno;

// Styled Components
const Section = styled.section`
  background: linear-gradient(135deg, #2c3e50, #000);
  color: #f5f5f5;
  padding: 60px 20px;
  font-family: 'Cinzel', serif;

  @media (max-width: 768px) {
    padding: 40px 15px;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Header = styled.header`
  h1 {
    font-size: 4rem;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
    color: #e1b12c;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);

    @media (max-width: 768px) {
      font-size: 3rem;
    }
  }

  h2 {
    font-size: 2.2rem;
    margin-bottom: 0.5rem;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);

    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    font-weight: 400;

    @media (max-width: 768px) {
      font-size: 1.3rem;
    }
  }
`;

const Info = styled.div`
  p {
    font-size: 1.2rem;
    margin: 0.5rem 0;
  }
`;

const Button = styled.button`
  padding: 12px 25px;
  font-size: 1rem;
  background-color: #e1b12c;
  border: none;
  cursor: pointer;
  color: #000;
  font-weight: bold;
  border-radius: 5px;
  margin: 10px 0;
  transition: background-color 0.3s;

  &:hover {
    background-color: #cf9a27;
  }
`;

const Promo = styled.p`
  font-size: 1.3rem;
  color: #ffd700;
  font-weight: bold;
  margin-top: 1rem;
`;

const CallToAction = styled.div`
  h2 {
    font-size: 3rem;
    margin-bottom: 0.5rem;
    color: #e1b12c;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

const Message = styled.div`
  p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin: 1rem 0;
    padding: 0 10px;
  }

  q {
    font-style: italic;
    color: #ffd700;
  }
`;

const Membership = styled.div`
  h3 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    color: #e1b12c;

    @media (max-width: 768px) {
      font-size: 1.7rem;
    }
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin: 0.5rem 0;
  }
`;

