import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import {publicRequest} from './../RequestMethod'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
    Link
    
  } from "react-router-dom";
import WomenHoodie from './WomenHoodie';
import { mobile,smallTablet,largeTablet } from '../responsive';
import * as ReactBootstrap from 'react-bootstrap'

const Container = styled.div`

`
const ImageContainer = styled.div`
display:flex;
justify-content:center;
flex-wrap:wrap;
`

const Title = styled.div`
font-size:50px;
font-weight:100;
letter-spacing:20px;
margin-bottom:30px;
display:flex;
align-items:center;
justify-content:center;
`
const Wrapper = styled.div`
padding:30px;
`
const Guide = styled.div`
display:flex;
justify-content:flex-end;
text-decoration:none;
`
const Button = styled.button`
text-decoration:none;
color : black;
border-bottom:none;
padding:15px;
cursor:pointer;
background-color:transparent;
letter-spacing:1px;
border:none;
font-size:20px;
`
const Wrap = styled.div`
display:flex;
justify-content:center;
align-items:center;
`
const Icon = styled.div`
margin-top:10px;
color:black;
margin-right:5px;
`
const WomenHoodies = () => {
    const [products,setproducts] = useState([])
    const [loading,setloading] = useState()
    useEffect(() =>{
        const Products = async() =>{
            try
            {     
            const res = await publicRequest.get(`/products?cat=wHoodies`)  
                        setproducts(res.data.products);
                        setloading(true)
                    }
        catch(err){
    
        }
        }
        Products()
    
       },[])
    return (
    
       <Container>
         <Wrapper>
            <Title>
                Hoodies
            </Title>
          {loading ? <ImageContainer>
           {products.map((item) =>{
               return    <WomenHoodie  item={item}/>
           })}
        </ImageContainer>
        :  <div style={{textAlign:"center",padding: "30px 0",paddingBottom :"50px"}} >
        <ReactBootstrap.Spinner animation="border" /> 
    </div>
}
        <Guide>
           
        
        </Guide>
           </Wrapper>
       </Container>

    )
}

export default WomenHoodies
