import React, {useState} from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import {DefaultAvaLarge, WishHeartImg} from "../../style/GlobalImages";
import commentIcon from '../../assets/comment.png'
import {WishCardContainer} from "../../style/GlobalContainers";
import Carousel from "../Carousel";
import Comments from "./Comments";

const shortid = require("shortid");

const rand = () => {
    return Math.floor(Math.random() * 100) + 1
}

const smallRand = () => {
    return Math.floor(Math.random() * 40) + 1
}


const DefaultDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoDiv = styled(DefaultDiv)`
  grid-area: logo;
`

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
  cursor: pointer;
  p{
    margin-left: 0.4rem;
    text-align: center;
  }
`;

const WishLikeCountDiv = styled(DefaultDiv)`
  grid-area: likeCount;
  p {
    white-space: pre-line;
  }
`;

const CommentImg = styled.img`
   width: 20px;
   height: 20px;
`

const WishCard = ({wish: {id, logo, companyName, name, created, amount_of_hearts, avatar, content, comments}}) => {
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
        console.log("newcomment", newComment)
        setLocalComments([newComment, ...localComments])
        setCommentData("")
    }

    const timeAgo = dayjs(created).fromNow();

    return (
        <WishCardContainer>
            <LogoDiv>
                <DefaultAvaLarge src={logo}/>
            </LogoDiv>
            <WishNameTimeDiv>
                <p>{companyName}</p>
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
            <AmountCommentsDiv onClick={showComments ? () => setShowComments(false) : () => setShowComments(true)}>
                {showComments ? <p>Hide Comments</p> :
                    (localComments.length ? <>
                        <CommentImg alt="comment icon" src={commentIcon}/>
                        <p>{localComments.length} </p>
                    </> : "Be the first to comment")}
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
        </WishCardContainer>
    )
}

export default WishCard