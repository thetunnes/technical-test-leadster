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

  async function fetchJsonAPI() {
    setIsLoading(true)
    await fetch('http://localhost:3004/videos', {
      method: 'GET',
    })
      .then(async (response) => await response.json())
      .then((data: IVideo[]) => {
        const allTags = data.reduce((acc, video) => {
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

        setVideos(data)
        setTagsToNav(allTags)
        setIsLoading(false)
      })
  }

  function filterByTag(tag: string) {
    setTagsToNav((prev) => ({
      ...prev,
      [tag]: !prev[tag],
    }))
  }

  const videosFiltered = useMemo(() => {
    console.log('Um teste')
    if (tagsToNav.length) {
      return videos
    }

    return videos
  }, [tagsToNav, videos])

  useEffect(() => {
    fetchJsonAPI()
  }, [])

  return (
    <ListVideosContainer>
      <div>
        {isLoading ? (
          <p>Carregando...</p>
        ) : videos.length ? (
          <>
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
            <ListVideosWrapper>
              {videosFiltered.map((video) => (
                <BoxVideo key={video.id}>
                  <Image src={ThumbnailVideo} alt="" />
                  <p>{video.title}</p>
                </BoxVideo>
              ))}
            </ListVideosWrapper>
          </>
        ) : (
          <p>Não foi possível listar livros</p>
        )}
      </div>
    </ListVideosContainer>
  )
}
