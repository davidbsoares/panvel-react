import React from 'react';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

import Posts from '../Posts';
import About from '../About';

const StyledDiv = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    'T T'
    'P A';
  grid-auto-columns: 100px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'T'
      'A'
      'P';
    place-items: center;
  }
`;

const TitleDiv = styled.div`
  grid-area: T;
  padding-left: 30px;
`;

const TitleTipography = styled(Typography)`
  color: #dc8e85;
`;

const StyledPosts = styled(Posts)`
  grid-area: P;
`;

const StyledAbout = styled(About)`
  grid-area: A;
`;

const Blog = ({ posts, loading }) => {
  return (
    <StyledDiv>
      <TitleDiv>
        <TitleTipography variant="h5">
          SHAMPOOS E DERMOCOSMÉTICOS
        </TitleTipography>
        <Typography variant="caption">
          Morbi faucibus lectus nec quam dignissim posuere. Maecenas eu
          tristique lectus, ut ultricies felis. Sed in tincidunt nulla.
          Vestibulum sit amet arcu et ligula efficitur maximus non eu leo.
        </Typography>
      </TitleDiv>
      <StyledPosts posts={posts} loading={loading} />
      <StyledAbout></StyledAbout>
    </StyledDiv>
  );
};

export default Blog;
