import React from "react";
import styled from "styled-components";
import upload from '../../assets/upload.png'

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
  justify-content: space-between;
  
  h1{
    font-size: 25px;
  }
`
const BaseInputArea = styled.div`
   width: 100%;
   //height: 110px;
   background-color: white;
   border-radius: 5px;
   border: 2px solid #868686;
   padding: 10px;
`

const Upload = styled.img``

const FileInput = styled.input`
  display: none;
`

const TopArea = styled(BaseInputArea)`
  margin-top: 10px;
  
  label {
    color: #999999;
    font-size: 20px;
  }
`

const MiddleArea = styled(BaseInputArea)`
   height: 200px;
`

const BottomArea = styled.div`
   height: 100px;
      width: 100%;
      padding: 10px;
      button{
        
      }

`
const BaseInput = styled.input`
   padding: 10px;
   width: 100%;
   outline: transparent;
   border: none;
`
const CompInput = styled(BaseInput)`
  padding: 0;
  margin-top: 10px;
`


const WishBox = (props) => {



    return(
        <Container>
            <h1>Wish for a Company</h1>
            <TopArea>
                <label htmlFor="name">Company Name:</label>
                <CompInput id="name"/>
            </TopArea>
            <MiddleArea>

            </MiddleArea>
            <BottomArea>
                <Upload src={upload}/>
                <FileInput/>
            </BottomArea>
        </Container>
    )
}

export default WishBox