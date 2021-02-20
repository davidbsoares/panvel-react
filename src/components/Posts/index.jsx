import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { styled } from '@material-ui/core/styles';
import posts from '../../../db.json';

const Post = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  padding: '10px',
  background: 'white',
  width: '500px',
  margin: '15px',
  boxShadow: '1px 2px #BFBFBF',
});

const PostHeader = styled(Typography)({
  color: '#DC8E85',
  textTransform: 'uppercase',
  fontWeight: '600',
});

const PostContent = styled(Typography)({});

const Posts = (posts) => {
  return (
    <div>
      {posts.map((post) => (
        <Post>
          <PostHeader variant="h6" key={post.id}>
            {post.title}
          </PostHeader>
          <PostContent variant="body2" key={post.id}>
            {post.text}
          </PostContent>
        </Post>
      ))}
    </div>
  );
};

export default Posts;
