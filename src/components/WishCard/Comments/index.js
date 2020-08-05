import React from "react";
import styled from "styled-components";

import TextareaAutosize from 'react-autosize-textarea';
import {getTimeAgo} from "../../../sampleData";
import {DefaultAvaSmall} from "../../../style/GlobalImages";
import {BaseButton} from "../../../style/GlobalButtons";


const CommentsContainer = styled.div`
grid-area: comments;
padding: 10px;
`
const CommentDiv = styled.div`
  
  width: 100%;
  min-width: 375px;
  
  border-top: 1px solid rgba(128,128,128,0.32);
`
const NameTimeDiv = styled.div`
margin: 10px;
`
const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Name = styled.p`
`
const Time = styled.p`
  color: gray;
`

const ContentDiv = styled.div`
  p{
   white-space: pre-line;
  }
`
const AvatarDiv = styled.div`
`
const InputDiv = styled.form`
display: flex;
justify-content: center;
align-items: center;
`

const AvaNameTimeDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const PostComment = styled(BaseButton)`
width: 5rem;
height: 2rem;
padding: 5px;
`
const Input = styled(TextareaAutosize)`
padding: 0.5rem;
border-radius: 30px;
display: flex;
width: 100%;
resize: none;
height: 1rem;
max-height: 300px;
align-items: center;
`


const Comments = ({comments, handleNewComment, submitComment, content}) => {

    let renderComments = comments.map((comment, index) => {

        return (
            <CommentDiv key={index}>
                <HeaderDiv>
                    <AvaNameTimeDiv>
                        <AvatarDiv>
                            <DefaultAvaSmall src={comment.avatar}/>
                        </AvatarDiv>
                        <NameTimeDiv>
                            <Name>{comment.name}</Name>
                            <Time>{getTimeAgo(comment.created)}</Time>
                        </NameTimeDiv>
                    </AvaNameTimeDiv>
                </HeaderDiv>
                <ContentDiv>
                    <p>{comment.content}</p>
                </ContentDiv>
            </CommentDiv>
        )
    })


    return (
        <CommentsContainer>
            {renderComments}
            <InputDiv>
                <Input onResize={(e) => {
                }} value={content} onChange={handleNewComment}/>
                <PostComment onClick={submitComment}>Post</PostComment>
            </InputDiv>
        </CommentsContainer>
    )
}

export default Comments;