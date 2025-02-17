import React from 'react';
import foto1 from '../public/imagem/teatrofoto1.avif';
import foto2 from '../public/imagem/teatrofoto2.avif';
import Navbar from './barraMenu/barra';

function Administracao() {
  return (
    <section

      id="administracao"
      style={{
        padding: '50px 0',
        background: 'linear-gradient(145deg, #3d3d3d, #1e1e1e)',
        color: '#fff',
        fontFamily: "'Garamond', serif",
      }}
    >
        <Navbar/>
      {/* Imagem do topo */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
       
      </div>

      {/* Títulos principais */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2
          style={{
            fontSize: '40px',
            color: '#ffcc00',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
          }}
        >
          ACCEC - CURSO TÉCNICO PROFISSIONALIZANTE DE TEATRO
        </h2>
        <h3
          style={{
            fontSize: '28px',
            color: '#ffd700',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
          }}
        >
          ASSOCIAÇÃO CASA DE CULTURA EDUARDO CABÚS
        </h3>
      </div>

      {/* Texto do conteúdo */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <p
          style={{
            fontSize: '18px',
            color: '#fff',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)',
          }}
        >
          <strong>Informações:</strong> (mensagem)
        </p>
        <p
          style={{
            fontSize: '18px',
            color: '#ffd700',
            fontWeight: 'bold',
          }}
        >
          <strong>Whatsapp:</strong> 21 981266619
        </p>
        <p
          style={{
            fontSize: '18px',
            color: '#fff',
            fontStyle: 'italic',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)',
          }}
        >
          <strong>Fazer login</strong>
        </p>
        <p
          style={{
            fontSize: '18px',
            color: '#ffcc00',
            fontWeight: 'bold',
          }}
        >
          NOVAS TURMAS COM VALORES PROMOCIONAIS.
        </p>
      </div>

      {/* Imagem do final */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <img
          src={foto1}
          alt="Imagem do curso"
          style={{
            width: '80%',
            maxWidth: '600px',
            margin: '0 auto',
            borderRadius: '10px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
            border: '5px solid #ffcc00',
          }}
        />
      </div>

      {/* Outro conteúdo */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h3
          style={{
            fontSize: '32px',
            color: '#ffd700',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
          }}
        >
          FAÇA TEATRO
        </h3>
        <p
          style={{
            fontSize: '18px',
            color: '#fff',
            fontWeight: 'bold',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)',
          }}
        >
             <img
          src={foto2}
          alt="Imagem do curso"
          style={{
            width: '80%',
            maxWidth: '600px',
            margin: '0 auto',
            borderRadius: '10px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
            border: '5px solid #ffcc00',
          }}
        />
          <strong>INFORMAÇÕES SOMENTE POR WHATSAPP</strong>
        </p>
        <p
          style={{
            fontSize: '18px',
            color: '#ffd700',
            fontWeight: 'bold',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)',
          }}
        >
          <strong>EDUARDO CABÚS</strong>
        </p>
        <p
          style={{
            fontSize: '16px',
            color: '#ddd',
            lineHeight: '1.8',
            textAlign: 'justify',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)',
          }}
        >
          Ator, músico e produtor cultural, Pedagogo e Diretor em Artes Cênicas pela Universidade do Estado da Bahia, criou e Coordenou o Departamento de Teatro da Fundação Universidade do Amazonas, foi Membro do Conselho da Fundacem-MINC, Diretor do Teatro Castro Alves - Salvador-BA, Presidente da SET – ASSOCIAÇÃO DE ESTUDO TEATRAL E DE PESQUISA SEMIÓTICA NA DRAMATURGIA e Diretor Presidente da: <br />
          ACCEC - ASSOCIAÇÃO CASA DE CULTURA EDUARDO CABÚS.
        </p>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h3
          style={{
            fontSize: '32px',
            color: '#ffd700',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
          }}
        >
          DI VELLOSO
        </h3>
        <p
          style={{
            fontSize: '18px',
            color: '#fff',
            lineHeight: '1.8',
            textAlign: 'justify',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)',
          }}
        >
          Atriz, Escritora, Professora e Diretora Teatral, começou no teatro. Administra o ESPAÇO 13 e é professora do Curso de Teatro Profissionalizante da ACCEC no coração da Lapa-RJ. Trabalhou com grandes nomes do teatro e da televisão, entre eles: Bibi Ferreira, Gracindo Júnior, Antonio Fagundes, Nathalia Timberg, Juca de Oliveira, Milton Gonçalves, Maria Bethania, José Wilker, Tania Alves, Adriana Esteves, Suzy Rego, Reynaldo Gonzaga, Emílio Orciollo, Bárbara Paz e muitos outros.
        </p>
        <p
          style={{
            fontSize: '16px',
            color: '#ddd',
            lineHeight: '1.8',
            textAlign: 'justify',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)',
          }}
        >
          Di Velloso é professora no Espaço 13/ACCEC e, ao lado, vemos a professora com um dos alunos, Ullen, em uma aula de Consciência Corporal e Estética do Movimento.
        </p>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <p
          style={{
            fontSize: '18px',
            color: '#ffd700',
            fontWeight: 'bold',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)',
          }}
        >
          É AUTORA DE INÚMERAS PEÇAS TEATRAIS SENDO 05 VEZES PREMIADA.
        </p>
        <p
          style={{
            fontSize: '18px',
            color: '#fff',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)',
          }}
        >
          PUBLICOU RECENTEMENTE O LIVRO "FUTUROS & PRETÉRITOS". DISPONÍVEL ATRAVÉS DO SITE:
        </p>
        <p
          style={{
            fontSize: '18px',
            color: '#ffd700',
            fontWeight: 'bold',
          }}
        >
          <a
            href="http://clubedeautores.com.br/book/125254--FUTUROS__PRETERITOS"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#ffd700', textDecoration: 'none' }}
          >
            Clubedeautores.com.br - Futuros & Pretéritos
          </a>
        </p>
      </div>

      <div style={{ textAlign: 'center' }}>
        <h3
          style={{
            fontSize: '32px',
            color: '#ffd700',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
          }}
        >
          Fale Conosco
        </h3>
        {/* Aqui você pode adicionar um formulário de contato ou outra forma de interação */}
      </div>
    </section>
  );
}

export default Administracao;
