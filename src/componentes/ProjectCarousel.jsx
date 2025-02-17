import React from 'react';
import styled from 'styled-components';

// Estilos do container
const CarouselContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #333; /* Fundo escuro */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

// Estilos para o conteúdo do slide
const SlideContent = styled.div`
  color: white;
  font-size: 1.5rem;
  padding: 20px;
  text-align: center;
`;

const GreenSquare = styled.div`
  width: 100px;
  height: 100px;
   margin: 20px auto;
`;

const ProjectText = () => {
  return (
    <CarouselContainer>
      <SlideContent>
        <h2>ACCEC - ESCOLA DE TEATRO EDUARDO CABÚS</h2>
        <p>A ACCEC ESPERA POR VOCÊ.</p>
        <p>
          NESSE MOMENTO DIFÍCIL QUE O PLANETA ESTÁ PASSANDO, A FAMÍLIA ACCEC E SEUS ALUNOS PERMANECEM UNIDOS NO ESTUDO DA ARTE ATRAVÉS DA INTERNET UTILIZANDO APLICATIVO PARA AULAS EM VÍDEO CONFERÊNCIA, AO VIVO, DEBATENDO, EXPONDO E MAIS QUE TUDO, VIVENDO A ARTE DO TEATRO.
        </p>
        <p>DI VELLOSO, Professora, Atriz, Escritora e Diretora Teatral</p>
        <GreenSquare />
      </SlideContent>
    </CarouselContainer>
  );
};

export default ProjectText;
