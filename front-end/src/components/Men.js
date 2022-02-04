import React from 'react'
import styled from 'styled-components'
import {
    Link
    
  } from "react-router-dom";
  import { mobile,smallTablet,largeTablet } from '../responsive';

const Container = styled.div`
margin:0 10px;
width:30%;
position:relative;
${smallTablet({width:"60%"})};
${mobile({width:"70%"})};
`


const Image = styled.img`
width:100%;
height:90vh;
object-fit:cover;
${smallTablet({height:"100%"})};
`
const Info = styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;

display:flex;
justify-content:center;
align-items:center;
transition:all .5s ease
`
const Title = styled.button`
background-color:transparent;
padding:10px 30px;
cursor:pointer;
    &:hover{
        transform:scale(1.2);
    }
`
const Men = ({item}) => {
    return (
     <Container>
         <Image src={item.img}/>
        <Info>
          <Link to={`/m${item.text}`} >  <Title>
                {item.text}
            </Title>
        </Link>
        </Info>        
     </Container>
    )
}

export default Men
