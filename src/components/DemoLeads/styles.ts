import styled from 'styled-components'

export const DemoLeadsContainer = styled.section`
  background: ${(props) => props.theme.colors.blue[100]};
  position: relative;
  height: 300px;
`
export const Mountain = styled.div`
  position: relative;
  bottom: 0;
  width: 50%;
  height: 100%;

  background: radial-gradient(
        5rem at 10% calc(100% - 5rem),
        #000 99%,
        #0000 101%
      )
      calc(50% - 10rem) 0/20rem 100%,
    radial-gradient(5rem at 50% calc(100% + 0rem), #0000 99%, #000 101%) 50%
      calc(100% - 5rem) / 20rem 100%;
  border-radius: 0 0 10px 10px; /* Cantos arredondados */
`
