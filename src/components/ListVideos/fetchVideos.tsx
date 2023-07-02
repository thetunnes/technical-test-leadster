import useSWR from 'swr'
import { NextRequest } from 'next/server'
export default async function fetcher<JSON = any>(
  input: NextRequest,
  init?: NextRequest,
): Promise<JSON> {
  const res = await fetch(input, init)
  return res.json()
}
// const fetcher = (...args: any) => fetch(...args).then((res) => res.json())

export function useFetchVideos(page: number, videosPerPage: number) {
  const { data, isLoading, error } = useSWR(
    `${process.env.NEXT_PUBLIC_URL_API}/videos?_page=${page}&_limit=${videosPerPage}`,
    fetcher,
  )

  return {
    videos: data,
    isLoading,
    error,
  }
}
