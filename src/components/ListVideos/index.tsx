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

interface IVideo {
  id: number
  title: string
  video_url: string
  tags: Array<string>
}

interface ITagsNav {
  [key: string]: boolean
}

export function ListVideos() {
  const [videos, setVideos] = useState<IVideo[]>([])
  const [tagsToNav, setTagsToNav] = useState<ITagsNav>({})
  const [isLoading, setIsLoading] = useState(true)

  const videosPerPage = 6
  const amountPages = Math.ceil(db.videos.length / videosPerPage)

  async function fetchJsonAPI(page?: string) {
    setIsLoading(true)

    const url = `http://localhost:3004/videos?_page=${
      page ?? 1
    }&_limit=${videosPerPage}`

    await fetch(url, {
      method: 'GET',
    })
      .then(async (response) => await response.json())
      .then((data: IVideo[]) => {
        setVideos(data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function filterByTag(tag: string) {
    setTagsToNav((prev) => ({
      ...prev,
      [tag]: !prev[tag],
    }))
  }

  const videosFiltered = useMemo(() => {
    if (Object.values(tagsToNav).some((tag) => tag)) {
      const filterVideos = [] as IVideo[]
      for (const x in tagsToNav) {
        if (tagsToNav[x]) {
          videos.forEach((video) => {
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
    fetchJsonAPI()

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

  return (
    <ListVideosContainer>
      <div>
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
        {videos.length ? (
          <>
            {isLoading ? (
              <Loading text="Carregando..." />
            ) : (
              <ListVideosWrapper>
                {videosFiltered.map((video) => (
                  <BoxVideo key={video.id}>
                    <Image src={ThumbnailVideo} alt="" />
                    <p>{video.title}</p>
                    <span>{video.tags.map((tag) => `${tag}, `)}</span>
                  </BoxVideo>
                ))}
              </ListVideosWrapper>
            )}
            <Pagination
              amountPages={amountPages}
              fetchVideos={fetchJsonAPI}
              currentPage={Math.ceil(videos[0].id / videosPerPage)}
            />
          </>
        ) : (
          <p>Não foi possível listar livros</p>
        )}
      </div>
    </ListVideosContainer>
  )
}
