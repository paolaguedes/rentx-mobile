import React from 'react'

import { BackButton } from '../../components/BackButton'
import { ImageSlider } from '../../components/ImageSlider'
import { Acessory } from '../../components/Acessory'
import { Button } from '../../components/Button'

import SpeedSvg from '../../assets/speed.svg'
import AccelerationSvg from '../../assets/acceleration.svg'
import ForceSvg from '../../assets/force.svg'
import GasolineSvg from '../../assets/gasoline.svg'
import ExchangeSvg from '../../assets/exchange.svg'
import PeopleSvg from '../../assets/people.svg'

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Acessories,
  Footer
} from './styles'

export function CarDetails(){
  return(
    <Container>
      <Header>
        <BackButton/>
      </Header>

      <CarImages>
        <ImageSlider imageUrl={['https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png']}/>
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 500</Price>
          </Rent>
        </Details>

        <Acessories>
          <Acessory icon={SpeedSvg} name="380km/h"/>
          <Acessory icon={AccelerationSvg} name="3.2s"/>
          <Acessory icon={ForceSvg} name="800 HP"/>
          <Acessory icon={GasolineSvg} name="Gasolina"/>
          <Acessory icon={ExchangeSvg} name="Auto"/>
          <Acessory icon={PeopleSvg} name="2 pessoas"/>
        </Acessories>

        <About>
          Este é automóvel desportivo. Surgiu do lendário touro 
          de lide indultado na praça Real Maestranza de Sevilla. 
          É um belíssimo carro para quem gosta de acelerar.
        </About>
      </Content>

      <Footer>
        <Button 
          title="Confirmar" 
        />
      </Footer>
    </Container>
  )
}