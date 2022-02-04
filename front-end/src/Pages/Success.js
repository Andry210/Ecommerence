import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useLocation } from "react-router";


const Container = styled.div`
display:flex;

width:100%;
height:80vh;
margin: 0 auto;
justify-content:center;

`
const Wrapper = styled.div`

border:1px solid white;
width:350px;
height:70vh;
box-shadow: 5px 10px 10px grey;
`
const Text = styled.h3`
font-size:18px;
letter-spacing:4px;
font-weight:600;
margin-top:20px;
color:#555;
text-align:center;
`
const Button = styled.button`

margin-top:20px;
padding:10px 35px;
border:1px solid grey;
background-color:transparent;
color:black;
margin-left:120px;
cursor:pointer;
    &:hover{
        background-color:black;
        color:white;

    }
`
const Icon = styled.div`
margin: 20px auto;
display:flex;
justify-content:center;
align-items:center;
`
const Wrap = styled.div`
margin-top:20px;
display:flex;
justify-content:space-between;
`
const Left = styled.span`
color:grey;
margin-left:30px;
`
const Right = styled.span`
margin-right:30px;
`
const Success = () => {
    const history = useHistory();
    const location = useLocation();
    let name;
    let payment;
    let amount ;
    let country;
    if(location.state){
        payment = location.state.data.payment_method_details.card.brand
        name = location.state.data.source.name;
        amount = location.state.data.amount;
       country =location.state.data.source.address_country;
    }
    amount = amount / 100;
const ClickHandler = () =>{
    
    history.push('/')
    }
    return (
        <Container>
                     <Wrapper>
                        <Text>Payment Successful!</Text>
                        <Icon><CheckCircleOutlineIcon style={{fontSize:"60px"}}/></Icon>
                        <Wrap><Left>name
                            </Left>
                            <Right>{name}</Right>
                            </Wrap>
                            <Wrap><Left>Amount
                            </Left>
                            <Right>{amount}</Right>
                            </Wrap>
                            <Wrap><Left>Payment Method
                            </Left>
                            <Right>{payment}</Right>
                            </Wrap>
                            <Wrap><Left>Address
                            </Left>
                            <Right>{country}</Right>
                            </Wrap>
                        <Button onClick={ClickHandler}>Ok</Button>
                      </Wrapper>
           </Container>
    )
}

export default Success
