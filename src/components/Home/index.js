import React, {useState} from "react";
import {connect} from "react-redux";
import styled from "styled-components";
import NavBar from "../NavBar";
import WishBox from "../WishBox";
import WishCard from "../WishCard";
import {sampleWishes} from "../../sampleData";
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
  justify-content: space-between;
  padding: 0 1rem;
  
  
`

const LeftPage = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
`

const RightPage = styled.div`
  width: 70%;
`
const FilterInput = styled(BaseInput)`
  border: 1px solid ${props => props.theme.fairyGreen};
  border-radius: 5px;
`

const FilterDiv = styled.div`
  display: flex;
`


const Home = ({wishReducer: {wishes}}) => {
    console.log(wishes);


    return (
        <PageContainer>
            <NavBar/>
            <InnerPage>
                <LeftPage>
                    <WishBox/>
                </LeftPage>
                <RightPage>
                    <FilterDiv>
                        <FilterInput/>
                    </FilterDiv>
                    <div>
                        {wishes ? wishes.map(wish => {
                            return <WishCard key={wish.id} wish={wish}/>
                        }) : null}
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
