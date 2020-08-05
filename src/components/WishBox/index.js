import React from "react";
import styled from "styled-components";
import upload from '../../assets/upload.png'
import {BaseButton} from "../../style/GlobalButtons";

const Container = styled.div`
  background-color: ${(props) => props.theme.fairyGreen};
  color: white;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.05), 0 0 1px 0 rgba(0,0,0,0.2);
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
   background-color: white;
   border-radius: 5px;
   border: 2px solid #bebebe;
   padding: 10px;
`

const Upload = styled.img`
  cursor: pointer;
`

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
const CreateButton = styled(BaseButton)`
  border: 1px solid white;
`

const MiddleArea = styled(BaseInputArea)`
   height: 200px;
     label {
    color: #ffffff;
    font-size: 20px;
  }
`

export const AboutCompany = styled.textarea`
  border: none;
  width: 100%;
  height: 100%;
    background-color: transparent;
    resize: none;
    outline: none
  
`;

const BottomArea = styled.div`
   height: 100px;
   width: 100%;
   padding: 10px;
   display: flex;
   justify-content: space-between;
   align-items: center;
`

const LabelDiv = styled.div`
  height: 58px;
    padding: 10px 20px;
  background-color: ${(props) => props.theme.fairyGreen};
  color: white;
  display: flex;
  align-items: center;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid white;
`

const UploadLabel = styled.label`
font-size: 20px;
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


    return (
        <Container>
            <h1>Wish for a Company</h1>
            <TopArea>
                <label htmlFor="name">Company Name:</label>
                <CompInput id="name"/>
            </TopArea>
            <MiddleArea>
                <label htmlFor="name">Why Company name?</label>
                <AboutCompany rows={15}/>
            </MiddleArea>
            <BottomArea>
                <LabelDiv>
                    <Upload src={upload}/>
                    <UploadLabel htmlFor="logo">LOGO</UploadLabel>
                    <FileInput type="file" id="logo"/>
                </LabelDiv>

                <div>
                    <CreateButton>
                        CREATE<br/>WISH
                    </CreateButton>
                </div>
            </BottomArea>
        </Container>
    )
}

export default WishBox