import React, {useState} from "react";
import styled from "styled-components";
import logoPlaceHolder from '../../assets/logo-placeholder.png'
import logoPlaceHolder2 from '../../assets/logo-placeholder2.png'
import {BaseButton} from "../../style/GlobalButtons";
import {rand, smallRand} from "../../sampleData";
import {useDispatch} from "react-redux";
import {addWish} from "../../store/actions";
import {BaseInput} from "../../style/GlobalInputs";
import Fade from "react-reveal/Fade";

const shortid = require("shortid");


const Container = styled.form`
  background-color: white;
  border: 1px solid ${props => props.theme.fairyGreenLight};
  color: white;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.05), 0 0 1px 0 rgba(0,0,0,0.2);
  padding: 20px;
  border-radius: 10px;
  width: 350px;
  height: 540px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
  h1{
    font-size: 25px;
    color: ${props => props.theme.fairyGreen};
  }
`
const BaseInputArea = styled.div`
   width: 100%;
   background-color: white;
   border-radius: 5px;
   border: 2px solid #bebebe;
   padding: 10px;
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
`

const MiddleArea = styled(BaseInputArea)`
   height: 120px;
     label {
    color: #999999;
    font-size: 20px;
  }
`

export const AboutCompany = styled.textarea`
  border: none;
  width: 100%;
  height: 100%;
  background-color: transparent;
  resize: none;
  outline: none;
  padding-top: 1rem;
`;

const LabelDiv = styled.div`
  height: 170px;
  width: 150px;
  color: white;
  border: 2px solid #bebebe;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  font-weight: bold;
  border-radius: 5px;
`

const UploadLabel = styled.label`
font-size: 1rem;
color: white;
text-align: center;
background-color: ${(props) => props.theme.fairyGreen};
  width: 100%;
      border: 1px solid ${props => props.theme.fairyGreen};
   :hover,:focus{
    cursor: pointer;
    background-color: white;
    color:${props => props.theme.fairyGreen};
  }
`
const LogoDiv = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
    background-size: contain;

  
`


const CompInput = styled(BaseInput)`
  padding: 0;
  margin-top: 10px;
`


const WishBox = (props) => {
    const dispatch = useDispatch()
    const [wishData, setWishData] = useState({
        companyName: "",
        content: "",
        logo: null,
    })

    const submitWish = (e) => {
        e.preventDefault();
        console.log("in the submit!")
        const newWish = {
            id: shortid.generate(),
            name: "Max Voss",
            created: new Date(),
            amount_of_hearts: smallRand(),
            avatar: `https://i.pravatar.cc/150?img=${rand()}`,
            logo: wishData.logo ? URL.createObjectURL(wishData.logo) : logoPlaceHolder2,
            companyName: wishData.companyName,
            content: wishData.content,
            comments: []
        }
        dispatch(addWish(newWish))
        setWishData({
            companyName: "",
            content: "",
            logo: null,
        })
    }

    const onChangeHandler = (event, property) => {
        const value = event.currentTarget.value;
        setWishData({...wishData, [property]: value});
    };

    const logoSelectHandler = e => {
        if (e.target.files[0]) {
            setWishData({...wishData, logo: e.target.files[0]})
        }
    }

    return (
        <Fade bottom>
            <Container onSubmit={submitWish}>
                <h1>Wish for a Company</h1>
                <TopArea>
                    <label htmlFor="name">Company Name:</label>
                    <CompInput required onChange={(e) => onChangeHandler(e, "companyName")} id="name"/>
                </TopArea>
                <MiddleArea>
                    <label htmlFor="content">{wishData.companyName ? `Why ${wishData.companyName}?` : null}</label>
                    <AboutCompany required onChange={(e) => onChangeHandler(e, "content")} id="content" rows={15}/>
                </MiddleArea>
                <LabelDiv>
                    <LogoDiv
                        style={{'backgroundImage': `url("${wishData.logo ? URL.createObjectURL(wishData.logo) : logoPlaceHolder2}")`}}/>
                    <UploadLabel htmlFor="logo">{wishData.logo ? "CHANGE" : "UPLOAD"}</UploadLabel>
                    <FileInput onChange={logoSelectHandler} type="file" id="logo"/>
                </LabelDiv>
                <CreateButton>CREATE</CreateButton>
            </Container>
        </Fade>
    )
}


export default WishBox
