import styled from 'styled-components'
import LogoIcon from '@/assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'
export const FooterContainer = styled.footer`
  width: 100%;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 1.5rem;
`

export const GroupSection = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;

  @media screen and (min-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const Section = styled.section`
  width: max-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;

  h3 {
    font-family: 'JakartaBold';
    font-size: 1.125rem;

    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    font-family: 'JakartaRegular';
    color: ${(props) => props.theme.colors.gray[300]};
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme.colors.blue[800]};
      transition: color 0.4s;
    }
  }
`

const BoxCopyright = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;

  @media screen and (max-width: 1024px) {
    justify-content: center;
  }

  h5 {
    font-size: 0.75rem;
    color: ${(props) => props.theme.colors.blue[800]};
  }
  h6 {
    font-size: 0.75rem;
    color: ${(props) => props.theme.colors.gray[300]};
  }

  a {
    color: ${(props) => props.theme.colors.blue[500]};
    text-decoration: none;
  }
`

export function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Image src={LogoIcon} alt="" />

        <GroupSection>
          <Section>
            <h3>Links Principais</h3>
            <p>Home</p>
            <p>Ferramenta</p>
            <p>Preços</p>
            <p>Contato</p>
          </Section>
          <Section>
            <h3>Cases</h3>
            <p>Home</p>
            <p>Ferramenta</p>
            <p>Preços</p>
            <p>Contato</p>
          </Section>
          <Section>
            <h3>Materiais</h3>
            <p>Home</p>
            <p>Ferramenta</p>
            <p>Preços</p>
            <p>Contato</p>
          </Section>
        </GroupSection>

        <BoxCopyright>
          <h5>
            Copyright © 2015 - 2020 Todos os direitos reservados |{' '}
            <Link href="">Leadster</Link>
          </h5>
          <h6>
            Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 |
            Termos de uso
          </h6>
        </BoxCopyright>
      </FooterWrapper>
    </FooterContainer>
  )
}
