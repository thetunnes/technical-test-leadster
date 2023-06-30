import Image from 'next/image'
import {
  MainBannerContainer,
  MainText,
  TagTextBtn,
  Text,
  TextWithIconTop,
} from './styles'
import TopoImg from '@/assets/asset-header.png'

export function MainBanner() {
  return (
    <MainBannerContainer>
      <TagTextBtn disabled>webinars exclusivos</TagTextBtn>

      <h2>Menos Conversinha,</h2>
      <MainText>
        Mais{' '}
        <TextWithIconTop>
          Conversão <Image src={TopoImg} alt="" width={32} />
        </TextWithIconTop>
      </MainText>

      <Text>
        Conheça as estratégias que <strong>mudaram o jogo</strong> e como
        aplicá-las no seu negócio.
      </Text>
    </MainBannerContainer>
  )
}
