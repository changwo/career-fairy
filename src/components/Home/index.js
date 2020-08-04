import React from "react";
import {connect} from "react-redux";




const Home = (props) => {



    return(
        <h1>HOME</h1>
    )
}

const mapStateToProps = (state) => {
    return {
        authReducer: state.authReducer,
        errorReducer: state.errorReducer,
    };
};

export default connect(mapStateToProps)(Home);
