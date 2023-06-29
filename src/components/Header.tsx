import Image from 'next/image'
import styled from 'styled-components'
import LogoLeadster from '@/assets/logo.png'

const HeaderContainer = styled.header`
  background: ${(props) => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 999;

  img {
    aspect-ratio: 2/1;
    cursor: pointer;
  }
`

export function Header() {
  const handleImageClick = () => {
    window.scrollTo({
      top: 0, // Define a posição desejada do scrollTop
      behavior: 'smooth', // Define o comportamento da rolagem (opcional)
    })
  }
  return (
    <HeaderContainer>
      <Image
        src={LogoLeadster}
        alt="Estrela de 6 pontas na esquerda em azul e Leadster na direita em preto"
        onClick={() => handleImageClick()}
      />
    </HeaderContainer>
  )
}
