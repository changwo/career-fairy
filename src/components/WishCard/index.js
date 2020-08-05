import React, {useState} from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import {DefaultAvaSmall, WishHeartImg} from "../../style/GlobalImages";
import {WishContainer} from "../../style/GlobalContainers";
import Carousel from "../Carousel";
import Comments from "./Comments";

const shortid = require("shortid");

const rand = () => {
    return Math.floor(Math.random() * 100) + 1
}

const smallRand = () => {
    return Math.floor(Math.random() * 40) + 1
}

const Container = styled.div`
  width: 500px;
`

const HeartDiv = styled.div`
   border-radius: 5px;
   background-color: limegreen;
`



const DefaultDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WishNameTimeDiv = styled(DefaultDiv)`
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  grid-area: nameTime;
`;

const WishTextDiv = styled(DefaultDiv)`
  justify-content: flex-start;
  padding: 0 1rem 0 1rem;
  grid-area: c;
  p{
    white-space: pre-line;
  }
`;

const WishImageDiv = styled(DefaultDiv)`
  grid-area: i;

`;

const WishLikeShareDiv = styled(DefaultDiv)`
  justify-content: space-evenly;
  grid-area: like;
`;

const AmountCommentsDiv = styled(DefaultDiv)`
  grid-area: commentCount;
  
`;

const CommentLink = styled.a`
  cursor: pointer;
`

const WishLikeCountDiv = styled(DefaultDiv)`
  grid-area: likeCount;
  
  p {
    white-space: pre-line;
  }
`;

const WishCard = ({wish: {id, logo, name, created, amount_of_hearts, avatar, content, comments}}) => {
    dayjs.extend(relativeTime);
    const [showComments, setShowComments] = useState(false)
    const [commentData, setCommentData] = useState(``)
    const [amountOfHearts, setAmountOfHearts] = useState(amount_of_hearts)
    const [localComments, setLocalComments] = useState(comments)


    const handleHeart = () => {
        const newAmount = amountOfHearts + 1
        setAmountOfHearts(newAmount)
    };

    const handleNewComment = e => {
        const value = e.currentTarget.value;
        setCommentData(value);
    }

    const submitComment = async (e) => {
        e.preventDefault();
        console.log("in the submit!")
        const newComment = {
            id: shortid.generate(),
            name: "Max Voss",
            created: new Date(),
            amount_of_likes: smallRand(),
            avatar: `https://i.pravatar.cc/150?img=${rand()}`,
            content: commentData
        }
        setLocalComments([...newComment, ...localComments])
        setCommentData("")
    }

    const timeAgo = dayjs(created).fromNow();

    return (
        <WishContainer>
            <DefaultAvaSmall src={avatar}/>
            <WishNameTimeDiv>
                <p>{name}</p>
                <p>{timeAgo}</p>
            </WishNameTimeDiv>
            <WishTextDiv>
                <p>{content}</p>
            </WishTextDiv>
            <WishImageDiv>{logo.length ? <Carousel images={logo}/> : null}</WishImageDiv>
            <WishLikeShareDiv>
                <WishHeartImg onClick={handleHeart}/>
                <p>{amountOfHearts}</p>
            </WishLikeShareDiv>
            <AmountCommentsDiv>
                <CommentLink onClick={() => setShowComments(true)}>
                    <p>{localComments.length ? `${localComments.length} Comments` : "Be the first to comment"}</p>
                </CommentLink>
            </AmountCommentsDiv>
            <WishLikeCountDiv>
                <WishHeartImg onClick={handleHeart}/>
                <p>{amountOfHearts}</p>
            </WishLikeCountDiv>
            {showComments ?
                <Comments content={commentData} id={id}
                          submitComment={submitComment}
                          handleNewComment={handleNewComment}
                          comments={localComments}/> : null}
        </WishContainer>
    )
}

export default WishCard