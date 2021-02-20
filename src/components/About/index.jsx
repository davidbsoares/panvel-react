import React from 'react';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

import Img from '../../assets/hair.jpg';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const StyledAbout = styled.div`
  width: 45vw;
  margin-top: 30px;

  @media (max-width: 600px) {
    width: 80vw;
  }
`;

const StyledHeader = styled.div`
  background: #dc8e85;
  color: white;
  height: 3rem;
  display: flex;
  align-items: center;
  width: 45vw;
  @media (max-width: 600px) {
    width: 80vw;
  }
`;

const StyledImage = styled.img`
  width: 45vw;
  @media (max-width: 600px) {
    width: 80vw;
  }
`;
const StyledTypography = styled(Typography)`
  padding-left: 20px;
`;

const About = () => {
  return (
    <StyledAbout>
      <StyledHeader>
        <StyledTypography variant={'h6'}>
          CONHEÇA NOSSOS <strong>SHAMPOOS</strong>
        </StyledTypography>
        <ArrowRightIcon />
      </StyledHeader>
      <StyledImage src={Img}></StyledImage>
    </StyledAbout>
  );
};

export default About;
