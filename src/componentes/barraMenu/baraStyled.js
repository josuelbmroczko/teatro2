import styled from 'styled-components';

export const NavbarWrapper = styled.div`
  position: relative;
  
  width: 100%;
  height: 50px;
  color: aliceblue;
  position: ${({ isSticky }) => (isSticky ? 'fixed' : 'absolute')};
  top: ${({ isSticky }) => (isSticky ? '0px' : '50px')};
  z-index: 1000;
  transition: top 0.3s, opacity 0.3s;
  background-color: rgba(64, 45, 10, 0.4);
  box-shadow: ${({ isSticky }) => (isSticky ? '0 2px 4px rgba(0, 0, 0, 0.9)' : 'none')};
  opacity: ${({ isSticky }) => (isSticky ? '1' : '0')};
  backdrop-filter: blur(10px);

  @media (max-width: 700px) {
    position: fixed;
    top: ${({ isSticky }) => (isSticky ? '0px' : '50px')};
    height: 50px;
  }
`;

export const Menu = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  /* Em telas pequenas, o menu fica em coluna */
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const MenuItemsWrapper = styled.div`
  display: flex;
  gap: 10px;
  
  @media (max-width: 700px) {
    flex-direction: column;
    background-color: rgba(64, 45, 10, 0.8);
    width: 100%;
    padding: 10px 0;
  }
`;

export const MenuItem = styled.div`
  cursor: pointer;
  padding: 5px 10px;
  
  a {
    color: aliceblue;
    text-decoration: none;
  }
`;

// Botão de menu (hamburger) – será exibido apenas em dispositivos móveis
export const MenuButton = styled.button`
  background-color: blanchedalmond;
  padding: 10px;
  border-radius: 10px;
  font-size: 24px;
  border: none;
  cursor: pointer;

  @media (min-width: 701px) {
    display: none;
  }
`;
