import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import Cartdetail from './Cartdetail'
import { useDispatch, useSelector } from 'react-redux'; 
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import {publicRequest, userRequest} from './../RequestMethod'
import {Link} from "react-router-dom"
import { deleteProducts } from '../redux/CartRedux';
import { mobile,smallTablet,largeTablet } from '../responsive';
const Container = styled.div`
overflow:hidden;
`
const Wrapper = styled.div`
padding:5px 10px;
`
const Title = styled.h3`
margin-top:30px;
pading-top:50px;
font-size:30px;
margin-left:100px;
letter-spacing:3px;
font-weight:100;
// border-bottom:0.2px solid black;
padding-bottom:30px;
width:30%;
`
const Cartwrap = styled.div`


`
const Total = styled.div`
border-top:0.2px solid grey;
width:60%;
margin-left:100px;
display:flex;
justify-content:space-between;
padding:15px 0;
${smallTablet({marginLeft:"50px"})};
`
const Left = styled.div`
margin-left:10px;
`
const Right = styled.div`
margin-right:10px;
font-size:20px;
`
const ClearCart = styled.button`
margin-left:250px;
margin-top:20px;
padding:10px 25px;
background-color:transparent;
color:black;
border: 1px solid grey;
transition:all .5s ease;
cursor:pointer;
letter-spacing:1px;
    &:hover{
        background-color:black;
        color:white;
    }
    ${smallTablet({marginLeft:"150px"})};
    ${mobile({

        marginLeft:"100px"
        })}
`
const Wrap = styled.div`
display:flex;
${smallTablet({justifyContent:"center",
flexDirection:"column"
})}
`
const First = styled.div`
flex:2;
${smallTablet({

marginRight:"50px"
})}
`
const Second = styled.div`
flex:1;
${smallTablet({width:"50%",
margin:"0 auto",
marginTop:"50px",

})}
`
const Summary = styled.div`
border:1px solid grey;
font-size:20px;
padding:10px;
color:black;
text-transform:uppercase;
border-bottom:none;
`
const Subtotal = styled.div`
border:0.1px solid grey;
padding: 15px 10px;
display:flex;
justify-content:space-between;
border-bottom:none;
`
const Stext = styled.div``
const Para = styled.p`
margin-top:4px;
font-size:12px;
color:grey;
`
const SPrice = styled.div``
const Checkout = styled.button`
margin-top:20px;
padding:10px 20px;
color:black;
background-color:transparent;
border: 1px solid black;
margin-left:120px;
cursor:pointer;

transition:all .5s ease;
    &:hover{
        background-color:black;
        color:white;

    }
    ${largeTablet({padding:"10px",
marginLeft:"100px"
})}
${mobile({

    marginLeft:"50px",padding:"10px"
    })}
;
    `
const ShppingGroup = styled.div`
display:flex;
justify-content:space-between;
border:0.1px solid grey;
padding :10px;
`
const Free = styled.div``

const CShopping = styled.button`
margin-top:128px;
cursor:pointer;
margin-left:170px;
padding:10px 15px;
background-color:black;
color:white;
transition:all .5s ease;
   &:hover{
       transform:translateY(-7px)
   }
   ${largeTablet({padding:"10px 15px" ,
marginLeft:"140px"

})
}
${smallTablet({
marginTop:"30px",
padding:"10px",
marginLeft:"100px"
})}
${mobile({
padding:"10px",
marginLeft:"50px"
    })}  
`
   const CartEmpty = styled.div`
   display:flex;
   justify-content:center;
   align-items:center;
   flex-direction:row;
   padding:100px 0;
   `
   const CartPara = styled.p`
   font-size:20px;
   margin-left:20px;
   letter-spacing:4px;
   `
   const H2 = styled.h2`
   font-size:30px;
   letter-spacing:4px;
   `
const KEY=process.env.REACT_APP_STRIPE

const Cart = () => {


    const dispatch = useDispatch()
    let user;

    //   const user = useSelector((state) =>state.user.currentUser.user._id)
    const loginuser = useSelector((state) =>state.user.currentUser)
    const registeruser = useSelector((state) =>state.registeruser.currentUser)
  
    if(loginuser){
         user = loginuser.user._id;
    }
    if(registeruser){
        user = registeruser.user._id;
    }
    const cart =  useSelector(state => state.cart);
    let quantitycart = cart.quantity;
    const [cartofuser,setcartofuser] = useState('')
  

useEffect(() =>{
    const createCart = async () =>{
        try{
            const res = await publicRequest.post('/carts',cart)
        
        }catch(err){

        }
    }
    createCart()
},[cart])


useEffect(() =>{
    const GetUserCart = async() =>{
        try{ 
        const usercart = await publicRequest.get(`/users/${user} `)
                setcartofuser(usercart)
            }catch(err){ 
        
        }
        }
    GetUserCart()

},[user,cart]);



const [stripeToken,setStripeToken] = useState(null)    
const history = useHistory()
const onToken = (token) =>{
    setStripeToken(token)
    }
    useEffect(()=>{
        const makeRequest = async() =>{
            try{
                
                   const res = await axios.post('http://localhost:8000/api/v1/checkout/payment',{
                       tokenId : stripeToken.id,
                       amount : cart.total * 100,
                      
                    })
                    dispatch(deleteProducts());
                    history.push("/success",{data:res.data}) 
            }catch(err){
            }
        }
         stripeToken && cart.total >= 1 && makeRequest()
    
    },[stripeToken,cart.total,history])

    
        const ClickHandler = (e) =>{
            e.preventDefault()    
    delete cartofuser.data.user.cart
            dispatch(deleteProducts())
}


return (
        <Container>
           { quantitycart ? <Wrapper>
                    <Title>My Cart</Title>
                   <Wrap>
                   <First>
                    <Cartwrap>                            
                    {cartofuser.data && cartofuser.data.user.cart[cartofuser.data.user.cart.length-1].products.map((item) =>{
                          return    <Cartdetail item={item}/>  
                    })}
                       <Total>
                        <Left>
                            total
                        </Left>
                        <Right>
                            $ {cart.total}
                        </Right>
                        </Total>   
                    </Cartwrap>
                     <ClearCart onClick ={ClickHandler}>
                        Clear Cart     
                    </ClearCart>    
                    </First>
                    <Second>
                        <Summary>
                            Summary
                        </Summary>
                        <Subtotal>
                          <Stext>
                              Subtotal
                              <Para>
                                  Total does not include shipping
                              </Para>
                          </Stext>
                          <SPrice>
                              $ {cart.total}
                          </SPrice>
                        </Subtotal>
                        <ShppingGroup>
                            <Stext>
                                Shipping
                            </Stext>
                            <Free>
                                free
                            </Free>
                        </ShppingGroup>
                    <StripeCheckout
                    name='Esto shop'
                  shippingAddress
                    description={`Your total is ${cart.total}`}
                    amount={cart.total * 100}
                    token={onToken}
                    stripeKey={KEY}
                    >
                    <Checkout>
                        Proceed to Checkout
                    </Checkout>
                    </StripeCheckout>
                    <Link to ="/products">
                    <CShopping>
                        Continue Shopping
                    </CShopping>
                    </Link>
                    </Second>
                   </Wrap>
                </Wrapper>
    :<CartEmpty>
    <H2>Nothing to show!</H2>
        <CartPara>Your cart is empty</CartPara>
       </CartEmpty>          
}
</Container>
    )
}

export default Cart
