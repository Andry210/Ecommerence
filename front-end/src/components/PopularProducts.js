import React ,{useState, useEffect}from 'react'
import styled from 'styled-components'
import PopularProduct from './PopularProduct';
import { publicRequest } from '../RequestMethod';
import {Link} from 'react-router-dom'
import { mobile,smallTablet,largeTablet } from '../responsive';
import * as ReactBootstrap from 'react-bootstrap'

const Container = styled.div`
width:100%;
padding:10px 0px;
over-flow:hidden;
`
const Wrapper = styled.div`
display:flex;
flex-wrap:wrap;
margin-top:30px;
justify-content:center;
`
const TitleContainer = styled.div``;
const Title = styled.h1`
font-weight:100;
letter-spacing:2px;
margin-left:30px;
${smallTablet({textAlign:"center"})}
`;

const ButtonContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
`;
const Button = styled.button`
padding:10px 30px;
border:1px solid black;
background-color:transparent;
color:black;
cursor:pointer;
letter-spacing:2px;
transition:all .5s ease;
&:hover{
        background-color:black;
        color:white;
    }
`;
const PopularProducts = () => {
    const [products,setProducts] =  useState([])
    const [loading,setloading] = useState(false)
    useEffect(() =>{
    const getProducts = async () =>{
        try{
                const res = await publicRequest.get('/products?cat=discount&&limit=3')
               
                setProducts(res.data.products) 
                setloading(true)
            }catch(err){

        }
    }
    getProducts()
   },[])
    
    return (
       <Container>
           <TitleContainer>
               <Title>
                   Discount Products
               </Title>
           {loading ?
           <Wrapper>
            {products.map((item) =>{
                  return  <PopularProduct  item = {item}/>
            })}
            </Wrapper>
            :
            <div style={{textAlign:"center",padding: "30px 0",paddingBottom :"50px"}} >
            <ReactBootstrap.Spinner animation="border" /> 
        </div>
}   
           </TitleContainer>
           <ButtonContainer>
           <Link to ={'/discount'}>
               <Button>View More</Button>
            </Link>
           </ButtonContainer>
       </Container>
    )
}

export default PopularProducts
