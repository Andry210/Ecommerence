import React,{useState} from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch } from 'react-redux';
import { mobile,smallTablet } from '../responsive';
const Container = styled.div`
padding:30px 10px;
${smallTablet({marginLeft:"-50px"})};
`

const First = styled.div`
margin-top:-20px;
display:flex;
margin-left:100px;
`


const ImageContainer = styled.div`
width:60px;
${smallTablet({minWidth:"60px"})};

`
const Image = styled.img`
width:100%;
height:auto;
`
const Content = styled.div`
margin-left:30px;
margin-top:20px;
`
const Name = styled.div`
color:grey;
font-size:15px;
`
const Price = styled.div`
font-size:14px;
margin-top:10px;
color:black;
`
const QuantityContainer = styled.div`
margin-top:40px;
margin-left:50px;
display:flex;
height:25px;
justify-content:center;
align-items:center;
width:50px;
border:1px solid grey;
`
const Icon = styled.div`
margin-top:2px;
cursor:pointer;
    &:hover{
        color:black;
        font-size:1.2;
    }
`
const Amount = styled.div`
font-size:15px;
margin:0 5px;
`
const Subtotal = styled.div`
margin-top:40px;
margin-left:80px;
font-size:20px;
${smallTablet({fontSize:"15px"})};
`
const RemoveContainer = styled.div`
margin-top:45px;
margin-left:70px;
color:grey;
cursor:pointer;
height:15px;
    &:hover{
        color:black;
        transform:scale(1.3);
    }

`
const Second = styled.div`
margin-right:50px;
`
const Cartdetail = ({item}) => {
   const dispatch = useDispatch();
    const [totprice,settotprice] = useState(item.quantity * item.product.price)
   const svalue = item.product.dis/10; //p5
    const value = item.product.price/10;
    const offvalue = svalue * value;
     const finalvalue = item.product.price - offvalue;
     
    
    return (
        <Container>
           <First>
                <ImageContainer>
                    <Image src={item.product.img} />
            
                </ImageContainer>
                <Content>
                    <Name>{item.product.name}</Name>
                 {item.product.dis ? <Price>$ {finalvalue}</Price>

                    : <Price>$ {item.product.price}</Price>
            } 
                </Content>
              
                <QuantityContainer> 
                         <Icon>
                        <RemoveIcon style={{fontSize: "15px",color:"grey"}}
                        />
                        </Icon>  
                         <Amount>
                            {item.quantity}
                        </Amount> 
                         <Icon>
                        <AddIcon style={{fontSize: "15px",color:"grey"}}/>
                        </Icon>
                     </QuantityContainer>
                { item.product.dis ?  <Subtotal>
                    $ {item.quantity * finalvalue}
                </Subtotal> 
            :<Subtotal>
            $ {totprice}
        </Subtotal>     
            }

            </First>

        </Container>
    )
}

export default Cartdetail



