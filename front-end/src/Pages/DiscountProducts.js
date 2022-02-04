import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import { publicRequest } from '../RequestMethod'
import DiscountProduct from './DiscountProduct'
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
font-size:40px;
font-weight:100;
letter-spacing:20px;
margin-bottom:30px;
display:flex;
align-items:center;
justify-content:center;
${smallTablet({fontSize:"30px" ,letterSpacing:"10px"})}
`
const Wrapper = styled.div`
padding:30px;
`
const DiscountProducts = () => {
    const [products,setProducts] = useState([])
    const [loading,setloading] = useState(false)
    useEffect(() =>{
        const Products = async() =>{
            try
            {     
            const res = await publicRequest.get(`/products?cat=discount`)  
                        setProducts(res.data.products);
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
                Discount Products
            </Title>
      {loading ?
           <ImageContainer>
           {products.map((item) =>{
               return    <DiscountProduct  item={item}/>
           })}
        </ImageContainer>
        : <div style={{textAlign:"center",padding: "30px 0",paddingBottom :"50px"}} >
         <ReactBootstrap.Spinner animation="border" /> 
     </div>
}
       </Wrapper>
       </Container>

    )
}

export default DiscountProducts
