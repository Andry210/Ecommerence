import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { registerFaliure,registerStart,registerSuccess } from './../redux/RegisterRedux';
import {publicRequest} from './../RequestMethod'
import { useHistory } from 'react-router-dom'
import { mobile,smallTablet,largeTablet } from '../responsive';
const Container = styled.div``

const Wrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
`
const Title = styled.h1`
text-align:center;
font-size:40px;
letter-spacing:3px;
font-weight:100;
margin-top:40px;
`
const Form = styled.form`
display:flex;
flex-direction:column;
width:35%;
${smallTablet({width:"50%"})}
`
const Input = styled.input`
margin-top:30px;
padding:10px 20px;
border:none;

border-bottom:.5px solid grey;

padding-bottom:25px;

`
const Button = styled.button`
padding:10px 15px;
width:30%;
margin:40px auto;
background-color:transparent;
letter-spacing:2px;
transition : all .5s ease;
&:disabled{
  background-color:blur;
  cursor:not-allowed;
}
${smallTablet({width:"40%"})};
${mobile({width:"50%"})}
}
cursor:pointer;
`

const Error = styled.div`
margin-top:20px;
display:flex;
justify-content:center;
font-size:18px;
color:red;
`
const Register = () => {
   const dispatch = useDispatch();
   const history = useHistory()
    const [name,setusername] = useState('')
   const [email,setemail] = useState('')
   const [password,setPassword] = useState('')
   const [passwordConfirm,setPasswordConfirm] =  useState('')
  
  const ClickHandler = (e) =>{
    e.preventDefault();
    const user = {
      name,
      email,
      password,
      passwordConfirm
    }
    dispatch(registerStart());
    const registeruser = async () =>{
    try{
     const res = await publicRequest.post('/users/signup',user)
       dispatch(registerSuccess(res.data))
      
       localStorage.setItem("userInfo",JSON.stringify(res.data));
      history.push('/')
    }catch(err){
       dispatch(registerFaliure())
   }
    
  }
  registeruser()
setPassword("");
setPasswordConfirm("");
setemail("");
setusername("")
  }
  const  {isFetching,error} = useSelector((state) =>state.registeruser)
  return (
       <Container>
           <Title>Create your account</Title>
          <Wrapper>
              
          <Form>
          <Input placeholder="username" value={name} onChange={(e) =>setusername(e.target.value)}/>
        
          <Input placeholder="email" value={email} type="email" onChange={(e) =>setemail(e.target.value)}/>
        
          <Input placeholder="password" value={password} type="password" onChange={(e)=>setPassword(e.target.value)}/>
        
          <Input placeholder="Confirm password" value={passwordConfirm} type="password" onChange={(e)=>setPasswordConfirm(e.target.value)} />
         {error && <Error>Please fill valid data!</Error>}
          <Button disabled={isFetching}  onClick={ClickHandler}>Submit</Button>
          
        </Form>
          </Wrapper>
       </Container>
    )
}

export default Register
