import { Facebook, Instagram, Mail, Phone, Pinterest, Room, Twitter } from "@material-ui/icons"
import styled from "styled-components"
import mobile from '../Responsive';

const Container = styled.div`
display: flex;
background-color: grey;
${mobile({flexDirection:"column"})};
`
const Left = styled.div`
flex:1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Logo=styled.h1`

`
const Desc=styled.p`
margin: 20px;
`
const SocialContainer=styled.div`
display: flex;
`
const SocialIcons=styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color:white;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`
const Center = styled.div`
flex:1;
padding: 20px;
${mobile({display:"none"})};
`
const Title=styled.h3`
margin-bottom: 30px;
`
const List=styled.ul`
margin:0;
padding:0;

list-style: none;
display: flex;
flex-wrap: wrap;
`
const ListItems=styled.li`
width:50%;
margin-bottom:10px;
`
const Right = styled.div`
flex:1;
padding: 20px;
${mobile({backgroundColor:"#eee"})};
`
const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`
const Payment = styled.img`
width:50%;
`


const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>AMBIKA</Logo>
        <Desc>AMBIKA is one of the exclusive online shopping sites in India for where fashion is accessible to all women. Check out our new arrivals to view the latest Imitation Jwellary Collection, Purses and Cosmetics in the market. You can get your hands on the trendiest style every season in western wear. You can also avail the best of ethnic fashion during all Indian festive occasions.</Desc>
        <SocialContainer>
        <SocialIcons color="EB5999">
            <Facebook/>
        </SocialIcons>
        <SocialIcons color="E4405F">
            <Instagram/>
        </SocialIcons>
        <SocialIcons color="55ACEE">
            <Twitter/>
        </SocialIcons>
        <SocialIcons color="E60023">
            <Pinterest/>
        </SocialIcons>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
            <ListItems>Home</ListItems>
            <ListItems>Cart</ListItems>
            <ListItems>Imitation Jwellary</ListItems>
            <ListItems>Handbags & Purses</ListItems>
            <ListItems>Cosmetics</ListItems>
            <ListItems>My Account</ListItems>
            <ListItems>Order Tracking</ListItems>
            <ListItems>Wishlist</ListItems>
            <ListItems>Terms</ListItems>
        </List>

      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem><Room style={{marginRight:"10px"}}/>
            Ambika Laddies Shoppy,Opp.Saileela Appart.,Main road Uchgaon,kolhaur,Maharashtra 416005.
        </ContactItem>
        <ContactItem><Phone style={{marginRight:"10px"}}/>
            +91 9356319807
        </ContactItem>
        <ContactItem><Mail style={{marginRight:"10px"}}/>
            Conact@AMBIKAshoppy.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
    </Container>
  )
}

export default Footer
