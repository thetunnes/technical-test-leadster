import styled, { css } from 'styled-components'

const PaginationContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  > p {
    font-family: 'JakartaBold';
    font-size: 1.125rem;
  }
`
interface BtnPageProps {
  active?: boolean
}
const BtnPage = styled.button<BtnPageProps>`
  display: flex;
  align-items: center;
  padding: 0.125rem 0.5rem;

  font-family: 'JakartaBold';
  font-size: 1.125rem;
  cursor: pointer;

  background: none;
  border: 1px solid transparent;
  color: ${(props) => props.theme.colors.blue[700]};
  border-radius: 4px;

  ${(props) =>
    props.active
      ? css`
          color: ${props.theme.colors.blue[500]};
          border-color: ${props.theme.colors.blue[500]};
          cursor: default;
        `
      : css`
          &:hover {
            border-color: ${props.theme.colors.blue[700]};
          }
        `}
`

interface Props {
  currentPage: number
  amountPages: number
  fetchVideos: (page: number) => void
}

export function Pagination({ currentPage, amountPages, fetchVideos }: Props) {
  return (
    <PaginationContainer>
      <p>Página</p>
      {currentPage > 1 && <BtnPage onClick={() => fetchVideos(1)}>1</BtnPage>}
      {currentPage > 2 && (
        <BtnPage onClick={() => fetchVideos(currentPage - 1)}>
          {currentPage - 1}
        </BtnPage>
      )}
      <BtnPage active disabled>
        {currentPage}
      </BtnPage>
      {currentPage < amountPages - 1 && (
        <BtnPage onClick={() => fetchVideos(currentPage + 1)}>
          {currentPage + 1}
        </BtnPage>
      )}
      {currentPage < amountPages && (
        <BtnPage onClick={() => fetchVideos(amountPages)}>
          {amountPages}
        </BtnPage>
      )}
    </PaginationContainer>
  )
}
