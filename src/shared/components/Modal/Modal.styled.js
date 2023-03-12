import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 90000;

  overflow-y: scroll;

  background-color: rgba(0, 0, 0, 0.3);

  transition: opacity 250ms var(--time-function),
    visibility 250ms var(--time-function);
`;

export const ModalBox = styled.div`
  border-radius: 30px;
  background-color: rgb(21, 62, 73);
  color: #fff;
  max-height: 40%;
  width: 360px;
  padding: 40px 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media screen and (min-width: 768px) {
    max-height: 400px;
    max-width: 600px;
  }
  @media screen and (min-width: 1200px) {
    max-height: 600px;
    max-width: 800px;
  } ;
`;

export const Close = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: rgba(100, 100, 100, 0.3);
`;
