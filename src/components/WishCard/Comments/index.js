import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';
import TextareaAutosize from 'react-autosize-textarea';

import {CollapseArrow, DefaultAvaSmall} from "../../../style/GlobalImages";
import {BaseButton} from "../../../style/GlobalButtons";
import {getTimeAgo} from "../../../sampleData";


const CommentsContainer = styled.div`
  grid-area: comments;
  width: 100%;
  height: 100%;
  padding: 10px 10px 0 10px;
`
const CommentDiv = styled.div`
  width: 100%;
  min-width: 375px;
  margin-top: 1rem;
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
  border-top: 1px solid rgba(128,128,128,0.32);
  margin-top: 1rem;
  padding-top: 1rem;
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
    margin: 0 0.3rem;
`
const Input = styled(TextareaAutosize)`
    padding: 0.5rem 1rem;
    border-radius: 20px;
    display: flex;
    width: 100%;
    resize: none;
    height: 1rem;
    outline: none;
    max-height: 300px;
    align-items: center;
`


const Comments = ({comments, handleNewComment, submitComment, content, handleCollapse}) => {

    let renderComments = comments.map(comment => {
        return (
            <Fade key={comment.id} collapse>
                <CommentDiv>
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
            </Fade>
        )
    })


    return (
        <CommentsContainer name="COMMENTS">
            {renderComments}
            <InputDiv>
                <Input onResize={(e) => {
                }} value={content} onChange={handleNewComment}/>
                <PostComment onClick={submitComment}>Post</PostComment>
                <CollapseArrow onClick={handleCollapse}/>
            </InputDiv>
        </CommentsContainer>
    )
}

export default Comments;