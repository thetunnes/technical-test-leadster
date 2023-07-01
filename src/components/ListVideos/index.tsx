import { useEffect, useMemo, useState } from 'react'
import {
  BoxVideo,
  HeaderNavVideos,
  ListVideosContainer,
  ListVideosWrapper,
} from './styles'
import Image from 'next/image'
import ThumbnailVideo from '@/assets/thumbnail.png'
import { Button } from '../Button'
import db from '../../../db-video.json'

import { Pagination } from '../Pagination'
import { Loading } from '../Loading'
import { Modal } from '../Modal'
import { useFetchVideos } from './fetchVideos'

export interface IVideo {
  id: number
  title: string
  description: string
  video_url: string
  tags: Array<string>
}

interface ITagsNav {
  [key: string]: boolean
}

export function ListVideos() {
  const videosPerPage = 6
  const amountPages = Math.ceil(db.videos.length / videosPerPage)
  const [currentPage, setCurrentPage] = useState(1)
  const { videos, isLoading, error } = useFetchVideos(
    currentPage,
    videosPerPage,
  )

  const [tagsToNav, setTagsToNav] = useState<ITagsNav>({})

  const [dataToModal, setDataToModal] = useState<IVideo | null>(null)

  function toggleModal(dataVideo?: IVideo) {
    dataVideo ? setDataToModal(dataVideo) : setDataToModal(null)
  }

  function filterByTag(tag: string) {
    setTagsToNav((prev) => ({
      ...prev,
      [tag]: !prev[tag],
    }))
  }

  const videosFiltered: IVideo[] = useMemo(() => {
    if (Object.values(tagsToNav).some((tag) => tag)) {
      const filterVideos = [] as IVideo[]
      for (const x in tagsToNav) {
        if (tagsToNav[x]) {
          videos.forEach((video: IVideo) => {
            if (
              video.tags.includes(x) &&
              !filterVideos.some((vid) => vid === video)
            ) {
              filterVideos.push(video)
            }
          })
        }
      }
      return filterVideos
    }

    return videos
  }, [tagsToNav, videos])

  useEffect(() => {
    const allTags = db.videos.reduce((acc, video) => {
      for (const tag of video.tags) {
        if (!acc[tag]) {
          acc = {
            ...acc,
            [tag]: false,
          }
        }
      }
      return acc
    }, {} as ITagsNav)
    setTagsToNav(allTags)
  }, [])

  if (isLoading) {
    return <Loading text="Carregando..." />
  }

  if (error || !videos) {
    return <p>Oh no, error here</p>
  }

  return (
    <ListVideosContainer>
      <div className="max-content">
        <HeaderNavVideos>
          {Object.keys(tagsToNav).map((tag) => (
            <Button
              key={tag}
              onClick={() => filterByTag(tag)}
              active={tagsToNav[tag]}
            >
              {tag}
            </Button>
          ))}
        </HeaderNavVideos>
        {videos?.length ? (
          <>
            <ListVideosWrapper>
              {videosFiltered.map((video) => (
                <BoxVideo key={video.id} onClick={() => toggleModal(video)}>
                  <Image src={ThumbnailVideo} alt="" />
                  <p>{video.title}</p>
                </BoxVideo>
              ))}
            </ListVideosWrapper>

            <Pagination
              amountPages={amountPages}
              fetchVideos={(newPage: number) => setCurrentPage(newPage)}
              currentPage={Math.ceil(videos[0].id / videosPerPage)}
            />
          </>
        ) : (
          <p>Não foi possível listar livros</p>
        )}
      </div>

      <Modal
        isOpen={!!dataToModal}
        onClose={() => toggleModal()}
        dataVideo={dataToModal}
      />
    </ListVideosContainer>
  )
}
