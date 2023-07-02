import styled, { css } from 'styled-components'
import LogoIcon from '@/assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { LuFacebook, LuInstagram, LuLinkedin } from 'react-icons/lu'
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
`

const BoxCopyright = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;

  margin-top: 3rem;
  @media screen and (max-width: 1024px) {
    justify-content: center;
  }

  h5 {
    font-size: 0.75rem;
    color: ${(props) => props.theme.colors.gray[500]};
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

const FlexCenter = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const SocialMediaButton = styled(Link)`
  background: ${(props) => props.theme.colors.gray[300]};
  cursor: pointer;

  > svg {
    color: ${(props) => props.theme.colors.gray[500]};
  }

  &:hover {
    > svg {
      transform: scale(1.2);
      transition: all 0.4s;
      color: ${(props) => props.theme.colors.white};
    }

    background: ${(props) => props.theme.colors.blue[500]};
  }

  transition: all 0.4s ease-in-out;
  font-size: 1.25rem;
  padding: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 50%;
`
interface TextProps {
  notIsLink?: boolean
}

const Text = styled.p<TextProps>`
  font-size: 0.875rem;
  font-family: 'JakartaRegular';
  color: ${(props) => props.theme.colors.gray[500]};
  cursor: pointer;

  > b {
    color: ${(props) => props.theme.colors.blue[800]};
  }

  ${(props) =>
    !props.notIsLink &&
    css`
      &:hover {
        color: ${(props) => props.theme.colors.blue[800]};
        transition: color 0.4s;
      }
    `}
`

export function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Image src={LogoIcon} alt="" />

        <GroupSection>
          <Section>
            <h3>Links Principais</h3>
            <Text>Home</Text>
            <Text>Ferramenta</Text>
            <Text>Preços</Text>
            <Text>Contato</Text>
          </Section>
          <Section>
            <h3>Cases</h3>
            <Text>Home</Text>
            <Text>Ferramenta</Text>
            <Text>Preços</Text>
            <Text>Contato</Text>
          </Section>
          <Section>
            <h3>Materiais</h3>
            <Text>Home</Text>
            <Text>Ferramenta</Text>
            <Text>Preços</Text>
            <Text>Contato</Text>
          </Section>

          <Section>
            <h3>Siga a Leadster</h3>
            <FlexCenter>
              <SocialMediaButton href="https://www.linkedin.com/company/getleadster/">
                <LuLinkedin fontWeight={'bold'} />
              </SocialMediaButton>
              <SocialMediaButton href="https://www.facebook.com/leadsterplatform">
                <LuFacebook />
              </SocialMediaButton>
              <SocialMediaButton href="https://www.instagram.com/leadster.com.br/">
                <LuInstagram />
              </SocialMediaButton>
            </FlexCenter>

            <Text notIsLink>
              <b>E-mail:</b> contato@leadster.com.br
            </Text>
            <Text notIsLink>
              <b>Telefone:</b> (42) 98828-9851
            </Text>
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
