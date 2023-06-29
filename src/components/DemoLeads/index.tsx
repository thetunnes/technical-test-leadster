import Image from 'next/image'
import { Button } from '../Button'
import { TextBold } from '../TextBold'
import {
  ActionDemoLeadsWithUs,
  BannerImg,
  BoxFooter,
  DemoLeadsContainer,
  Mountain,
  NavDemoLead,
  WrapperDemoLeads,
} from './styles'
import SeloRDStation from '@/assets/selo_RD.png'
import ComparativoCTA from '@/assets/comparativo_img_CTA.png'
import Rating from '@/assets/rating.webp'
import NoCard from '@/assets/no-card-dark.webp'

export function DemoLeads() {
  return (
    <DemoLeadsContainer>
      <Mountain>
        <div className="polygon" />
        <div className="circle" />
      </Mountain>

      <WrapperDemoLeads>
        <BannerImg>
          <Image src={ComparativoCTA} alt="" height={400} />
        </BannerImg>

        <ActionDemoLeadsWithUs>
          <h3>
            Pronto para triplicar sua <br /> <strong>Geração de Leads?</strong>
          </h3>

          <p>
            Criação e ativação em <strong>4 minutos.</strong>
          </p>

          <NavDemoLead as="nav">
            <Button active smallText={false}>
              <TextBold as="span">ver demonstração</TextBold>
            </Button>

            <Image src={SeloRDStation} alt="" height={60} />
          </NavDemoLead>

          <footer>
            <BoxFooter as="section">
              <Image src={NoCard} alt="" />
              <p>
                <strong>Não</strong> é necessário Cartão de Crédito
              </p>
            </BoxFooter>
            <BoxFooter>
              <Image src={Rating} alt="" />
              <p>
                <strong>4.95</strong> média de satisfação
              </p>
            </BoxFooter>
          </footer>
        </ActionDemoLeadsWithUs>
      </WrapperDemoLeads>
    </DemoLeadsContainer>
  )
}
