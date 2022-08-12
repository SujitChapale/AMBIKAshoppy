import styled from "styled-components"
import mobile from '../Responsive';
const Container=styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)
),
url(https://thumbs.dreamstime.com/b/happy-brunette-woman-holding-shopping-bags-portrait-happy-smiling-brunette-woman-holding-shopping-bags-standing-against-light-184186803.jpg),
 center;
 display: flex;
 align-items: center;
 justify-content: center;
`
const Wrapper=styled.div`
width: 40%;
padding: 20px;
background-color: white;
${mobile({width:"75%"})};
`
const Title=styled.h1`
font-style: 24px;
font-weight: 300;
`
const Form=styled.form`
display: flex;
flex-wrap: wrap;
`
const Input=styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
`
const Agreement=styled.span`
font-style: 12px;
margin: 20px 0px;
`
const Button=styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
`

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
            <Input placeholder="Name"/>
            <Input placeholder="Last Name"/>
            <Input placeholder="Username"/>
            <Input placeholder="Email"/>
            <Input placeholder="Password"/>
            <Input placeholder="Confirm Password"/>
            <Agreement>By creating an account, I consent to the processing my personal data in accordance with the <b>PRIVACY POLICY</b></Agreement>
            <Button>CREATE</Button>
        </Form>

      </Wrapper>
    </Container>
  )
}

export default Register