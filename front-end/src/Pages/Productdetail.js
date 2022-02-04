import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import { Add,  CallToActionSharp,  Remove } from "@material-ui/icons";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {useLocation} from 'react-router-dom'
import axios from 'axios'
import { addProducts } from '../redux/CartRedux'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
const Container = styled.div``
const Wrapper = styled.div`
display:flex;
margin-top:50px;
`
const ImageContainer = styled.div`
flex:1;
width:40%;
padding:10px 30px;
`
const Image = styled.img`
width:100%;
height:100vh;
object-fit:cover;
`
const Info = styled.div`
flex:1;
padding:20px 30px;
margin-top:60px; 
`
const Title = styled.h2`
font-size:40px;
font-weight:100;
letter-spacing:2px;
width:30%;
margin-bottom:30px;
`
const Para = styled.p`
color:grey;
margin-bottom:30px;
`
const Price = styled.span`
font-size:20px;
`
const AmountConatiner = styled.div`
display:flex;
margin-top:30px;
`
const Amount = styled.div`
margin:0 15px;
`
const Icon = styled.button`
cursor:pointer;
border:none;
background-color:transparent;
color:grey;
transition:all .5s ease;
  &:hover{
    transform:scale(1.2);
    color:black;
  }
`
const ButtonGroup = styled.div`
margin-top:20px;
`
const Button = styled.button`
padding:10px 25px;
display:flex;
justify-content:center;
align-items:center;
background-color:transparent;
cursor:pointer;
  &:hover{
    transform:translateY(-5px)
  }
`
const Text = styled.span`
margin-left:7px;
`
const Diswrap = styled.div`
display:flex;
`

const Productdetail = () => {
let userid;  
  // const userid = useSelector((state) =>state.user.currentUser.user._id)   

  const loginuser = useSelector((state) =>state.user.currentUser)
  const registeruser = useSelector((state) =>state.registeruser.currentUser)

  if(loginuser){
       userid = loginuser.user._id;
  }
  if(registeruser){
      userid = registeruser.user._id;
  }
  const [product,setProduct] =  useState({});
  const location = useLocation();
  const [quantity,setquantity] = useState(1);
  const dispatch = useDispatch()
 let id= location.pathname.split('/')[2];

    useEffect(() =>{
      const getProduct = async() =>{
          try{
            const res =  await axios.get("http://localhost:8000/api/v1/products/"+id)
              setProduct(res.data.data)
            
          }catch(err){

          }
      }

      getProduct()
    },[]) 
  
    const svalue = product.dis/10; //p5
    const value = product.price/10;
    const offvalue = svalue * value;
     const finalvalue = product.price - offvalue
  
    const ClickHandler =(val) =>{
      if(val === "asc"){
        setquantity(quantity + 1);
      }
      if(val === "dec"){
        if(quantity > 1){
          setquantity(quantity -1)
        }else {
          quantity = 1
        }
      }
    } 
    const clickHandler = (event) =>{
      event.preventDefault();

      const user = userid;
   
  // dispatch(addProducts({user,...product,quantity}))
  dispatch(addProducts({
    user,
    products:{
      product :id ,
      quantity,
      price : finalvalue ? finalvalue : product.price
    }
  }))
    }
  return (
      <Container>
        <Wrapper>
          <ImageContainer>
            <Image  src={product.img}/>
            </ImageContainer>
              <Info>
              <Title>{product.name}</Title>
              <Para>
                {product.desc}
              </Para>
  
       { product.dis ?
       <Diswrap>
       <h3 style={{fontSize:"25px",letterSpacing:"2px"}}>${finalvalue}</h3> 
       <Price style={{marginLeft:"30px",marginTop:"6px",fontSize:"15px"}}>
        <del>{product.price}</del>
         </Price>
       </Diswrap> 
       :    <Price>$ {product.price}</Price> 
}
                        <AmountConatiner>
             <Icon>
             <Remove onClick={() =>ClickHandler('dec')}/>
             </Icon>
              
              <Amount>
                {quantity}
              </Amount>
           <Icon>
           <Add onClick={() =>ClickHandler('asc')}/>
           </Icon>
           </AmountConatiner>
              <ButtonGroup>
              <Button onClick={clickHandler}><ShoppingCartOutlinedIcon/><Text>Add to cart</Text> </Button>
              </ButtonGroup>
              </Info>
        </Wrapper>
      </Container>
    )
}

export default Productdetail
