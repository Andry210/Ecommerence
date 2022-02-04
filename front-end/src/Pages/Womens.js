import React from 'react'
import styled from 'styled-components'
import Women from '../components/Women'
import {WomensProduct} from '../components/data'
import { mobile,smallTablet } from '../responsive'
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
const Womens = () => {
    return (
      <Container>
          <Title>
                WoMen's Fashion
            </Title>
          <Wrapper>
           
       {WomensProduct.map((item) =>{
             return <Women item={item}/>
       })}
        
     

            </Wrapper>
      </Container>
    )
}

export default  Womens
