import React, { useState, useEffect } from 'react';
import Topo from '../componentes/TopoMenu/Topo';
import SobreNos from '../componentes/sobreSessao1/sobreNos';
 
import Navbar from '../componentes/barraMenu/barra';
import Local from '../componentes/localizacao/local';
import Footer from '../componentes/footer/footer';
import { data } from '../componentes/data';
import SessaoCursos from '../componentes/SessaoCursos.jsx';
import ProjectSection from '../componentes/ProjectSection.jsx';
import ProjectCarousel from '../componentes/ProjectCarousel.jsx';
 
 
 
 
 
 

function HomePrincipal() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="loading-circle"></div>
      ) : (
        <>
         {/* <div className='whatsapp'>
            <a href={data.whatsapp.linkWhatsap} target='_blank' rel='noopener noreferrer'>
              <img src={data.whatsapp.imgWhatsapp} alt='whatsapp' />
            </a>
          </div>*/}
          <Topo/>
         
          <Navbar />
          <SessaoCursos/>
          <SobreNos />
 <ProjectSection/>
 <ProjectCarousel/>
          <Local />
          <Footer />
        </>
      )}
    </div>
  );
}

export default HomePrincipal;
