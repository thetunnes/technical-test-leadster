import styled from 'styled-components'

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background: rgba(0, 0, 0, 0.4);
  z-index: 9998;
`

export const ModalContainer = styled.div`
  position: relative;
  left: 50%;
  top: 50%;
  z-index: 9999;

  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  max-width: 70vw;
  max-height: 85vh;

  background: ${(props) => props.theme.colors.white};

  border-radius: 6px;
  padding: 2rem 0;

  &::before {
    content: '';
    width: 90%;
    height: 2px;
    margin: 0 auto;
    background: ${(props) => props.theme.colors.blue[500]};
  }
`
export const BtnCloseModal = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;

  cursor: pointer;

  color: ${(props) => props.theme.colors.gray[300]};
  background: none;
  border: 0;
  border-radius: 50%;

  transition: all 0.4s;
  &:hover {
    transform: scale(1.1);
    color: ${(props) => props.theme.colors.red[500]};
  }
`

export const ModalWrapper = styled.div`
  width: 100%;
  overflow: auto;
  height: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  video {
    width: 100%;
    height: 50%;
    max-height: 50vh;
    border: 1px solid ${(props) => props.theme.colors.blue[300]};
  }
`

export const TitleWebinar = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  max-width: 360px;
  margin: 0 auto;
  line-height: 1.125;

  > b {
    color: ${(props) => props.theme.colors.blue[500]};
  }
`

export const BoxAttributes = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  h2 {
    font-size: 1.125rem;
    text-transform: capitalize;
    padding: 0.75rem;
    color: ${(props) => props.theme.colors.blue[800]};
    line-height: 1.25;

    border-bottom: 1px solid ${(props) => props.theme.colors.gray[500]};
  }

  p {
    font-size: 1rem;
    color: '#3b3838';
    text-align: justify;
    line-height: 1.125;
  }

  .inline-boxs {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
`

interface Props {
  color?: 'red' | 'yellow' | 'green'
}
export const BoxTag = styled.section<Props>`
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.colors.blue[800]};
  border-radius: 6px;

  div:first-child {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  div:last-child {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  div.icon {
    width: 100%;
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme.colors.blue[300]};

    padding: 0.5rem;
    svg {
      font-size: 1.125rem;
    }
  }

  div.text {
    flex: 1;
    background: ${(props) => props.theme.colors.blue[200]};

    padding: 0.5rem;
    p {
      font-size: 1.125rem;
    }
  }
`
