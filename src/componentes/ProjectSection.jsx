import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  background-color: #fff5cc;
  padding: 40px 20px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #ff7f50;
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 20px;
`;

const HighlightText = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ff6347;
`;

const InfoBox = styled.div`
  margin-top: 30px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const InfoTitle = styled.h3`
  font-size: 1.6rem;
  color: #ff6347;
  margin-bottom: 15px;
`;

const ContactInfo = styled.p`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 10px;
`;

const Button = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #ff6347;
  color: white;
  font-weight: bold;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 20px;
  
  &:hover {
    background-color: #e55342;
  }
`;

const ProjectSection = () => {
  return (
    <SectionContainer>
      <Title>SEU PROJETO É NOSSA META DE TRABALHO</Title>
      <Subtitle>TOME UMA DECISÃO</Subtitle>
      <HighlightText>SAIA DA CADEIRA</HighlightText>
      <Subtitle>QUER SER DUBLADOR?</Subtitle>
      <p>Turmas com horários especiais para alunos que pretendem ser dubladores</p>
      <p>DRT DEFINITIVO.</p>

      <Button href="#">LEIA MAIS</Button>

      <InfoBox>
        <InfoTitle>Informações através de mensagem por whatsapp​</InfoTitle>
        <ContactInfo>Tel: 021 981266619</ContactInfo>
        <ContactInfo>email: escoladeteatroeduardocabus@gmail.com</ContactInfo>
        <ContactInfo>instagram: @accecrj</ContactInfo>
      </InfoBox>
    </SectionContainer>
  );
}

export default ProjectSection;
