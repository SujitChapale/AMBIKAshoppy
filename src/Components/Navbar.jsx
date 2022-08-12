import { Badge } from '@material-ui/core';
import { Search,ShoppingCartSharp } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import mobile from '../Responsive';
import { Link } from "react-router-dom";

const Container =  styled.div`
    height:60px;
    ${mobile({height:"50px"})};
`;
const Wraper =  styled.div`
 padding : 10px 20px;
 display: flex;
 align-items:center;
 justify-content:space-between;
 ${mobile({padding:"10px 0px"})};
`   
const Left =  styled.div` 
 flex:1;
 display:flex;
 align-items:center;
`
const Center =  styled.div`
 flex:1;
 text-align:center;
 
`   
const Right =  styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
${mobile({flex:2,justifyContent:"center"})};
` 
const Language =  styled.div`
font-size: 14px;
display:flex;
align-items:center;
cursor: pointer;
${mobile({display:"none"})};
`   
const SearchContainer = styled.div`
 border : 0.5px solid lightgrey;
 display:flex;
 align-items:center;
 margin-left:25px;
 padding:5px;
 
`
const Input=styled.input`
border:none;
${mobile({width:"50px",})};
`
const Logo=styled.h1`
 font-weight: bold;
 
 ${mobile({fontSize:"24px"})};

`
const MenuItem =  styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
${mobile({fontSize:"12px",marginLeft:"10px"})};
`

const Navbar = () => {
  return (
   
    <Container>
      <Wraper>
        <Left>
          <Language>IN</Language>
          <SearchContainer>
            <Input placeholder="Search"/>
            <Search style={{color:"grey",fontSize:16}}/>
          </SearchContainer>
          </Left>
        <Center><Logo>AMBIKA</Logo></Center>
        <Right>
          <Link to="/Register">
          <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to="/Login">
          <MenuItem>SIGN IN</MenuItem>
          </Link>
          <Link to="/Cart">
          <MenuItem>
          <Badge badgeContent={3} color="primary">
            <ShoppingCartSharp/>
          </Badge> 
          </MenuItem>
          </Link>
          </Right>    
        </Wraper>
    </Container>
  )
}

export default Navbar
