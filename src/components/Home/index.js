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
   margin-right: 0.4rem;
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
   
   background-color: ${props => props.theme.fairyGreen};
   border-radius: 5px;
  color: white;
  min-width: 160px;
  padding: 0.7rem 1rem;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid ${props => props.theme.fairyGreen};
  :hover,:focus{
    background-color: white;
    color:${props => props.theme.fairyGreen};
    border: 1px solid ${props => props.theme.fairyGreen};
  }
  
`

const DropContent = styled.ul`
  
  display: ${props => (props.active ? "block;" : "none;")};
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  overflow: auto;
  border-radius: 5px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  z-index: 1;
  li{
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
      :hover {
      background-color: ${props => props.theme.fairyGreen};
      color: white;
      cursor: pointer;
      }
  }
`


const Home = ({wishReducer: {wishes}}) => {
    const [search, setSearch] = useState("")
    const [showDrop, setShowDrop] = useState(false)
    const [sortBy, setSortBy] = useState("")

    const handleSelect = (e) => {
        const value = e.currentTarget.id;
        setShowDrop(false)
        setSortBy(value)
    }

    const dynamicSort = (property) => {
        let sortOrder = 1;
        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return (a, b) => {
            /* next line works with strings and numbers,
             * and you may want to customize it to your needs
             */
            let result
            if (property === "comments") result = (a[property].length > b[property].length) ? -1 : (a[property].length < b[property].length) ? 1 : 0;
            else result = (a[property] > b[property]) ? -1 : (a[property] < b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }


    const handleFilterWishes = () => {
        let newWishes = wishes
        if (sortBy === "Top") newWishes.sort(dynamicSort("amount_of_hearts"))
        if (sortBy === "New") newWishes.sort(dynamicSort("created"))
        if (sortBy === "Trending") newWishes.sort(dynamicSort("comments"))

        return newWishes.map((wish) => {
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
                            <DropBtn
                                onClick={e => setShowDrop(!showDrop)}>{sortBy.length ? sortBy : "Sort by"}</DropBtn>
                            <DropContent active={showDrop}>
                                <li onClick={handleSelect} id="Top">Top</li>
                                <li onClick={handleSelect} id="New">New</li>
                                <li onClick={handleSelect} id="Trending">Trending</li>
                                <li onClick={handleSelect} id="All">All</li>
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
    return {
        wishReducer: state.wishReducer,
    };
};

export default connect(mapStateToProps)(Home);
