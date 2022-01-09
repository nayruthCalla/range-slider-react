import styled from 'styled-components'
import RangeTemplate from './RangeTemplate/RangeTemplate'
import manual from '../assets/slider.png'
import '../css/App.css'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const Figure = styled.figure`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
  }
  @media screen and (min-width: 1024px) {
  }
`
const Image = styled.img``

const Title = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 37px;
  text-align: center;
  color: rgba(255, 255, 255, 0.54);
`

const App = () => {
  return (
    <Container>
      <Title>Bienvenidx a PonTuPrecio</Title>
      <Figure>
        <Image src={manual} alt="" />
      </Figure>
      <RangeTemplate />
    </Container>
  )
}

export default App
