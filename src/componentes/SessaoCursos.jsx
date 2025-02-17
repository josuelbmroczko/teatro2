import React from 'react';
import styled from 'styled-components';
import curso from '../public/imagem/fotoAdvogado.jpg';

const SectionWrapper = styled.section`
  position: relative;
  display: flex;
  padding: 30px;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;

  img {
    width: 100%;
    height: auto;
    border-radius: 15px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
  }
`;

const TextOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  background-color: #0000006c;
  text-align: center;
  font-family: 'Playfair Display', serif;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.842);

  h1 {
    font-size: 2.5rem;
    margin-bottom: 16px;
  }

  p {
    font-size: 1.4rem;
    margin-bottom: 8px;
    font-style: italic;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

const SessaoCursos = () => {
  const whatsappLink = 'https://wa.me/5599999999999'; // Altere pelo link correto do WhatsApp

  return (
    <SectionWrapper>
      <img src={curso} alt="Promoção de cursos" />
      <TextOverlay>
        <h1>NOVAS TURMAS COM VALORES PROMOCIONAIS.</h1>
        <p>FAÇA TEATRO</p>
        <p>INFORMAÇÕES SOMENTE POR WHATSAPP</p>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          Clique aqui para mais informações
        </a>
      </TextOverlay>
    </SectionWrapper>
  );
};

export default SessaoCursos;
