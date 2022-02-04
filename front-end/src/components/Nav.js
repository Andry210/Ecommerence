import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { mobile,smallTablet,largeTablet } from '../responsive';
import { RiLogoutBoxRLine } from "react-icons/ri";
import { loginSuccess } from '../redux/userRedux';
import { registerSuccess } from '../redux/RegisterRedux';
import {
    Link
  } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addProducts,deleteProducts } from '../redux/CartRedux';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
const Container = styled.div`

over-flow:hidden;
display:flex;
flex-direction:column;

background-color:white;
z-index:200;
${smallTablet({position:"sticky",top:0})}
`
const Left = styled.div`
flex:1;
display:flex;
${largeTablet({flex : "1"})}
`
const Span = styled.div`;
margin-left:30px;
font-size:20px;
color:black;
font-weight:600;
margin-top:-10px;
`

const Center = styled.div`
flex:1;
${largeTablet({flex : "3"})}
`
const Navmenu = styled.ul`
display: flex;
list-style: none;
text-align: center;
margin-right: 30px;
${smallTablet({display:"flex",flexDirection:"column",width:"100%",
borderTop:"1px solid grey",position:"absolute",
top:"60px",left:"-110%",opacity:1,transition:"all .5s ease"
})};
`
const Navitem = styled.li`
margin-top:20px;
line-height: 40px;
margin-right: 16px;
&:after{
    content: "";
    display: block;
    height: 3px;
    width: 0;
    background: transparent;
    transition: width 0.7s ease, background-color 0.5s ease;
  }
`
const NavLink = styled (Link)`
 color: #fff;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;

  z-index:500;
    &:hover{
      border-bottom:1px solid black;
      padding-bottom:10px;
    }
  `


const Right = styled.div`
flex:1;
display:flex;
justify-content:flex-end;
${largeTablet({flex : "1"})}
`
const Signin = styled.span`
margin-right:20px;
`

const RightGroup = styled.div`
margin-right:30px;
display:flex;
justify-content:center;
align-items:center;
`

const Wrapper = styled.div` 
    display:flex;
    justify-content:space-between;
 align-items:center;

 padding:20px 0;
 margin-top:0;

 `
   
    const Icon = styled.div`
    cursor:pointer;
    display:none;
    ${smallTablet({display:"block",marginRight:"200px"})}
    ${mobile({display:"block",marginRight:"10px"})}
    `



const Nav = () => {
    const dispatch = useDispatch();
    const loginuser = useSelector((state) =>state.user.currentUser)
    const registeruser = useSelector((state) =>state.registeruser.currentUser)
    const [reguser,setreguser] = useState(false);
    const [user,setuser] = useState(false);
    const[click,setClick] = useState(false); 
    const quantity = useSelector(state =>state.cart.quantity);
   
const handleClick = (e) =>{
 e.preventDefault();
 
 setClick(!click)
}

   useEffect(() =>{
    if(loginuser){
    setuser(true)
    }
    if(registeruser){
        setreguser(true)
    }
   },[loginuser,registeruser])

    const Logout = () =>{
   setuser(false);    
   setreguser(false);    
   dispatch(loginSuccess(null));
   dispatch( registerSuccess (null))
   dispatch(deleteProducts());
}
    return (
       <Container>
          
           <Wrapper>
               <Left><Span>Esto</Span>
               
               </Left>
           <Center>
           <Navmenu style={{backgroundColor: click && "white",
        left : click && "0px", opacity : click && 1, transition : click && "all .5s ease",
        zIndex : 30
        }}>
         
         <Navitem onClick={handleClick} >
              <NavLink 
               to="/"
              style={{color:  "black"}}

              >
                Home
              </NavLink>
            </Navitem>
          <Navitem onClick={handleClick} >
              <NavLink 
               to="/products"
              style={{color:  "black"}}

              >
                Products
              </NavLink>
            </Navitem>
            <Navitem   onClick={handleClick}>
              <NavLink 
                to="/men-categories"
              style={{color: "black"}}
            
              >
                Men's
              </NavLink>
            </Navitem>
            <Navitem  onClick={handleClick}>
              <NavLink 
               to="/women-categories"
              style={{color:"black"}}
               
               
              >
                Women's 
              </NavLink>
            </Navitem>
          </Navmenu>
           </Center>
          
            
           <Icon onClick={handleClick}>
              {click ?<CloseIcon/> : <MenuIcon />}
          </Icon>
          <Right> 
               <RightGroup>
        <Link to="/login"  style={{textDecoration:'none',color:'black'}}>
        {user || reguser ? 
         <Signin style={{fontSize:'20px',marginTop:"30px"}} onClick={Logout}><RiLogoutBoxRLine/></Signin>
             :<Signin>login</Signin>
                }
           </Link>
                <Link to="/cart">
                <Badge badgeContent={quantity} color="secondary">
                         <ShoppingCartOutlinedIcon color="action" />
                    </Badge>
                </Link>
                </RightGroup>
            </Right>

            </Wrapper>
         

</Container>
    )
}

export default Nav
