import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import Product from './Product'
import { publicRequest } from '../RequestMethod'
import { Link } from 'react-router-dom'
import { mobile,smallTablet,largeTablet } from '../responsive';
import * as ReactBootstrap from 'react-bootstrap'

const Container = styled.div`
margin-top:10px;
`
const Wrapper = styled.div`
display:flex;
justify-content:center;
flex-wrap:wrap;

`
const Title = styled.div`
margin-top:70px;
margin-bottom:50px;
display:flex;
justify-content:center;
align-items:center;
font-size:40px;
letter-spacing:20px;
font-weight:100;
${smallTablet({fontSize:"30px" ,letterSpacing:"10px"})}
`
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
  opacity:${props =>props.opacity}
`;
const Products = () => {
  const [products,setProducts] = useState([])
  const [limit,setlimit] = useState('/products?limit=6')
  const [opacity,setopacity] = useState(1);
  const [loading ,setloading] = useState(false);
  useEffect(() =>{
      const getProducts = async() =>{
        try{
          const res = await publicRequest.get(`${limit}`);
          setProducts(res.data.products);
          setloading(true)
        }catch(err){

        }
      };
      getProducts()  
  }
  ,[limit,products])

  const ClickHandler = (e) =>{
    e.preventDefault()
    setlimit('/products')
  
    setopacity(0)
  }
  return (
        
     <Container>
       <Title>Products</Title>
        
        {
        loading ?  
      <Wrapper>
         {products.map((item) =>{
                return <Product item={item}/>
         })}
         </Wrapper> 
        :
       <div style={{textAlign:"center",padding: "30px 0",paddingBottom :"50px"}} >
            <ReactBootstrap.Spinner animation="border" /> 
        </div>
      }
        
         <ButtonContainer>
        
               <Button  onClick={ClickHandler}
               opacity={opacity}
               >View More</Button>
          
           </ButtonContainer>
     </Container>
    )
}

export default Products
