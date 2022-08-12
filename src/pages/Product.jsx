
import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcement from "../Components/Announcement"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import Newsletter from "../Components/Newsletter"
import mobile from '../Responsive';

const Container = styled.div`
    
`
const Wrapper = styled.div`
 padding   : 50px;
 display: flex;
 ${mobile({padding:"10px",flexDirection:"column"})};
`
const ImgContainer = styled.div`
   flex :1 ;
`
const Image = styled.img`
   width: 100%;
   height: 90vh;
   //object-fit: cover;
   ${mobile({height:"40vh"})};
`
const InfoContainer = styled.div`
    flex: 1;
    padding:  0px 50px;
    ${mobile({padding:"10px"})};
`
const Title = styled.h1`
   font-weight :200 ;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const Price = styled.span`
    font-weight: 100;
    font-size:40px ;
`
const FilterContainer=styled.div`
 width:50%;
 margin: 30px 0px;
 display:flex;
 justify-content   :space-between ;
 ${mobile({width:"100%"})};
`
const Filter=styled.div`
   display : flex;
   align-items: center;
`
const FilterTitle=styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor=styled.div`
    width:20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props)=>props.color};
    margin: 0px 5px;
    cursor: pointer;
`
const FilterSize=styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption=styled.option`
    
`
const AddContainer=styled.div`
 width: 50%;
 display   :flex ;
 align-items: center;
 justify-content: space-between;
 ${mobile({width:"100%"})};
`
const AmountContainer=styled.div`
    display   :flex ;
 align-items: center;
 font-weight: 700;
`
const Amount=styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display   :flex ;
 align-items: center;
 justify-content: center;
 margin: opx 5px;
`
const Button=styled.button`
   padding: 15px;
   border :2px solid teal ;
   background-color: white;
   cursor: pointer;
   font-weight: 500;

   &:hover{
    background-color: lightgray;
   }
`

const Product = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <ImgContainer>
          <Image src="https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aGFuZGJhZ3xlbnwwfHwwfHw%3D&w=1000&q=80"/> 
        </ImgContainer>
        <InfoContainer>
            <Title>Leather PURSE</Title>
            <Desc>Lavie Beech hand bag is a stylish bag for women who love styling up. It is durable, versatile and lightweight. It is available in classic black and gold color. Made from premium man-made leather, this hand bag has the latest pebble texture and premium gold toned metal hardware.
                 Dimension: 27.5 cm in length x 9 cm in width x 19.5 cm in height</Desc>
            <Price>₹1395.00 </Price>
            <FilterContainer>
            <Filter>
            <FilterTitle>Color</FilterTitle>
            <FilterColor color="black"/>
            <FilterColor color="grey"/>
            <FilterColor color="blue"/>
            </Filter>
            <Filter>
            <FilterTitle>Size</FilterTitle>
            <FilterSize>
            <FilterSizeOption>S</FilterSizeOption>
            <FilterSizeOption>M</FilterSizeOption>
            <FilterSizeOption>L</FilterSizeOption>
            </FilterSize>
            </Filter>
            </FilterContainer>
            <AddContainer>
                <AmountContainer>
                    <Remove/>
                    <Amount>1</Amount>
                    <Add/>
                </AmountContainer>
                <Button>ADD TO CART</Button>
            </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default Product
