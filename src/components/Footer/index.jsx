import React from 'react';
import { styled } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const StyledDiv = styled('div')({
  backgroundColor: '#DC8E85',
  width: '75vw',
  height: '40px',
  margin: '20px 0',
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
const StyledTypography = styled(Typography)({
  color: 'white',
  fontSize: '.9rem',
});

const StyledA = styled('a')({
  color: 'white',
});

const Footer = () => {
  return (
    <StyledDiv>
      <StyledTypography variant={'body1'}>
        Para mais informações sobre o combate à caspa, acesse{' '}
        <StyledA href={'https://www.dermaclub.com.br/'}>Dermaclub</StyledA>
      </StyledTypography>
    </StyledDiv>
  );
};

export default Footer;
