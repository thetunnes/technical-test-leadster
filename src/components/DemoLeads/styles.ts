import styled from 'styled-components'

export const DemoLeadsContainer = styled.section`
  background: ${(props) => props.theme.colors.blue[100]};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 1.5rem 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const BannerImg = styled.div`
  flex: 1;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`

export const ActionDemoLeadsWithUs = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.5rem;

  h3,
  p {
    font-family: 'JakartaMedium';
    line-height: 1.25;
    font-weight: 500;

    :not(p) {
      font-size: 1.5rem;
    }
  }

  > p {
    padding: 0.25rem 0 1rem 0;
    border-bottom: 1px solid ${(props) => props.theme.colors.gray[200]};
  }

  strong {
    font-family: 'JakartaBold';
  }

  > footer {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    > section:first-child {
      border-right: 2px solid ${(props) => props.theme.colors.gray[500]};
      padding-right: 0.5rem;
    }
  }
`

export const NavDemoLead = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 0;
`

export const BoxFooter = styled.section`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`
