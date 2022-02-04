import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {
    Link} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addProducts } from '../redux/CartRedux';
import { useSelector } from 'react-redux';
import { mobile,smallTablet,largeTablet } from '../responsive';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const Hover = styled.div`
opacity:0;
position:absolute;
width:100%;
height:70vh;
top:0;
left:0;
display:flex;
justify-content:center;
align-items:center;
transition:all .5s ease;
background-color:rgba(0,0,0,0.5);
${smallTablet({height:"80vh"})}
`


const Container = styled.div`

margin-right:15px;
width:30%;
position:relative;
margin-bottom:10px;
transition:all .5s ease;
font-weight:100;
cursor:pointer;
    &:hover ${Hover}{
        opacity:1;
    }
    ${smallTablet({width:"60%"})};
    ${mobile({width:"80%"})}
    `


const Image = styled.img`
    height:70vh;
    width:100%;
    object-fit:cover;
    ${smallTablet({height:"80vh"})};
    `;

const Info = styled.div`
position:absolute;
width:100%;
height:100%;
top:0;
left:0;
`


const Discount = styled.div`
border:none;
color:white;
width:70px;
height:40px;
font-size:13px;
background-color:red;
display:flex;
justify-content:center;
align-items:center;
${smallTablet({width:"80px",fontSize:"15px",paddding:"5px"})};
${mobile({width:"80px",fontSize:"13px",paddding:"3px"})}
`

const Icon = styled.div`
margin:0 3px;
cursor:pointer;
background-color:balck;
color:white;
width:40px;
height:40px;
border-radius:50%;
display:flex;
justify-content:center;
align-items:center;
transition:all .3s ease;
        &:not(:focus):hover{
            background-color:white;
            color:black;
            transform:scale(1.3);
        }

       
`;
const PopularProduct = ({item}) => {
    const svalue = item.dis/10; //p5
    const value = item.price/10;
    const offvalue = svalue * value;
     const finalvalue = item.price - offvalue
   
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
              price : finalvalue
            }
          }))
    }
   
    return (
        <Container>
            <Image src={item.img} /> 

            <Info>
                <Discount>
                
                    {item.dis} %off
                
                </Discount>
            </Info>
            <Hover>
            <Link to ={`/product/${item._id}`}>
          <Icon>
              
            <SearchIcon />
            </Icon> 
        </Link>
            <Icon onClick={ClickHandler}>
            <ShoppingCartOutlinedIcon />
            </Icon> 
            </Hover>

        </Container>
    )
}

export default PopularProduct
