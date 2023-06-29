import { DemoLeads } from '@/components/DemoLeads'
import { Header } from '@/components/Header'
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
        <div style={{ height: '400px', background: '#FFF' }}></div>
        <DemoLeads />
        <div style={{ height: '400px', background: '#FFF' }}></div>
      </main>
    </HomeContainer>
  )
}
