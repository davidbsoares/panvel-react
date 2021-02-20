import React, { useState } from 'react';
import { styled } from '@material-ui/core/styles';

import Header from './components/Header';
import TitleDiv from './components/TitleDiv';
import Buttons from './components/Buttons';
import Blog from './components/Blog';

const StyledContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

function App() {
  const [posts, setposts] = useState([]);

  return (
    <>
      <Header />
      <StyledContainer>
        <TitleDiv />
        <Buttons />
        <Blog posts={posts} />
      </StyledContainer>
    </>
  );
}

export default App;
