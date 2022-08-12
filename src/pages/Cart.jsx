import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcement from "../Components/Announcement"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import mobile from '../Responsive';

const Container = styled.div`

`
const Wrapper = styled.div`
padding: 20px;
${mobile({padding:"10px"})};
`
const Title = styled.h1`
font-weight: 300;
text-align: center;
`
const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`
const TopButton=styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type==="filled"&&"none"};
    background-color: ${props=>props.type==="filled"?"black":"transparent"};
    color: ${props=>props.type==="filled"&&"white"};
`

const TopTexts = styled.div`
${mobile({display:"none"})};
`
const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 10px;
`
const Bottom = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection:"column"})};
`
const Info = styled.div`
flex: 3;
`
const Product=styled.div`
 display: flex;
 justify-content: space-between;   
 ${mobile({flexDirection:"column"})};
`
const ProductDetail=styled.div`
    flex: 2;
    display: flex;
`
const Image=styled.img`
  width  :200px ;
  cursor: pointer;
`
const Detail=styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName=styled.span`
    
`
const ProductId=styled.span`
    
`
const ProductColor=styled.div`
  width: 20px;
  height: 20px;
  border-radius  :50% ;
  background-color: ${props=>props.color};
`
const ProductSize=styled.span`
    
`
const PriceDetail=styled.div`
  flex:1; 
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction :column ;

`
const ProductAmountContainer=styled.div`
   display: flex;
   align-items: center; 
   margin-bottom: 20px;
`
const ProductAmount=styled.div`
    font-style: 24px;
    margin: 5px;
    ${mobile({margin:"5px 15px"})};
`
const ProductPrice=styled.div`
    font-size: 30px;
    font-weight: 300;
    ${mobile({marginBottom:" 15px"})};
`
const Hr=styled.hr`
background-color: #eee;
border: none;
height: 1px;
`
const Summary = styled.div`
flex:1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 50vh;
`
const SummeryTitle = styled.h1`
font-weight: 200;
`
const SummeryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props=>props.type==="Total" && "500"};
font-size: ${props=>props.type==="Total" && "24px"};
`
const SummeryItemText = styled.span`

`
const SummeryItemPrice = styled.span`

`
const SummaryButton = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
cursor: pointer;
`
const Cart = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
                <TopText>Shopping Bag(2)</TopText>
                <TopText>Your Wishlist(0)</TopText>
            </TopTexts>
            <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
            <Info>
                <Product>
                    <ProductDetail>
                        <Image src="https://m.media-amazon.com/images/I/514j4FdjS+L.jpg"/>
                        <Detail>
                            <ProductName><b>Product: </b>Fristo Women's Handbag (FRB-315_Red)</ProductName>
                            <ProductId><b>ID: </b>95214782</ProductId>
                            <ProductColor color="red"/>
                            <ProductSize><b>Size: </b>31 x 14 x 21 cm</ProductSize>
                        </Detail>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <Add />
                            <ProductAmount>1</ProductAmount>
                            <Remove/>
                        </ProductAmountContainer>
                        <ProductPrice>₹ 1999.00</ProductPrice>
                    </PriceDetail>
                </Product>
                <Hr/>
                <Product>
                    <ProductDetail>
                        <Image src="https://www.bigbasket.com/media/uploads/p/l/40227887_1-lakme-compact-face-it-matte-finish-powder-for-instant-glow.jpg"/>
                        <Detail>
                            <ProductName><b>Product: </b>LAKMÉ Face It Compact, Pearl, 9 g</ProductName>
                            <ProductId><b>ID: </b>5484325</ProductId>
                            
                            <ProductSize><b>Size: </b>Small</ProductSize>
                        </Detail>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>2</ProductAmount>
                            <Remove/>
                        </ProductAmountContainer>
                        <ProductPrice>₹ 288.00</ProductPrice>
                    </PriceDetail>
                </Product>
            </Info>
            <Summary>
                <SummeryTitle>ORDER SUMMARY</SummeryTitle>
                <SummeryItem>
                    <SummeryItemText>Subtotal</SummeryItemText>
                    <SummeryItemPrice>₹ 2287.00</SummeryItemPrice>
                </SummeryItem>
                <SummeryItem>
                    <SummeryItemText>Estimated Shipping</SummeryItemText>
                    <SummeryItemPrice>₹ 200.00</SummeryItemPrice>
                </SummeryItem>
                <SummeryItem>
                    <SummeryItemText>Shipping Discount</SummeryItemText>
                    <SummeryItemPrice>₹ -200.00</SummeryItemPrice>
                </SummeryItem>
                <SummeryItem type="Total">
                    <SummeryItemText >Total</SummeryItemText>
                    <SummeryItemPrice>₹ 2287.00</SummeryItemPrice>
                </SummeryItem>
                <SummaryButton>CHECKOUT NOW</SummaryButton>
            </Summary>
        </Bottom>
      </Wrapper>
      <Footer/>
    </Container>
  )
}

export default Cart
