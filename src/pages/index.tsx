import { DemoLeads } from '@/components/DemoLeads'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { ListVideos } from '@/components/ListVideos'
import { MainBanner } from '@/components/MainBanner'
import Head from 'next/head'
import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`
export default function Home() {
  return (
    <HomeContainer>
      <Head>
        <title>Home | Technical test Leadster</title>
      </Head>
      <Header />
      <main style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
        <MainBanner />
        <ListVideos />
        <DemoLeads />
      </main>
      <Footer />
    </HomeContainer>
  )
}
