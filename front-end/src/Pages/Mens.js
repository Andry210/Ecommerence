import React from 'react'
import styled from 'styled-components'
import Men from '../components/Men';
import { mobile, smallTablet } from '../responsive';
import {MensProduct} from './../components/data';

const Container = styled.div``

const Wrapper = styled.div`

display:flex;
justify-content:center;
align-items:center;
${smallTablet({display:"flex",flexDirection:"column"})}
${mobile({display:"flex",flexDirection:"column"})}
`
const Title = styled.div`
margin-top:70px;
margin-bottom:50px;
display:flex;
justify-content:center;
align-items:center;
font-size:40px;
letter-spacing:3px;
font-weight:100;
`
const Mens = () => {
    return (
      <Container>
          <Title>
                Men's Fashion
            </Title>
          <Wrapper>
           
       {MensProduct.map((item) =>{
             return <Men item={item}/>
       })}
        
     

            </Wrapper>
      
      </Container>
    )
}

export default Mens
