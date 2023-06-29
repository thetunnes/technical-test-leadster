import { ButtonHTMLAttributes, ReactNode } from 'react'
import styled, { css } from 'styled-components'
interface ButtonStyledProps {
  active: boolean
  smallText: boolean
}
const ButtonStyled = styled.button<ButtonStyledProps>`
  width: max-content;
  padding: 0.5rem;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:disabled {
    cursor: default;
  }

  ${(props) =>
    props.smallText
      ? css`
          padding: 0.5rem 1rem;
          font-size: 0.75rem;
        `
      : css`
          font-size: 1rem;
          padding: 1rem 1.5rem;
        `}

  ${(props) =>
    props.active
      ? css`
          background: ${props.theme.colors.blue[500]};
          color: ${props.theme.colors.white};
          border: 1px solid ${props.theme.colors.blue[500]};

          &:not(:disabled):hover {
            filter: brightness(0.8);
            transition: filter 0.4s;
          }
        `
      : css`
          color: ${props.theme.colors.blue[800]};
          border: 1px solid ${props.theme.colors.blue[800]};

          &:not(:disabled):hover {
            color: ${props.theme.colors.blue[500]};
            border: 1px solid ${props.theme.colors.blue[500]};
            transition: all 0.4s;
          }
        `}
`

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  active?: boolean
  smallText?: boolean
  key?: string
}
export function Button({
  children,
  active = false,
  smallText = true,
  ...props
}: ButtonProps) {
  return (
    <ButtonStyled active={active} smallText={smallText} {...props}>
      {children}
    </ButtonStyled>
  )
}
