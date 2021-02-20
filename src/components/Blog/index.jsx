import React from 'react';
import Typography from '@material-ui/core/Typography';
import { styled } from '@material-ui/core/styles';
import Posts from '../Posts';

const StyledDiv = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const TitleDiv = styled('div')({});

const TitleTipography = styled(Typography)({
  color: '#DC8E85',
});

const Blog = ([posts]) => {
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
      <Posts posts={posts} />
      {/* <About></About> */}
    </StyledDiv>
  );
};

export default Blog;
