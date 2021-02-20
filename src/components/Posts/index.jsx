import React from 'react';
import Typography from '@material-ui/core/Typography';
import { styled } from '@material-ui/core/styles';

const Post = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  padding: '10px',
  margin: '30px',
  background: 'white',
  width: '500px',
  marginBottom: '15px',
  boxShadow: '1px 2px #BFBFBF',
});

const PostHeader = styled(Typography)({
  color: '#DC8E85',
  textTransform: 'uppercase',
  fontWeight: '600',
});

const PostContent = styled(Typography)({});

const Posts = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id}>
          <PostHeader variant="h6">{post.title}</PostHeader>
          <PostContent variant="body2">{post.text}</PostContent>
        </Post>
      ))}
    </div>
  );
};

export default Posts;
