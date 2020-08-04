import React, {useState} from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 500px;
`

const HeartDiv = styled.div`
   border-radius: 5px;
   background-color: limegreen;
`

const WishItem = (props) => {
    const [showComments, setShowComments] = useState(false);

    return (
        <Container>
            <HeartDiv>
                <span>&#9825;</span>
            </HeartDiv>
        </Container>
    )
}

export default WishItem