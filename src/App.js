import React, { useState, useEffect } from 'react';
import { styled } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Header from './components/Header';
import TitleDiv from './components/TitleDiv';
import Buttons from './components/Buttons';
import Blog from './components/Blog';
import Footer from './components/Footer';

const StyledContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

function App() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);

  useEffect(() => {
    const getPosts = async () => {
      const postsFromServer = await fetchPosts();
      setPosts(postsFromServer);
    };
    getPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await fetch('http://localhost:5000/posts');
    const data = await res.json();

    return data;
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts
    .slice(indexOfFirstPost, indexOfLastPost)
    .sort((a, b) => {
      return b.id - a.id;
    });

  return (
    <>
      <Header />
      <StyledContainer maxWidth="lg">
        <TitleDiv />
        <Buttons setPostsPerPage={setPostsPerPage} />
        <Blog posts={currentPosts} />

        <Footer />
      </StyledContainer>
    </>
  );
}

export default App;
