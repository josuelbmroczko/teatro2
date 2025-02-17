import React from 'react';
import styled from 'styled-components';
import Navbar from './barraMenu/barra';

const SectionContainer = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #1e1e1e, #4a4a4a);
  color: #fff;
  font-family: 'Georgia', serif;
  text-align: center;
`;

const HeaderWrapper = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  letter-spacing: 0.2rem;
  text-shadow: 3px 3px 5px rgba(0,0,0,0.7);
  margin: 0;
`;

const Subtitle = styled.h2`
  font-size: 1.8rem;
  margin: 0.5rem 0;
  font-weight: 300;
`;

const Association = styled.h3`
  font-size: 1.2rem;
  font-style: italic;
  margin-bottom: 1rem;
`;

const InfoText = styled.p`
  font-size: 1.1rem;
  margin: 1rem 0;
`;

const Highlight = styled.span`
  font-weight: bold;
  color: #f0e68c;
`;

const ActionButton = styled.button`
  background: #c59d5f;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1.1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
  margin: 1rem;

  &:hover {
    background: #a57d3f;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin: 2rem 0 1rem;
  color: #f0e68c;
`;

const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: left;
  line-height: 1.6;
  font-size: 1rem;

  p {
    margin-bottom: 1.5rem;
  }

  h3 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    text-transform: uppercase;
    border-bottom: 2px solid #c59d5f;
    display: inline-block;
    padding-bottom: 0.3rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin-bottom: 2rem;

    li {
      margin-bottom: 0.5rem;
      position: relative;
      padding-left: 1.5rem;

      &::before {
        content: '🎭';
        position: absolute;
        left: 0;
      }
    }
  }
`;

const TheaterSection = () => {
  return (
    <SectionContainer>
        <Navbar/>
      <HeaderWrapper>
        <Title>ACCEC</Title>
        <Subtitle>CURSO TÉCNICO PROFISSIONALIZANTE DE TEATRO</Subtitle>
        <Association>ASSOCIAÇÃO CASA DE CULTURA EDUARDO CABÚS</Association>
        <InfoText>
          Informações: (mensagem)<br />
          Whatsapp: <Highlight>21 981266619</Highlight>
        </InfoText>
        <ActionButton>Fazer Login</ActionButton>
        <InfoText>
          <Highlight>NOVAS TURMAS COM VALORES PROMOCIONAIS.</Highlight>
        </InfoText>
      </HeaderWrapper>

      <SectionTitle>FAÇA TEATRO</SectionTitle>

      <Content>
        <p>
          INFORMAÇÕES SOMENTE POR WHATSAPP<br />
          Você está prestes a ser mais um aluno da ACCEC-Casa de Cultura Eduardo Cabus, portanto deve conhecer nossa Metodologia de Ensino, nossa Grade Curricular e horários.
        </p>
        <p>
          Entrando para a ACCEC, o aluno irá aprender que a investigação teatral faz parte da rotina da escola, estudando Stanislavski, Meyerhold, Grotowski, Brecht, entre outros.
        </p>
        <p>
          Nosso curso é desenvolvido a partir das necessidades do aluno. A metodologia é ministrada através de módulos bimestrais que serão incorporados – em síntese – ao próximo módulo. Assim, nossos alunos poderão entrar no mês que lhes aprouver, sem perda da Metodologia e com um ganho considerável na troca de experiências com os colegas, que descobrirão <Highlight>Corpo - Voz - Mente do SER ATOR!</Highlight>
        </p>
        
        <h3>Nossa Grade Curricular</h3>
        <ul>
          <li>História das Artes Cênicas</li>
          <li>Literatura Dramática</li>
          <li>Interpretação Cênica</li>
          <li>Linguagem Televisiva</li>
          <li>Educação Vocal para dublagem</li>
          <li>Educação e Estética da Voz</li>
          <li>Expressão Corporal</li>
          <li>Domínio do Movimento - Làban</li>
          <li>Maquiagem Cênica</li>
          <li>Grupo de Estudo/ Simbologia da palavra</li>
        </ul>

        <h3>Matrículas e Horários</h3>
        <p>
          <strong>TURMAS ONLINE</strong><br />
          Turmas através de vídeoconferência com aulas ao vivo.<br />
          Aulas gravadas para acesso do aluno.<br />
          Grupos privados no Whatsapp.<br />
          Plataforma de sala de aula de estudo.<br />
          Material didático online.<br />
          Prática de exercícios por vídeoconferência.
        </p>
        <p>
          <strong>TURMAS PRESENCIAIS</strong><br />
          Estamos aceitando matrículas para a turma presencial que terá início em Novembro/2021.<br />
          Planos de pagamentos a partir de R$350,00 por mês.<br />
          ENVIE SUA MENSAGEM VIA WHATSAPP PARA MAIORES INFORMAÇÕES: <Highlight>(21) 981266619</Highlight>
        </p>
        <p>
          ACCEC – QUALIDADE DE ENSINO AO SEU ALCANCE!
        </p>

        <h3>Quer ser Dublador?</h3>
        <p>
          Você que pretende fazer dublagem vai precisar, primeiramente, de um bom curso de teatro que lhe ofereça:
        </p>
        <ul>
          <li>Técnicas de embocadura</li>
          <li>Dicção</li>
          <li>Treinamento visão/leitura</li>
          <li>Interpretação</li>
          <li>Rapidez de raciocínio</li>
          <li>Rapidez de assimilação</li>
          <li>Disponibilidade e gentileza</li>
        </ul>
        <p>
          O curso de teatro da ACCEC lhe oferece tudo que você precisa para iniciar a realizar seu sonho.
        </p>
        <p>
          O DRT é definitivo, expedido pelo Ministério do Trabalho conforme a lei que regula as profissões.<br />
          Escola registrada pelo MEC/SEEDUC e cadastrada no SISTEC (órgão validador de diplomas).<br />
          Ao término do curso, o aluno receberá Diploma, Histórico Escolar e o DRT expedido pelo Ministério do Trabalho.
        </p>
      </Content>
    </SectionContainer>
  );
};

export default TheaterSection;
