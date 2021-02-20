import React from 'react';
import styled from 'styled-components';
import Img from '../../assets/front.jpg';
import Typography from '@material-ui/core/Typography';

const StyledDiv = styled.div`
  width: 100vw;
  display: flex;
  margin-top: 62px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const StyledImg = styled.img`
  flex: 1;
  width: 50vw;

  @media (max-width: 600px) {
    width: 100vw;
  }
`;

const MainDiv = styled.div`
  flex: 1;
  width: 50vw;
  background-color: #dc8e85;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 80px 50px 50px 50px;
  text-shadow: 1px 1px #5c3b37;

  @media (max-width: 600px) {
    width: 100vw;
    margin: 0 5px 0 5px;
    padding: 20px 5px 20px 5px;
  }
`;

const TitleDiv = () => {
  return (
    <StyledDiv>
      <StyledImg src={Img} />
      <MainDiv>
        <Typography variant="h5">CAPILAR</Typography>
        <Typography variant="h4">FORTALECIMENTO</Typography>
        <Typography variant="subtitle2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          tincidunt leo nisl. Phasellus urna nisl, blandit et odio mattis,
          laoreet rutrum neque.
        </Typography>
      </MainDiv>
    </StyledDiv>
  );
};

export default TitleDiv;
