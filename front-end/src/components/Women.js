import React from 'react'
import styled from 'styled-components'
import {
    Link
    
  } from "react-router-dom";
import { mobile, smallTablet } from '../responsive';

const Container = styled.div`
width:30%;
margin:0 10px;
position:relative;
${smallTablet({width:"70%"})}
${mobile({width:"60%"})}
`


const Image = styled.img`
width:100%;
height:90vh;
object-fit:cover;
${smallTablet({height:"100%"})}
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
        transform:scale(1.3);
    
    }
`
const Women = ({item}) => {
    return (
     <Container>
         <Image src={item.img}/>
        <Info>
           <Link to = {`w${item.text}`}> <Title>
                
                {item.text}
            </Title>
            </Link>
        </Info>        
     </Container>
    )
}

export default Women;
