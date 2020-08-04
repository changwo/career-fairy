import React from "react";
import {connect} from "react-redux";




const Home = ({videoReducer:{data}}) => {



    return(
        <h1>HOME</h1>
    )
}

const mapStateToProps = (state) => {
    return {
        videoReducer: state.videoReducer,
    };
};

export default connect(mapStateToProps)(Home);
