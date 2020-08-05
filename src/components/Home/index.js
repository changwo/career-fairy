import React from "react";
import {connect} from "react-redux";
import styled from "styled-components";
import NavBar from "../NavBar";
import WishBox from "../WishBox";

const PageContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
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
  border: 1px solid red;
`

const RightPage = styled.div`
width: 65%;
  border: 1px solid blue;
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
