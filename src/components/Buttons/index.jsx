import React from 'react';
import Button from '@material-ui/core/Button';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import AppsIcon from '@material-ui/icons/Apps';
import { styled } from '@material-ui/core/styles';

const StyledDiv = styled('div')({
  width: '50vw',
  margin: '20px auto auto auto',
  display: 'flex',
  justifyContent: 'flex-end',
});

const QuantityBtn = styled(Button)({
  background: 'white',
  marginRight: '10px',
  borderRadius: '0',
  width: '200px',
});

const SortBtn = styled(Button)({
  background: 'white',
  borderRadius: '0',
  width: '200px',
});

const Buttons = () => {
  return (
    <StyledDiv>
      <QuantityBtn
        size="small"
        variant="contained"
        startIcon={<AppsIcon />}
        disableElevation
      >
        Quantidade
      </QuantityBtn>
      <SortBtn
        size="small"
        variant="contained"
        startIcon={<CompareArrowsIcon />}
        disableElevation
      >
        Ordenar
      </SortBtn>
    </StyledDiv>
  );
};

export default Buttons;
