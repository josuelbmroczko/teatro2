import styled from "styled-components";

export const StyledLocal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 40px;
 
  border-radius: 10px;

  iframe {
    width: 50%;
    height: 400px;
    border: none;
    border-radius: 12px; /* Bordas arredondadas */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3); /* Sombra mais suave */
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.02); /* Leve aumento ao passar o mouse */
      box-shadow: 0 6px 24px rgba(0, 0, 0, 0.4); /* Sombra mais pronunciada */
    }

    @media (max-width: 1024px) {
      width: 70%;
      height: 350px;
    }

    @media (max-width: 768px) {
      width: 90%;
      height: 300px;
    }

    @media (max-width: 480px) {
      width: 100%;
      height: 250px;
    }
  }
`;
