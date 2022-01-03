import React from 'react';

import { PostItem, PostImage, PostImgWrap, PostInfo, PostLink, PostText } from './PublicElmts'

const PostData = (props) => {
  return (
    <>
      <PostItem>
        <PostLink to={props.path}>
          <PostImgWrap data-category={props.label}>
            <PostImage
              alt='Publications RM'
              src={props.src}
            />
          </PostImgWrap>
          <PostInfo>
            <PostText>{props.text}</PostText>
          </PostInfo>
        </PostLink>
      </PostItem>
    </>
  )
}

export default PostData

