import React from 'react';
import Navbar from './barraMenu/barra';

function Contato() {
  return (
    <section
      id="contato"
      style={{
        padding: '50px 0',
        background: 'linear-gradient(145deg, #1e1e1e, #3d3d3d)',
        color: '#fff',
        fontFamily: "'Garamond', serif",
      }}
    >
      <Navbar/>
      {/* Título da Seção */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2
          style={{
            fontSize: '40px',
            color: '#ffcc00',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
          }}
        >
          ENTRE EM CONTATO CONOSCO
        </h2>
      </div>

      {/* Informações de Contato */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <p
          style={{
            fontSize: '18px',
            color: '#ffd700',
            fontWeight: 'bold',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)',
          }}
        >
          <strong>Telefone:</strong> (21) 98126-6619
        </p>
        <p
          style={{
            fontSize: '18px',
            color: '#ffd700',
            fontWeight: 'bold',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)',
          }}
        >
          <strong>WhatsApp:</strong> (21) 98126-6619
        </p>
        <p
          style={{
            fontSize: '18px',
            color: '#fff',
            fontStyle: 'italic',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)',
          }}
        >
          Estamos à disposição para tirar todas as suas dúvidas sobre as turmas e cursos!
        </p>
      </div>

      {/* Mapa Incorporado */}
      <div style={{ textAlign: 'center' }}>
        <h3
          style={{
            fontSize: '32px',
            color: '#ffd700',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
            marginBottom: '30px',
          }}
        >
          VISITE-NOS
        </h3>
        <div
          style={{
            width: '80%',
            maxWidth: '800px',
            height: '400px',
            margin: '0 auto',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.6)',
            border: '2px solid #ffd700',
          }}
        >
          <iframe
            title="Mapa de Localização"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.213589792481!2d-122.41941568468148!3d37.774929279759654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085815465e5e7b7%3A0x8087e7eb5ef217d7!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbr!4v1692269151324!5m2!1sen!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default Contato;
