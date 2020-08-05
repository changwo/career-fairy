import React from "react";
import {connect} from "react-redux";
import styled from "styled-components";
import NavBar from "../NavBar";
import WishBox from "../WishBox";
import WishCard from "../WishCard";
import {sampleWishes} from "../../sampleData";

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
  width: 65%;
`


const Home = ({videoReducer: {data}}) => {


    return (
        <PageContainer>
            <NavBar/>
            <InnerPage>
                <LeftPage>
                    <WishBox/>
                </LeftPage>
                <RightPage>
                    {sampleWishes.map(wish => {
                        return <WishCard key={wish.id} wish={wish}/>
                    })}

                </RightPage>

            </InnerPage>
        </PageContainer>
    )
}

const mapStateToProps = (state) => {
    return {
        videoReducer: state.videoReducer,
    };
};

export default connect(mapStateToProps)(Home);
