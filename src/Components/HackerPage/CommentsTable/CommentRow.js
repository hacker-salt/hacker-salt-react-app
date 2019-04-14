import React from 'react';
import styled from 'styled-components';

//Import images
import scale from '../../../img/scale.png';

//Export default component
export default function CommentRow(props) {
  return (
    <div>
      <SDCommentRow>
        {props.comment.cleaned_comment && <SDRowSaltiestComment>{props.comment.cleaned_comment}</SDRowSaltiestComment>}
        {props.comment.comment_saltiness && <SDRowSaltiness>{props.comment.comment_saltiness.toFixed(2)}</SDRowSaltiness>}
        <SDRowLink>
          <a target="_blank" rel="noopener noreferrer" href={`https://news.ycombinator.com/item?id=${props.comment.parent_id}`}>
            <img src={scale} alt="image of scale" />
          </a>
        </SDRowLink>
      </SDCommentRow>
    </div>
  );
}

//Styled components
const SDCommentRow = styled.div`
  width: 100%;
  min-height: 50px;
  height: auto;
  margin: 5px 0;
  padding: 10px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SDRowSaltiestComment = styled.div`
  width: 80%;
`;

const SDRowSaltiness = styled.div`
  width: 10%;
  text-align: center;
`;

const SDRowLink = styled.div`
  width: 10%;
  text-align: center;
  cursor: pointer;
  a {
    img {
      max-width: 12%;
      padding-top: 6px;
    }
  }
`;