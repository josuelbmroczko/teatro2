import { useEffect } from 'react';
import styled from "styled-components";

export const StyledSobretexto = styled.div`
  z-index: 5;
  width: 80%;
  padding: 30px;
  color: #f1f1f1; /* Cor do parágrafo */
  font-family: 'Georgia', serif; /* Fonte mais dramática e teatral */
  background: rgba(0, 0, 0, 0.7); /* Fundo escuro para destacar o texto */
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.8); /* Sombra mais forte para adicionar profundidade */
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px); /* Efeito de elevação suave ao passar o mouse */
  }

  span {
    font-size: 2rem;
    font-weight: 100;
    padding-left: 35px;
    color: #f1c40f; /* Amarelo vibrante para o destaque */
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7); /* Efeito de sombra para o destaque */
  }

  h2 {
    padding-top: 30px;
    padding-left: 35px;
    font-size: 2.8rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-shadow: 3px 3px 12px rgba(0, 0, 0, 0.8); /* Aumento da sombra para mais dramaticidade */
    color: #fff;
  }

  p {
    text-align: start;
    margin-left: 5%;
    font-size: 1.25rem;
    line-height: 1.8;
    margin-bottom: 10px; /* Espaço entre os parágrafos */
    color: #f1f1f1; /* Cor clara para o texto */
  }

  @media (max-width: 1000px) {
    width: 100%;
    padding: 10px;

    span {
      position: relative;
      top: -40px;
      font-size: 1.5rem;
    }

    h2 {
      font-size: 1.8rem;
      padding-top: 0;
    }

    p {
      width: 90%;
      padding: 10px;
      font-size: 1rem; /* Reduz o tamanho da fonte em dispositivos menores */
    }
  }
`;

export const StyledSobre = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #2c3e50; /* Cor de fundo */
  justify-content: center;
  align-items: center;
  animation: slideUp 0.8s ease forwards; /* Animação suave para aparecer */
  padding: 20px;
  text-align: center;
  overflow: hidden; /* Para esconder elementos fora da área do contêiner */
  border-radius: 20px;

  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }

  p {
    flex-direction: column;
    width: 90%;
    padding-top: 20px;
    font-size: 18px;
    font-family: 'Georgia', serif;
    line-height: 1.6;
    color: #fff;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5); /* Efeito de sombra no texto */
  }

  img {
    position: relative;
    width: 100%; /* Garante que a imagem ocupe toda a largura disponível */
    height: auto; /* Mantém a proporção da imagem */
    max-height: 500px;
    object-fit: cover;
    border-radius: 0 0 100px 100px;
    box-shadow: 6px 6px 25px rgba(0, 0, 0, 0.7); 
    transition: transform 0.5s ease-in-out, box-shadow 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05); 
      box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.8);
    }
  }

  @media (max-width: 1000px) {
    height: auto;
    width: 100%;
    padding-top: 10px;
    text-align: center;

    p {
      width: 90%;
      padding: 10px;
    }

    h2 {
      font-size: 1.2rem;
      padding-top: 0;
    }

    img {
      width: 100%; /* Garante que a imagem ocupe toda a largura em telas menores */
      height: auto; /* Ajusta a altura de acordo com a largura */
      max-height: 300px; /* Limita a altura da imagem para não exagerar em telas pequenas */
    }
  }
`;
