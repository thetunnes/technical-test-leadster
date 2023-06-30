import styled from 'styled-components'
import LoadingGif from '@/assets/loading-gif.gif'
import Image from 'next/image'
interface Props {
  text?: string
}

const LoadingContainer = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 0 auto;
  min-height: 250px;

  span {
    font-family: 'JakartaBold';
    font-size: 1.125rem;
  }
`
export function Loading({ text }: Props) {
  return (
    <LoadingContainer>
      <Image src={LoadingGif} alt="" width={32} height={32} />
      {text && <span>{text}</span>}
    </LoadingContainer>
  )
}
