import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import MenShirt from './MenShirt'
import { publicRequest } from '../RequestMethod'
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
const MenTshirts = () => {
    const [products,setproducts] = useState([])
    const [loading,setloading] = useState(false)
    useEffect(() =>{
        const getProducts = async() =>{
            try
            {     
            const res = await publicRequest.get(`/products?cat=mT-shirts`)  
                        setproducts(res.data.products);
                        setloading(true)
            }
        catch(err){
    
        }
        }
        getProducts()
    
       },[])
    return (
    
       <Container>
         <Wrapper>
            <Title>
                T-shirt
            </Title>
         {loading ?  <ImageContainer>
           {products.map((item) =>{
               return    <MenShirt  item={item}/>
           })}
        </ImageContainer>
    :  <div style={{textAlign:"center",padding: "30px 0",paddingBottom :"50px"}} >
    <ReactBootstrap.Spinner animation="border" /> 
</div>
 } </Wrapper>
           
       </Container>

    )
}

export default MenTshirts
