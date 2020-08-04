import React from "react";
import {connect} from "react-redux";
import styled from "styled-components";
import NavBar from "../NavBar";

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
  
  
`

const LeftPage = styled.div`
  width: 30%;
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
