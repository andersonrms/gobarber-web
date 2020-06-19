import styled from 'styled-components';

export const Container = styled.div`
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;
  color: #a9a9a9;

  display: flex;
  align-items: center;

  & + div {
    /*
        * TODO INPUT PRECEDIDO POR OUTRO
        * PODER SER ESCRITO ASSIM:
        * INPUT + INPUT {}
        */
    margin-top: 8px;
  }

  input {
    background: transparent;
    flex: 1;
    border: 0;
    color: #f4ede8;

    &::placeholder {
      color: #a9a9a9;
    }
  }
  svg {
    margin-right: 16px;
  }
`;
