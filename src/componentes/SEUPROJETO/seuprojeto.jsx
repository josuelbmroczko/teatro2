 
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f9f9f9;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #FFBF00;  /* Amarelo brilhante */
  text-align: center;
  margin-bottom: 20px;
`;

const InfoSection = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

const InfoItem = styled.p`
  font-size: 1.2rem;
  color: #333;
  margin: 10px 0;
  text-align: center;

  & a {
    color: #FFBF00;
    text-decoration: none;
    font-weight: bold;
  }
`;

const ContactTitle = styled.h2`
  font-size: 1.8rem;
  color: #444;
  margin-bottom: 20px;
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const SocialIcon = styled.a`
  font-size: 1.6rem;
  color: #333;
  text-decoration: none;

  &:hover {
    color: #FFBF00;
  }
`;

const Seuprojeto = () => {
  return (
    <Container>
      <Title>Informações de Contato</Title>
      <InfoSection>
        <ContactTitle>Fale Conosco</ContactTitle>
        <InfoItem>
          <strong>WhatsApp:</strong> <a href="https://wa.me/5521981266619" target="_blank" rel="noopener noreferrer">021 981266619</a>
        </InfoItem>
        <InfoItem>
          <strong>Email:</strong> <a href="mailto:escoladeteatroeduardocabus@gmail.com">escoladeteatroeduardocabus@gmail.com</a>
        </InfoItem>
        <InfoItem>
          <strong>Instagram:</strong> <a href="https://instagram.com/accecrj" target="_blank" rel="noopener noreferrer">@accecrj</a>
        </InfoItem>
        <SocialMedia>
          <SocialIcon href="https://wa.me/5521981266619" target="_blank" rel="noopener noreferrer">WhatsApp</SocialIcon>
          <SocialIcon href="https://instagram.com/accecrj" target="_blank" rel="noopener noreferrer">Instagram</SocialIcon>
        </SocialMedia>
      </InfoSection>
    </Container>
  );
};

export default Seuprojeto;
