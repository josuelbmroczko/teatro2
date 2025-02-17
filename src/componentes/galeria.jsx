import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import foto1 from '../componentes/fotosTeatro/a.webp';
import foto2 from '../componentes/fotosTeatro/a1.webp';
import foto3 from '../componentes/fotosTeatro/a2.webp';
import foto4 from '../componentes/fotosTeatro/a3.webp';
import foto5 from '../componentes/fotosTeatro/a4.webp';
import foto7 from '../componentes/fotosTeatro/a7.webp';
import foto8 from '../componentes/fotosTeatro/a8.webp';
import foto10 from '../componentes/fotosTeatro/a10.webp';
import foto11 from '../componentes/fotosTeatro/a11.webp';
import foto12 from '../componentes/fotosTeatro/a12.webp';
import Navbar from './barraMenu/barra';

function Galeria() {
  return (
    <section
      id="galeria"
      style={{
        padding: '50px 0',
        background: 'linear-gradient(145deg, #3d3d3d, #1e1e1e)',
        color: '#fff',
        fontFamily: "'Garamond', serif",
      }}
    >
        <Navbar/>
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

      {/* Texto e informações */}
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

      {/* Galeria de imagens (Carrossel) */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h3
          style={{
            fontSize: '32px',
            color: '#ffd700',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
            marginBottom: '30px',
          }}
        >
          GALERIA DE FOTOS
        </h3>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          style={{
            width: '90%',
            maxWidth: '800px',
            margin: '0 auto',
            borderRadius: '15px',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.6)',
          }}
        >
          {[foto1, foto2, foto3, foto4, foto5, foto7, foto8, foto10, foto11, foto12].map((foto, index) => (
            <SwiperSlide key={index}>
              <div
                style={{
                  width: '100%',
                  height: '700px', // Altura fixa para todas as imagens
                  borderRadius: '15px',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={foto}
                  alt={`Imagem ${index + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover', // Mantém a proporção da imagem
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Seção "FAÇA TEATRO" */}
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
      </div>

      {/* Outro conteúdo */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <p
          style={{
            fontSize: '16px',
            color: '#ddd',
            lineHeight: '1.8',
            textAlign: 'justify',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)',
          }}
        >
          Ator, músico e produtor cultural, Pedagogo e Diretor em Artes Cênicas pela Universidade do Estado da Bahia...
        </p>
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

      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h3
          style={{
            fontSize: '32px',
            color: '#ffd700',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
          }}
        >
          CURSOS E FORMAÇÕES
        </h3>
      </div>
    </section>
  );
}

export default Galeria;