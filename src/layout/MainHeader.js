import {
  Badge,
  Box,
  IconButton,
  AppBar,
  Toolbar,
  Input,
  InputAdornment,
  Avatar,
} from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

import { drawerWidth } from "./Layout";

import { AiOutlineMenu, AiOutlineBell, AiOutlineSearch } from "react-icons/ai";
import { FiMove } from "react-icons/fi";

const AppBarStyle = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.up("sm")]: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  color: theme.palette.common.black,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

const BoxStyle = styled(Box)(({ theme }) => ({
  display: "grid",
  gridAutoFlow: "column",
  alignItems: "center",
  [theme.breakpoints.up("xs")]: {
    gap: theme.spacing(1.5),
  },
  [theme.breakpoints.up("sm")]: {
    gap: theme.spacing(3.75),
  },
}));

const IconButtonStyle = styled(IconButton)(({ theme }) => ({
  color: theme.palette.purple.main,
  transition: "0.3s ease-in",
  "&:hover": {
    backgroundColor: theme.palette.purple.lighter,
  },
  [theme.breakpoints.up("xs")]: {
    fontSize: "1.25rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.5rem",
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    top: -3,
    right: 0,
    padding: "0 5px",
    backgroundColor: theme.palette.purple.main,
    color: theme.palette.common.white,
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.spacing(1.5),
    },
  },
}));

const AvatarStyle = styled(Avatar)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  transition: "0.3s ease-in",
  [theme.breakpoints.up("xs")]: {
    width: theme.spacing(6.5),
    height: theme.spacing(6.5),
  },
  [theme.breakpoints.up("sm")]: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  "&:hover": {
    boxShadow: "0 0 25px -10px rgb(0 0 0 / 74%)",
  },
}));

const FormBoxStyle = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  color: theme.palette.background.light,
  borderRadius: theme.spacing(2),
  [theme.breakpoints.up("xs")]: {
    padding: `${theme.spacing(0.75)} ${theme.spacing(2)}`,
    marginRight: theme.spacing(0.5),
  },
  [theme.breakpoints.up("md")]: {
    padding: `${theme.spacing(1.25)} ${theme.spacing(5)}`,
  },
}));

const MainHeader = ({ onClick, edge }) => {
  return (
    <AppBarStyle position='fixed' elevation={0}>
      <ToolbarStyle>
        <BoxStyle>
          <IconButtonStyle
            onClick={onClick}
            edge={edge}
            sx={{ display: { xs: "inherit", sm: "none" } }}
            aria-label='Menu Icon'>
            <AiOutlineMenu />
          </IconButtonStyle>

          <IconButtonStyle
            sx={{ display: { xs: "none", sm: "inherit" } }}
            aria-label='Menu Icon'>
            <AiOutlineMenu />
          </IconButtonStyle>

          <FormBoxStyle component='form' noValidate>
            <Input
              type='search'
              placeholder='Search'
              id='input-with-icon-adornment'
              fullWidth
              disableUnderline
              aria-label='Search here'
              startAdornment={
                <InputAdornment position='start'>
                  <AiOutlineSearch fontSize='small' />
                </InputAdornment>
              }
            />
          </FormBoxStyle>
        </BoxStyle>

        <BoxStyle>
          <IconButtonStyle aria-label='Open With Icon'>
            <FiMove />
          </IconButtonStyle>

          <IconButtonStyle aria-label='Notification Icon'>
            <StyledBadge badgeContent={5}>
              <AiOutlineBell />
            </StyledBadge>
          </IconButtonStyle>

          <AvatarStyle
            alt='User Avatar'
            src='/avatar.jpg'
            aria-label='User Avatar'
          />
        </BoxStyle>
      </ToolbarStyle>
    </AppBarStyle>
  );
};

export default MainHeader;
