import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import styled from 'styled-components'
import icon from '../../assets/compras.png'

const Container = styled.div`
  background: #262529;
  box-shadow: 0px 0px 250px #000000;
  border-radius: 20px;
  padding: 60px 30px;
  text-align: center;
`
const Amount = styled.div`
  color: #ffc700;
  font-weight: bold;
  font-size: 5rem;
`
const Dollars = styled.span``

const Input = styled.input`
  -webkit-appearance: none;
  appearance: none;
  border-radius: 10px;
  width: 700px;
  height: 14px;
  background: #4d4c53;
  outline: none;
  margin: 55px 0;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 50px;
    height: 50px;
    background: #ea346f;
    cursor: pointer;
    border-radius: 50%;
    outline: 15px solid rgba(234, 52, 111, 0.2);
  }
  &::-moz-range-thumb {
      -webkit-appearance: none;
      appearance: none;
      border: none; /* firefox needs this */
      width: 50px;
      height: 50px;
      background: #ea346f;
      cursor: pointer;
      border-radius: 50%;
      outline: 15px solid rgba(234, 52, 111, 0.2);
    }
    &::-moz-range-progress {
      background: #ea346f;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      height: 14px;
    }
  }
`
const Button = styled.button`
  font-family: 'Source Sans Pro', sans-serif;
  border: none;
  color: white;
  font-size: 1.5rem;
  text-transform: uppercase;
  padding: 20px 40px;
  background: #333139;
  border-radius: 100px;
  letter-spacing: 1px;
  cursor: pointer;
  &:hover {
    background: white;
    color: black;
  }
`

const RangeTemplate = () => {
  const [rangeVal, serRangeVal] = useState(0)

  useEffect(() => {}, [rangeVal])
  const handleMouseDown = (e) => {
    serRangeVal(e.target.value)
  }
  const handleClick = () => {
    Swal.fire({
      title: `$${rangeVal}.00`,
      text: 'Precio aceptado',
      imageUrl: `${icon}`,
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
  }
  return (
    <Container>
      <Amount>
        <sup>$</sup>
        <Dollars>{rangeVal}.00</Dollars>
      </Amount>
      <Input
        type="range"
        id="priceRange"
        name="priceRange"
        min="0"
        max="10000"
        step="1"
        value={rangeVal}
        onChange={handleMouseDown}
      />
      <br />
      <Button onClick={handleClick}>Buy Now</Button>
    </Container>
  )
}

export default RangeTemplate
