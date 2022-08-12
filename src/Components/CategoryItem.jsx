
import styled from "styled-components"
import mobile from '../Responsive';
import { Link } from "react-router-dom";

const Container=styled.div`
flex:1;
margin :3px;
height : 70 vh;
object-fit:  cover;
position: relative;
`;

const Image=styled.img`
width: 100%;
height: 100%;

${mobile({height:"30vh"})};

`
const Info=styled.div`
position: absolute;
top:0;
bottom: 0;
height:100%;
width:100%;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;

`
const Title=styled.h1`
color:white;
margin-bottom: 20px;

`
const Button=styled.button`
 border: none;
 padding: 10px;
 background-color: white;
 color: grey;
 cursor:pointer;
 font-weight: 600;
`

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Link to={`/Products/${item.cat}`}>
      <Image src={item.img}/>
      <Info>
        <Title>{item.title}</Title>
        <Button> SHOP NOW </Button>
      </Info>
      </Link>
    </Container>
  )
}

export default CategoryItem
