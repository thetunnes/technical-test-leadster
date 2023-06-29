import styled from 'styled-components'

export const DemoLeadsContainer = styled.section`
  position: relative;
  background: ${(props) => props.theme.colors.blue[100]};
  padding: 1.5rem 1rem;
`

export const Mountain = styled.div`
  position: absolute;
  left: -20%;
  bottom: 0;
  width: 60%;
  height: 100%;
  z-index: 3;
  .polygon {
    width: 100%;
    height: 100%;
    position: absolute;
    background: ${(props) => props.theme.colors.blue[200]};
    clip-path: polygon(
      0% 100%,
      calc(50% - 30px) 15%,
      calc(50% + 30px) 15%,
      100% 100%,
      0% 100%
    );
    z-index: 4;
  }

  .circle {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, 20%);

    @media screen and (max-width: 1120px) {
      transform: translate(-50%, 10%);
    }
    background-color: ${(props) => props.theme.colors.blue[200]};
    width: 60px;
    height: 50px;
    border-radius: 50% 50% 0 0;
    z-index: 5;
  }

  @media screen and (max-width: 700px) {
    width: 90%;

    .circle {
      transform: translate(-50%, 30%);
    }
  }
`

export const WrapperDemoLeads = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  position: relative;
  z-index: 10;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`

export const BannerImg = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 90%;
    height: auto;
    object-fit: contain;
  }

  @media screen and (max-width: 768px) {
    max-width: 512px;
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

    @media screen and (max-width: 460px) {
      flex-direction: column;
    }

    @media screen and (min-width: 460px) {
      > section:first-child {
        border-right: 2px solid ${(props) => props.theme.colors.gray[500]};
        padding-right: 0.5rem;
      }
    }
  }
`

export const NavDemoLead = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 0;
  @media screen and (max-width: 460px) {
    flex-direction: column;
  }
`

export const BoxFooter = styled.section`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`
