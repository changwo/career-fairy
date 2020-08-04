import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #00d6ab;
  color: white;
  padding: 20px;
  border-radius: 10px;
  width: 350px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  h1{
    font-size: 25px;
  }
`
const BaseInputArea = styled.div`
   width: 100%;
   height: 150px;
   background-color: white;
   border-radius: 5px;
   border: 2px solid #868686;
`

const AreaOne = styled(BaseInputArea)`
  margin-top: 10px;
  h1{
  
  }
`
const BaseInput = styled.input`
   padding: 10px;
   width: 100%;
`


const WishBox = (props) => {



    return(
        <Container>
            <h1>Wish for a Company</h1>
            <AreaOne>
                <h1>Company Name</h1>
            </AreaOne>
        </Container>
    )
}

export default WishBox