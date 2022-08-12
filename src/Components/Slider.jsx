import styled from "styled-components"
import {ArrowLeftOutlined,ArrowRightOutlined } from '@material-ui/icons';
import { useState } from "react";
import { sliderItems} from "../data";
import mobile from "../Responsive";
import { Link } from "react-router-dom";
const Container=styled.div`
width:100%; 
height:100vh;
display:flex;
position:relative;
overflow: hidden;
background-color:transparent;
${mobile({display:"none"})};
`
const Arrow=styled.div`
width:50px; 
height:50px;
background-color:#fff7f7;
border-radius:50%;
display: flex;
 align-items:center;
 justify-content:center;
position: absolute;
top:0;
bottom:0;
left:${props=>props.direction==="left" && "10px"};
right:${props=>props.direction==="right" && "10px"};
margin:auto;
cursor:pointer;
opacity:0.5;
z-index: 2;
 `;
 const Wraper=styled.div`
 height:100%;
 display:flex;
 transition: all 1.5s ease;
 transform: translateX(${props=>props.slideIndex*-100}vw);

 `;
 const Slide=styled.div`
 width:100vw;
 height:100vh;
 display:flex;
 align-items:center;
 background-color: #${props=> props.bg};
 `;

 const ImgContianer=styled.div`
 height:100%;
 flex:1;
 `;
 const Image=styled.img`
 height:80%;
 width:70%;
 margin-left: 50px;
 `;
 const Info=styled.div`
 flex:1;
padding:50px;
margin-right: 25px;
 `;
 const Title=styled.h1`
 font-size:70px;
 `;
 const Desc=styled.p`
 font-size:20px;
 font-weight:500;
 margin:50px 0px ;
 letter-spacing:3;
 `;
 const Button=styled.button`
 padding:10px;
 font-size:20px;
 background-color:transparent;
 cursor:pointer;
 `;
const Slider = () => {
    const [slideIndex,setSlideIndex] = useState(0);
  const handleClick=(direction)=>{
   if(direction==="left"){
    setSlideIndex(slideIndex>0?slideIndex-1:2);}
    else{setSlideIndex(slideIndex<2?slideIndex+1:0);}
  };
  
    return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
           <ArrowLeftOutlined/>
        </Arrow>
        <Wraper slideIndex={slideIndex} >
            {sliderItems.map((item)=>(
                
            <Slide bg={item.bg} key={ item.id}>
                <ImgContianer>
                    <Image src={item.img}/>
                </ImgContianer>
                <Info>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <Link to={`/Products/${item.cat}`}>
                    <Button>SHOW NOW</Button>
                    </Link>
                </Info>
            </Slide >))}
              
        </Wraper>
        <Arrow  direction="right"onClick={()=>handleClick("right")}>
           <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider
