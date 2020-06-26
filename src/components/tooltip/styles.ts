import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    background: #ff9000;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    width: 160px;
    position: absolute;
    color: #312e38;

    /* APAGA O SPAN E SÓ REAPARECE APÓS 4 SEGUNDOS */
    opacity: 0;
    transition: opacity 0.4s;
    /* */
    visibility: hidden;

    /* deixando um pouco acima do svg */
    bottom: calc(100% + 12px);

    /* HACK CENTRALAZAÇÃO
       FAZ COM QUE CENTRALIZA EM RELAÇAO AO ELEMENTO DE BAIXO */
    left: 50%;
    transform: translate(-50%);

    /* FLEXA */
    &::before {
      /* TRIANGULO */
      content: '';
      border-style: solid;
      border-color: #ff9000 transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      /* HACK CENTRALAZAÇÃO
       FAZ COM QUE CENTRALIZA EM RELAÇAO AO ELEMENTO DE BAIXO */
      left: 50%;
      transform: translate(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
