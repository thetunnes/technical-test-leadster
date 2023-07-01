import { useRef } from 'react'
import {
  BoxAttributes,
  BoxTag,
  BtnCloseModal,
  GroupBoxTag,
  ModalContainer,
  ModalOverlay,
  ModalWrapper,
  TitleWebinar,
} from './styles'
import { BiX } from 'react-icons/bi'
import { LuDownloadCloud } from 'react-icons/lu'
import { IVideo } from '../ListVideos'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  dataVideo: Omit<IVideo, 'id'> | null
}

export function Modal({ isOpen, onClose, dataVideo }: ModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const attributesVideo = {
    description: dataVideo?.description,
    tags: dataVideo?.tags,
  }

  const handleOverlayClick = (event: any) => {
    // Verifica se o evento de clique vem a partir da Div Overlay
    if (event.target === overlayRef.current) {
      onClose()
    }
  }
  if (!isOpen || !dataVideo) {
    return null
  }

  return (
    <ModalOverlay ref={overlayRef} onClick={handleOverlayClick}>
      {attributesVideo.tags?.length ? (
        <GroupBoxTag>
          {attributesVideo.tags.map((tag) => (
            <BoxTag key={tag}>
              <div className="icon">
                <LuDownloadCloud />
              </div>
              <div className="text">
                <p>{tag}</p>
              </div>
            </BoxTag>
          ))}
        </GroupBoxTag>
      ) : null}
      <ModalContainer>
        <BtnCloseModal onClick={onClose}>
          <BiX size={24} />
        </BtnCloseModal>

        <ModalWrapper>
          <TitleWebinar>
            <b>Webinar: </b> {dataVideo.title}
          </TitleWebinar>

          <video></video>

          {Object.entries(attributesVideo).map(([attr, text]) =>
            typeof text === 'string' ? (
              <BoxAttributes key={attr}>
                <h2>{attr}</h2>
                <p>{text}</p>
              </BoxAttributes>
            ) : text ? (
              <BoxAttributes key={attr}>
                <h2>{attr}</h2>
                <div className="inline-boxs">
                  {text.map((txt) => (
                    <BoxTag key={txt}>
                      <div className="icon">
                        <LuDownloadCloud />
                      </div>
                      <div className="text">
                        <p>{txt}</p>
                      </div>
                    </BoxTag>
                  ))}
                </div>
              </BoxAttributes>
            ) : null,
          )}
        </ModalWrapper>
      </ModalContainer>
    </ModalOverlay>
  )
}
