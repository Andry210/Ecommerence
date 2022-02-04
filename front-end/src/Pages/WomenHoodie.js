import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProducts } from '../redux/CartRedux';
import { useSelector } from 'react-redux';
import { mobile,smallTablet,largeTablet } from '../responsive';
const Info = styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:80vh;
display:flex;
justify-content:center;
align-items:center;
background-color:rgba(0,0,0,0.6);
transition:all .5s ease;
opacity:0;
${smallTablet({height:"85vh"})};
`
const Container = styled.div`
width:30%;
margin:0 10px;
margin-bottom:20px;
position:relative;
cursor:pointer;
    &:hover ${Info}{
            opacity:1;
    }
    ${smallTablet({width:"60%"})};
    ${mobile({width:"90%"})};
    `
const Image = styled.img`
width:100%;
height:80vh;
object-fit:cover;
${smallTablet({height:"85vh"})};
`

const Icon = styled.div`
height:40px;
width:40px;
border-radius:50%;
display:flex;
justify-content:center;
align-items:center;
margin:0 3px;
cursor:pointer;
color:white;
transition:all .2s ease;

&:hover{
    background-color:white;
   
   color:black;
   transform:scale(1.3);
}
`
const DiscountGroup = styled.div`
position:absolute;
width:100%;
height:100%;
top:0;
left:0;
`

const Discount = styled.div`
border:none;
padding:10px;
color:white;
width:50px;
height:10px;
font-size:13px;
background-color:red;
display:flex;
justify-content:center;
align-items:center;
`
const WomenHoodie = ({item}) => {
    const dispatch = useDispatch()
    let userid;
    const loginuser = useSelector((state) =>state.user.currentUser)
    const registeruser = useSelector((state) =>state.registeruser.currentUser)
  
    if(loginuser){
         userid = loginuser.user._id;
    }
    if(registeruser){
        userid = registeruser.user._id;
    }

    const ClickHandler = (e) =>{
        e.preventDefault();
        let quantity = 1;
        let id = item._id;
        const user = userid;
        dispatch(addProducts({
            user,
            products:{
              product :id ,
              quantity,
              price : item.price
            }
          }))
    }
    return (
      <Container>
          <Image src={item.img}/>
          {item.dis &&
               <DiscountGroup>
                <Discount>
                    {item.dis}% off
                </Discount>
                </DiscountGroup>
               
            }
          <Info>
          <Link to ={`/product/${item._id}`}>
            <Icon>
                
            <SearchIcon />
            </Icon> 
            </Link>
            <Icon onClick={ClickHandler}>
            <ShoppingCartOutlinedIcon />
            </Icon> 
           
            </Info> 
       </Container>
    )
}

export default WomenHoodie
