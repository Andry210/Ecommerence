import React,{useState} from 'react'
import styled from 'styled-components'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Hero from './../Img/Hero5.jpg'
import Men from './../Img/Hero7.jpg'
import { Link } from 'react-router-dom';
import { mobile,smallTablet,largeTablet } from '../responsive';
const Container = styled.div`
width:100%;
height:100vh;
position:relative;
display:flex;
overflow:hidden;
overflow-x:hidden;
`
const Icon = styled.div`
font-size:20px;
position:absolute;
top:37%;
left: ${props => props.direction === "left" && "10px"};
right:${props => props.direction === "right" && "10px"};
cursor:pointer;
z-index:2;
opacity:0.5
`



const Wrapper = styled.div`
display:flex;
transition:all .5s ease;
transform:translateX(${props => props.slide * -100}vw);
padding:30px 40px;
${mobile({padding:"1px 30px"})}
`;

const Slide = styled.div`
width:100vw;
display:flex;
`

const Info = styled.div`
flex:1;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
margin-top:-50px;
`;
const Title = styled.h1`
font-size:50px;
width:300px;
text-transform:uppercase;
font-weight:200;
letter-spacing:4px;
margin-left:30px;
margin-top:-50px;
${smallTablet({fontSize:"30px",width:"200px"})}
${mobile({fontSize:"50px",marginRight:"120px"})}
`;
const Para = styled.p`
margin-right:15px;
margin-top:20px;
font-weight:500;
letter-spacing:2px;
${smallTablet({fontSize:"10px",marginRight:0,marginLeft:"0px"})}
${mobile({fontSize:"15px",marginRight:"50px"})}
`;
const ImageContainer = styled.div`
flex:1;
width:100%;
${smallTablet({marginTop:"57px"})}
${mobile({display:"none"})}

`;
const Button = styled.button`
background-color:transparent;
color:black;
border:1px solid black;
padding:10px 20px;
cursor:pointer;
margin-top:30px;
margin-right:155px;
letter-spacing:2px;
transition:all .5s ease; 
&:hover{
        background-color:black;
        color:white;
    }
    ${smallTablet({marginRight:"110px",fontSize:"8px",padding:"7px"})}
    ${mobile({padding:"10px 13px" ,fontSize:"15px",marginRight:"175px"})}
    `

const Image = styled.img`
margin-top:-50px;
height:90vh;
${smallTablet({height:"60vh"})}
`;
const Image2 = styled.img`
margin-top:-10px;
height:80vh;
margin-left:30px;
`;


const Slider = () => {
   const [slide,setslide] = useState(0);
    
    const handleCLick = (direction) =>{
        if(direction === "Left"){
            setslide(slide === 0 ? 1 : 0)
            
        }
        if(direction === "Right"){
            setslide(slide > 0 ? 0 : 1)
           
        }
       
    }
  
   
   return (
       <Container>
          
        <Icon direction="left" onClick={() =>handleCLick("Left")}>
                < ArrowBackIosIcon/>
            </Icon>
           <Wrapper slide = {slide}>
            <Slide>
               <Info>
                    <Title>
                        Women's Fashion
                    </Title>
                    <Para>Best Cloth Collection By 2022</Para>
                   <Link to="/women-categories">
                    <Button>Shop Now</Button>
                    </Link>
                </Info>
            <ImageContainer>
            <Image src={Hero}/>   
            </ImageContainer>
            
            </Slide>   

            <Slide>
               <Info>
                    <Title>
                        Men's Fashion
                    </Title>
                    <Para>Best Cloth Collection By 2022</Para>
                    <Link to="/men-categories">
                    <Button>Shop Now</Button>
                    </Link>
                </Info>
            <ImageContainer>
            <Image2 src={Men}/>   
            </ImageContainer>
            
            </Slide>   
           </Wrapper>
           <Icon direction="right" onClick={() =>handleCLick("Right")}>
                <ArrowForwardIosIcon/>
            </Icon>
      
           </Container>
    )
}

export default Slider
