import styled from 'styled-components'

export const ListVideosContainer = styled.section`
  width: 100%;
  padding: 2rem 1rem;

  > div {
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }
`

export const HeaderNavVideos = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;

  > button {
    font-family: 'JakartaBold';
    text-transform: capitalize;
  }
`
export const ListVideosWrapper = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;

  border-top: 1px solid ${(props) => props.theme.colors.gray[200]};
  border-bottom: 1px solid ${(props) => props.theme.colors.gray[200]};

  padding: 2.5rem 0;

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`

export const BoxVideo = styled.button`
  border: 0;
  background-color: ${(props) => props.theme.colors.white};

  border-radius: 6px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  cursor: pointer;

  &:hover {
    img {
      transform: scale(0.9);
    }
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: rgb(0, 0, 0);
    filter: blur(5px);
    border-radius: 6px;
  }
  &::before {
    top: 0;
    bottom: 0;
    right: 0;
    width: 1px;
  }

  &::after {
    content: '';
    position: absolute;
    background-color: rgb(0, 0, 0);
    filter: blur(5px);
    border-radius: 6px;
  }
  &::after {
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
  }

  img {
    width: 100%;
    flex: 1;
    border-radius: 6px 6px 0 0;
    transition: transform 0.4s;
  }

  > p {
    font-family: 'JakartaBold';
    font-size: 1.125rem;
    text-align: left;
    padding: 0.75rem;
    flex: 1;
  }
`
