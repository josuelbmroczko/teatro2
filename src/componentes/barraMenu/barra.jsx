import React, { useState, useEffect } from 'react';
import { NavbarWrapper, Menu, MenuItemsWrapper, MenuItem, MenuButton } from './baraStyled';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

  useEffect(() => {
    // Atualiza o estado sticky e a seção ativa conforme o scroll
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 10);

      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveSection(section.id);
        }
      });
    };

    // Detecta alterações no tamanho da tela
    const handleResize = () => {
      const mobile = window.innerWidth <= 700;
      setIsMobile(mobile);
      if (!mobile) {
        setIsMenuOpen(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    if (!isMobile) {
      setIsMenuOpen(true);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 100;
      const topPos = section.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: topPos, behavior: 'smooth' });
    }
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <NavbarWrapper isSticky={isSticky}>
      <Menu>
        {/* Botão exibido apenas em dispositivos móveis */}
        {isMobile && <MenuButton onClick={toggleMenu}>☰</MenuButton>}

        {(isMobile ? isMenuOpen : true) && (
          <MenuItemsWrapper>
<MenuItem>
  <Link
    to="/" // Navega para a rota inicial
    style={{ fontWeight: activeSection === 'inicio' ? 'bold' : 'normal' }}
  >
    Início
  </Link>
</MenuItem>



            <MenuItem>
              <Link
                to="/theater-section"
                style={{ fontWeight: activeSection === 'cursoValores' ? 'bold' : 'normal' }}
                onClick={() => {
                  if (isMobile) {
                    setIsMenuOpen(false);
                  }
                }}
              >
                Curso/Valores
              </Link>
            </MenuItem>

            <MenuItem>
              <Link
                to="/sectionAlunlo" // Usar 'to' ao invés de 'href'
                style={{ fontWeight: activeSection === 'portalAluno' ? 'bold' : 'normal' }}
                onClick={() => {
                  if (isMobile) {
                    setIsMenuOpen(false);
                  }
                }}
              >
                Portal do aluno
              </Link>
            </MenuItem>

            <MenuItem>
  <Link
    to="/escola"  // Corrigido para a rota correta
    style={{ fontWeight: activeSection === 'escola' ? 'bold' : 'normal' }}
  >
    A escola
  </Link>
</MenuItem>


            <MenuItem>
  <Link to="/administracao" style={{ fontWeight: activeSection === 'administracao' ? 'bold' : 'normal' }}>
    Administração
  </Link>
</MenuItem>


<MenuItem>
  <Link
    to="/galeria"
    style={{ fontWeight: activeSection === 'galeria' ? 'bold' : 'normal' }}
  >
    Galeria
  </Link>
</MenuItem>


            <MenuItem>
              <Link
                to="#contato"
                onClick={(e) => scrollToSection(e, 'contato')}
                style={{ fontWeight: activeSection === 'contato' ? 'bold' : 'normal' }}
              >
                CONTATO
              </Link>
            </MenuItem>
          </MenuItemsWrapper>
        )}
      </Menu>
    </NavbarWrapper>
  );
}

export default Navbar;
