import React, {useState} from "react";
import {connect} from "react-redux";
import styled from "styled-components";
import NavBar from "../NavBar";
import WishBox from "../WishBox";
import WishCard from "../WishCard";
import {BaseInput} from "../../style/GlobalInputs";

const PageContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: auto;
`

const InnerPage = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 0 1rem;
  
  
`

const LeftPage = styled.div`
  //width: 30%;
  display: flex;
`

const RightPage = styled.div`
  //width: 70%;
  width: 50%;

`
const FilterInput = styled(BaseInput)`
  border: 2px solid ${props => props.theme.fairyGreen};
  border-radius: 5px;
  width: 100%;
`

const FilterDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  label{
    //font-weight: bold;
    font-size: 1.4rem;
    margin-right: 0.4rem;
  }
`

const Dropdown = styled.div`
  
`
const DropBtn = styled.button`
margin-left: 0.4rem;
   background-color: ${props => props.theme.fairyGreen};
   border-radius: 5px;
  color: white;
  padding: 0.7rem 1rem;
  font-size: 16px;
  border: none;
  cursor: pointer;
  :hover,:focus{
    background-color: #2980B9;
  }
  
`

const DropContent = styled.div`
  
  display: ${props => (props.active? "block;": "none;")};
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  a{
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
      :hover {background-color: #ddd;}
  }
`


const Home = ({wishReducer: {wishes}}) => {
    const [search, setSearch] = useState("")
    const [showDrop, setShowDrop] = useState(false)
    console.log(showDrop);

    const handleFilterWishes = () => {
        return wishes.map((wish) => {
            if (
                wish.name.toLowerCase().includes(search.toLowerCase()) ||
                wish.companyName.toLowerCase().includes(search.toLowerCase()) ||
                wish.content.toLowerCase().includes(search.toLowerCase())
            ) {
                return (
                    <WishCard key={wish.id} wish={wish}/>
                );
            }
        });
    }
    const handleSearch = e => {
        const value = e.currentTarget.value;
        setSearch(value);
    }


    return (
        <PageContainer>
            <NavBar/>
            <InnerPage>
                <LeftPage>
                    <WishBox/>
                </LeftPage>
                <RightPage>
                    <FilterDiv>
                        <label htmlFor="search">Search:</label>
                        <FilterInput onChange={handleSearch} value={search} id="search"/>
                        <Dropdown>
                            <DropBtn onClick={e => setShowDrop(!showDrop)}>Dropdown</DropBtn>
                            <DropContent active={showDrop}>
                                <a href="#home">Top</a>
                                <a href="#about">New</a>
                                <a href="#contact">Trending</a>
                            </DropContent>
                        </Dropdown>
                    </FilterDiv>
                    <div>
                        {wishes ? handleFilterWishes() : null}
                    </div>
                </RightPage>

            </InnerPage>
        </PageContainer>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        wishReducer: state.wishReducer,
    };
};

export default connect(mapStateToProps)(Home);
