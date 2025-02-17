import React from 'react';
import styled from 'styled-components';
 import masks from '../../src/public/imagem/masks-308614_1280.png'
import Navbar from './barraMenu/barra';
const SectionWrapper = styled.section`
  padding: 40px 20px;
  background-color: #2c3e50; /* Fundo mais dramático */
  color: #ecf0f1;
  text-align: center;
  font-family: 'Georgia', serif; /* Fonte mais clássica e teatral */
`;

const TextContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #f39c12; /* Cor vibrante para um destaque teatral */
  margin-bottom: 20px;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5); /* Sombra de texto para dar mais ênfase */
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  font-weight: normal;
  color: #ecf0f1;
  margin-bottom: 20px;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
`;

const InfoContainer = styled.div`
  margin-bottom: 20px;
`;

const InfoTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #f39c12;
`;

const InfoText = styled.p`
  font-size: 1.2rem;
  margin: 8px 0;
  line-height: 1.6;
`;

const Image = styled.img`
  width: 80%;
  margin: 30px 0;
  max-width: 600px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6); /* Sombra para dar mais destaque na imagem */
`;

const ContactContainer = styled.div`
  background-color: #34495e;
  padding: 20px;
  margin: 20px 0;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
`;

const ContactTitle = styled.h4`
  font-size: 1.6rem;
  font-weight: bold;
  color: #e67e22;
  text-transform: uppercase; /* Letras maiúsculas para reforçar a ideia de seriedade e arte */
`;

const ContactText = styled.p`
  font-size: 1.2rem;
  color: #ecf0f1;
  line-height: 1.6;
`;

const BorderBox = styled.div`
  border: 5px solid #f39c12;
  padding: 20px;
  margin: 20px 0;
  border-radius: 8px;
`;

function Escola() {
  return (
    <SectionWrapper id="aEscola">
        <Navbar/>
      <TextContainer>
        <Title>ACCEC</Title>
        <Subtitle>CURSO TÉCNICO PROFISSIONALIZANTE DE TEATRO</Subtitle>
        <h3>ASSOCIAÇÃO CASA DE CULTURA EDUARDO CABÚS</h3>

        <InfoContainer>
          <InfoTitle>Informações:</InfoTitle>
          <InfoText>Whatsapp: 21 981266619</InfoText>
        </InfoContainer>

        <InfoContainer>
          <InfoText>FAÇA TEATRO</InfoText>
          <InfoText>INFORMAÇÕES SOMENTE POR WHATSAPP</InfoText>
        </InfoContainer>

        <BorderBox>
          <h4>A ESCOLA</h4>
          <InfoText>
            O ESPAÇO 13 MANTÉM EM SUA SEDE NA LAPA-RJ A ESCOLA TÉCNICA DE TEATRO ACCEC - CASA DE CULTURA EDUARDO CABÚS DESDE 2000, FORMANDO ATORES E ATRIZES PARA O MERCADO DE TRABALHO.
          </InfoText>
          <InfoText>
            NOSSA METODOLOGIA COMPREENDE DESDE A HISTÓRIA DAS ARTES CÊNICAS À PRÁTICAS DE MONTAGEM. NOSSOS ALUNOS APRENDEM A DIFERENCIAR A LINGUAGEM CÊNICA DA LINGUAGEM TELEVISIVA E, AO LONGO DO CURSO, RECEBEM TREINAMENTO E ESTÁGIO SUPERVISIONADO COM PROFESSORES CAPACITADOS.
          </InfoText>
          <InfoText>
            O Curso Técnico Profissionalizante oferecido pela ACCEC é reconhecido através de Ato Autorizativo Definitivo CEE (Conselho Estadual de Educação) SEEDUC-RJ (Secretaria de Educação do Estado do Rio de Janeiro) e pelo MEC (Ministério da Educação e Cultura). O aluno ao formar-se receberá DIPLOMA, HISTÓRICO ESCOLAR e terá seu nome PUBLICADO EM DIÁRIO OFICIAL DA UNIÃO, conforme Lei de Diretrizes e Bases da Educação Nacional.
          </InfoText>
          <InfoText>
            Além disso, A ACCEC fica pertinho de você, bem ao lado dos Arcos da Lapa, atendendo aos bairros adjacentes, baixada como também a Zona Sul.
          </InfoText>
        </BorderBox>

        <Image
          src={masks} // Substitua com o caminho da sua imagem
          alt="Imagem de teatro"
        />

        <ContactContainer>
          <ContactTitle>VOCÊ MERECE O MELHOR!</ContactTitle>
          <ContactText>ACCEC - CASA DE CULTURA EDUARDO CABÚS</ContactText>
          <ContactText>ESPAÇO 13 ARTE</ContactText>
        </ContactContainer>
      </TextContainer>
    </SectionWrapper>
  );
}

export default Escola;
