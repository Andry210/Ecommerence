import React,{useState} from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { loginSuccess } from './../redux/userRedux';
import {loginStart,loginFaliure} from './../redux/userRedux'
import {publicRequest} from './../RequestMethod'
import { useHistory } from 'react-router-dom'
import { mobile,smallTablet,largeTablet } from '../responsive';
const Container = styled.div`
`
const Wrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
`
const Title = styled.h1`
text-align:center;
font-size:45px;
letter-spacing:7px;
font-weight:100;
margin-top:30px;
padding-top:30px;
${smallTablet({fontSize:"30px",letterSpacing:"3px"})}
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
cursor:pointer;
  &:disabled{
    background-color:blur;
    cursor:not-allowed
  }
  ${smallTablet({width:"40%"})};
  ${mobile({width:"50%"})}
`
const LinkGroup = styled.div`
display:flex;
justify-content:center;
letter-spacing:2px;
${smallTablet({flexDirection:"column",justifyContent:"center",alignItems:"center"})}
`
const Span = styled.span`

`
const Linkk = styled.span`
color:blue;
cursor:pointer;

`
const Error = styled.div`
margin-top:20px;
`
const Login = () => {
  const [email,setemail] = useState('')
  const [password,setPassword] = useState('')  
  const dispatch = useDispatch()  
  const history = useHistory();
  const ClickHandler = (e) =>{
    e.preventDefault();
   // Loginuser(dispatch,{email,password})
   const user = {
     email,
     password
   }
   dispatch(loginStart());
   const loginuser = async() =>{
    try{
      const res = await publicRequest.post('/users/login',user)
      dispatch(loginSuccess(res.data))
    
      localStorage.setItem("userInfo",JSON.stringify(res.data.user._id));
      history.push('/')
  }catch(err){
      dispatch(loginFaliure())
  }
    }
  loginuser()
  setPassword("");
    setemail("");
  }
 const  {isFetching,error} = useSelector((state) =>state.user)
 return (
      <Container>
          <Title>Sign in</Title>
          <Wrapper>
              
          <Form>
          <Input placeholder="email"  type="email"
          value={email}
          onChange={(e) =>setemail(e.target.value)}/>
          
          <Input placeholder="password"
          type="password" value={password}
          onChange={(e)=> setPassword(e.target.value)}/>
          {error && <Error>! invalid email or password</Error>}
          
          <Button onClick={ClickHandler} disabled={isFetching}>Submit</Button>
          <LinkGroup>
          <Span>Need to register?</Span>
         <Link to="/signin" style={{textDecoration : "none"}}>
          <Linkk style={{marginLeft:"15px"}}>Click Here</Linkk>
          </Link> 
            </LinkGroup>
        </Form> 
          </Wrapper>
      </Container>
    )
}

export default Login
