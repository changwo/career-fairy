import React, {useState} from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

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
    }

    const timeAgo = dayjs(created).fromNow();

    return (
        <UserPostContainer>
            {isModal ? modal : null}
            <Avatar first_name={first_name} last_name={last_name} avatar={avatar}
                    is_from_logged_in_user={is_from_logged_in_user} id={userID}/>
            <UserPostNameTimeDiv>
                <UserPostBlack>
                    {first_name} {last_name}
                </UserPostBlack>
                <UserPostGrey>{timeAgo}</UserPostGrey>
            </UserPostNameTimeDiv>
            {isDropDown ? renderDropDown : null}
            <UserPostMenuDiv>
                {is_from_logged_in_user ? <UserPostMenuImg onClick={handleToggle} id={id}/> : null}
            </UserPostMenuDiv>
            <UserPostTextDiv>
                <UserPostText>{content}</UserPostText>
            </UserPostTextDiv>
            <UserPostImageDiv>{images.length ? <Carousel images={images}/> : null}</UserPostImageDiv>
            <UserPostLikeShareDiv>
                {logged_in_user_liked ? (
                    <ActiveLikeImg id={id} onClick={handleLike}/>
                ) : (
                    <UserPostLikeImg id={id} onClick={handleLike}/>
                )}
                <UserPostText>Like</UserPostText>
                <UserPostShareImg/>
                <UserPostText>Share</UserPostText>
            </UserPostLikeShareDiv>
            <AmountCommentsDiv><CommentLink onClick={handleRenderComments}>
                <p>{amount_of_comments ? `${amount_of_comments} Comments` : "Be the first to comment"}</p>
            </CommentLink></AmountCommentsDiv>
            <UserPostLikeCountDiv>
                <UserPostText>{amount_of_hearts} hearts</UserPostText>
            </UserPostLikeCountDiv>
            {commentsData.showComments ?
                <Comments handleDeleteComment={handleDeleteComment} content={commentsData.content} id={id}
                          submitComment={submitComment}
                          handleNewComment={handleNewComment}
                          comments={commentsData.commentsList}/> : null}
        </UserPostContainer>
    )
}

export default WishCard