import React, {useState} from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import {DefaultAvaLarge, WishHeartImg} from "../../style/GlobalImages";
import commentIcon from '../../assets/comment.png'
import {WishCardContainer} from "../../style/GlobalContainers";
import Comments from "./Comments";
import RubberBand from 'react-reveal/RubberBand';


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
  p{
    color: #808080;
  }
`;

const WishTextDiv = styled(DefaultDiv)`
  justify-content: flex-start;
  padding: 0 5px 0 5px;
  grid-area: c;
  p{
    white-space: pre-line;
  }
`;

const AmountCommentsDiv = styled(DefaultDiv)`
  grid-area: commentCount;
  justify-content: flex-end;
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

const GreenOval = styled.div`
  cursor: pointer;
  background-color: ${(props) => props.theme.fairyGreen};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 90px;
  height: 80%;
  border-radius: 20px;
  p{
    font-size: 1.5rem;
    padding-right: 0.5rem;
  }
`
const Animate = styled(RubberBand)`
  height: 100%;
  width: 100%;
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

    // const groupProps = {
    //   appear: false,
    //   enter: false,
    //   exit: false,
    // };

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
            <WishLikeCountDiv>
                <Animate wait={0} delay={0} spy={amountOfHearts}>
                    <GreenOval onClick={handleHeart}>
                        <WishHeartImg/>
                        <p>{amountOfHearts}</p>
                    </GreenOval>
                </Animate >
            </WishLikeCountDiv>
            <LogoDiv>
                <DefaultAvaLarge src={logo}/>
            </LogoDiv>
            <WishNameTimeDiv>
                <h1>{companyName}</h1>
                <p>{timeAgo}</p>
            </WishNameTimeDiv>
            <WishTextDiv>
                <p>{content}</p>
            </WishTextDiv>
            <AmountCommentsDiv onClick={showComments ? () => setShowComments(false) : () => setShowComments(true)}>
                {showComments ? <p>Hide Comments</p> :
                    (localComments.length ? <>
                        <CommentImg alt="comment icon" src={commentIcon}/>
                        <p>{localComments.length} </p>
                    </> : "Be the first to comment")}
            </AmountCommentsDiv>
            {showComments ?
                <Comments content={commentData} id={id}
                          showComments={showComments}
                                      submitComment={submitComment}
                                      handleNewComment={handleNewComment}
                                      comments={localComments}/>
                                      : null}
        </WishCardContainer>
    )
}

export default WishCard