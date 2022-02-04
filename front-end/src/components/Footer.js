import React,{useState} from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { mobile,smallTablet,largeTablet } from '../responsive';
import {
    Link
  } from "react-router-dom";
  
const Container = styled.div`
overflow-x:hidden;
`
const Wrapper = styled.div`
margin-top:40px;
height:30vh;

border:none;
padding:30px 0px;
display:flex;
border-top:1px solid grey;
${smallTablet({display:"flex"})};
${mobile({display:"flex",flexDirection:"column"})}
`

const SocialContainer = styled.div`
flex:1;
display: flex;
margin-top:60px;
justify-content:center;
align-items:center;
${largeTablet({display:"none"})};

`;

const SocialIcon = styled.div`

cursor:pointer;
padding: 0 20px;
${smallTablet({margin:"0 6px",fontSize:"10px"})}

`;
const Wrap = styled.div`
flex:1;

${smallTablet({width:"60%",
marginLeft:"-60px"
})}
${mobile({margin:"0 auto"})};
`
const Formtitle = styled.p`
  font-size:20px;
  margin-bottom:20px;
  letter-spacing:3px;
  margin-left:90px;
  font-weight:100;
  ${largeTablet({fontSize:"17px",marginTop:"10px"})}
  ${smallTablet({fontSize:"14px",marginLeft:"90px"})}
  ${mobile({fontSize:"20px",margin:"30px auto"})}
  `
const Form = styled.div`
display:flex;
margin-left:90px;
${largeTablet({marginRight:"60px"})}
${mobile({margin:"20px auto"})};
`
const Input = styled.input`
border:1px solid black;
padding:10px 20px;
letter-spacing:2px;
font-size:10px;
position:relative;
${smallTablet({padding:"8px 3px"})};
${mobile({padding:"10px 15px"})};
`


const Button = styled.button`
padding:10px 10px;
border:1px solid black;
border-left:none;
background-color:transparent;
cursor:pointer;

`

const Right = styled.div`
margin-top:30px;
margin-right:20px;
flex:1;
${mobile({margin:"20px auto"})};

`
const Title = styled.h3`
font-size:25px;
letter-spacing:2px;
font-weight:100;
margin-bottom:20px;
margin-left:100px;
width:20%;
${smallTablet({fontSize:"17px",marginLeft:"100px",marginRight:"130px"})}
${mobile({display:"none"})}
`
const Navgroup = styled.div`
padding-left:5px;
${smallTablet({marginRight:"19px",fontSize:"9px",marginTop:"30px"})}
${mobile({marginTop:"-10px"})}
`
 const Nav = styled.span`
 cursor:pointer;
padding:0 8px;
 &:hover{
    border-bottom:1px solid black;
    padding-bottom:15px;
 }
 ${smallTablet({fontSize:"13px",paddingLeft:"1px"})}
 ${mobile({fontSize:"15px",padding:"0 15px"})}
 `
 const CopyGroup = styled.div`
 display:flex;
 justify-content:center;
margin-bottom:20px;
${largeTablet({marginTop:"50px"})}
${smallTablet({marginTop:"30px"})}
${mobile({marginTop:"20px"})}
`
 const CopyRight= styled.span`
 letter-spacing:5px;
 ${mobile({fontSize:"15px",letterSpacing:"3px",
marginTop:"80px"
})};
 `

const Footer = () => {
    const [email,setemail] = useState("")
    const ClickHandler = () =>{
        setemail('leave your email')
    }
    return (
        <Container>
            <Wrapper> 
            <Wrap>
                <Formtitle>Get the fresh news</Formtitle>
                <Form>
                <Input type="text" placeholder='leave your email' value={email}
                onChange={(e) =>setemail(e.target.value)}/>
                <Button
                onClick={ClickHandler}
                ><SendOutlinedIcon style={{fontSize : "17px",color:"grey"}}/></Button>
                </Form>
            </Wrap>
            <SocialContainer>
                <SocialIcon>
                 <FacebookIcon/> 
                </SocialIcon>
                <SocialIcon>
                 <TwitterIcon /> 
                </SocialIcon>
                <SocialIcon>
                 <InstagramIcon /> 
                </SocialIcon>
            </SocialContainer>

            <Right>
                <Title>Esto</Title>
                <Navgroup>
                <Nav>
                        <Link to="/" style={{textDecoration:'none',color:'black'}} >Home</Link>
                    </Nav>
                    <Nav>
                        <Link to="/products" style={{textDecoration:'none',color:'black'}} >Products</Link>
                    </Nav>
                    <Nav><Link to="/men-categories" style={{textDecoration:'none',color:'black'}}>Men's</Link></Nav>
                    <Nav> <Link to="/women-categories" style={{textDecoration:'none',color:'black'}}>Women's</Link></Nav>
                </Navgroup>
            </Right>

       </Wrapper>
        <CopyGroup>
            <CopyRight>2022 Esto,LLC.All Right Reserved</CopyRight>
            </CopyGroup>
        </Container>
    )
}

export default Footer
