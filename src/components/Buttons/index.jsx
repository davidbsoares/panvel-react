import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
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

const StyledMenu = styled(Menu)({
  width: '300px',
});
const StyledMenuItem = styled(MenuItem)({
  width: '200px',
  justifyContent: 'center',
});

const Buttons = ({ setPostsPerPage }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledDiv>
      <QuantityBtn
        size="small"
        variant="contained"
        startIcon={<AppsIcon />}
        disableElevation
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Quantidade
      </QuantityBtn>
      <StyledMenu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem onClick={() => handleClose && setPostsPerPage(1)}>
          1
        </StyledMenuItem>
        <StyledMenuItem onClick={() => handleClose && setPostsPerPage(2)}>
          2
        </StyledMenuItem>
        <StyledMenuItem onClick={() => handleClose && setPostsPerPage(3)}>
          3
        </StyledMenuItem>
        <StyledMenuItem onClick={() => handleClose && setPostsPerPage(4)}>
          4
        </StyledMenuItem>
        <StyledMenuItem onClick={() => handleClose && setPostsPerPage(5)}>
          5
        </StyledMenuItem>
        <StyledMenuItem onClick={() => handleClose && setPostsPerPage(6)}>
          6
        </StyledMenuItem>
        <StyledMenuItem onClick={() => handleClose && setPostsPerPage(7)}>
          7
        </StyledMenuItem>
        <StyledMenuItem onClick={() => handleClose && setPostsPerPage(8)}>
          8
        </StyledMenuItem>
        <StyledMenuItem onClick={() => handleClose && setPostsPerPage(9)}>
          9
        </StyledMenuItem>
      </StyledMenu>
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
