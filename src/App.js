// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePrincipal from './paginas/HomePrincipal';
import TheaterSection from './componentes/TheaterSection';
import SectionAlunlo from './componentes/SectionAluno';
import Escola from './componentes/Escola';
import Administracao from './componentes/Administracao';
import Galeria from './componentes/galeria';
import Contato from './componentes/Contato';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePrincipal />} />
        <Route path="/theater-section" element={<TheaterSection />} />
        <Route path="/sectionAlunlo" element={<SectionAlunlo />} />
        <Route path="/escola" element={<Escola />} />
        <Route path="/administracao" element={<Administracao />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/contato" element={<Contato />} />

      </Routes>
    </Router>
  );
}

export default App;
