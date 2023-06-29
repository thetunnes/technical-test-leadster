import styled from 'styled-components'

export const MainBannerContainer = styled.div`
  width: 100%;
  height: 94vh;
  background-color: ${(props) => props.theme.colors.blue[100]};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 2rem 0;

  > h2 {
    font-size: 2.5rem;
    font-family: 'JakartaRegular';
  }
`

export const MainText = styled.h1`
  position: relative;
  font-family: 'JakartaExtraBold';
  font-size: 3.75rem;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.colors.blue[450]} 0%,
    ${(props) => props.theme.colors.blue[550]} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  img {
    position: absolute;
    top: 6px;
    right: -12px;
  }
`

export const Text = styled.p`
  border-top: 1px solid ${(props) => props.theme.colors.gray[200]};
  padding: 1rem;

  font-family: 'JakartaMedium';

  strong {
    font-family: 'JakartaBold';
  }
`

export const TagTextBtn = styled.button`
  background: transparent;

  font-family: 'JakartaExtraBold';
  color: ${(props) => props.theme.colors.blue[500]};
  text-transform: uppercase;
  text-align: center;
  padding: 0.5rem 0.75rem;

  border: 2px solid ${(props) => props.theme.colors.blue[500]};
  border-radius: 999px;
  border-bottom-left-radius: 0;
`
