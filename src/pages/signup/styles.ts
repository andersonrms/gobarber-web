import styled from 'styled-components';
import { shade } from 'polished';

import signUpBackgroundImg from '../../assets/sign-up-background.png';

export const Container = styled.div`
  height: 100vh; /* FAZ COM QUE TENHA TODA O TAMANHO DA VH */

  display: flex; /* FAZ COM QUE CONTENT E BACKGROUND FICA UM DO LADO DO OUTRO */
  align-items: stretch; /* FAZ COM QUE CONTENT E BACKGROUND TENHAM TODO O TAMANDO DA TELA */
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center; /* ALINHAS TODOS AO CENTRO */
  align-items: center; /* ALINHA TODO O CONTEUDO AO CENTRO */

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block; /* OCUPA TODA A LINHA */
      margin-top: 24px;
      text-decoration: none;
      transition: background-color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    /*
    * ANCONRA QUE ESTA DIRETAMENTE DENTRO DO CONTENT
    */
    color: #f4ede8;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: background-color 0.2s;
    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }
  }
`;

export const Background = styled.div`
  flex: 1; /* VAI OCUPAR TODO O ESPAÇO DISPONIVEL */
  background: url(${signUpBackgroundImg}) no-repeat center;
  background-size: cover; /* COBRE TODO O ESPAÇO RESTANTE */
`;
