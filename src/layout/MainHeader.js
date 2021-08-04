import {
  AppBar,
  Badge,
  Box,
  IconButton,
  styled,
  Toolbar,
} from "@material-ui/core";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import Avatar from "@material-ui/core/Avatar";
import { drawerWidth } from "./Layout";
import MenuIcon from "@material-ui/icons/Menu";
import OpenWithOutlinedIcon from "@material-ui/icons/OpenWithOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import SearchIcon from "@material-ui/icons/Search";

const AppBarStyle = styled(AppBar)(({ theme }) => ({
  width: `calc(100% - ${drawerWidth}px)`,
  backgroundColor: theme.palette.background.default,
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  color: "black",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

const BoxStyle = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(2),
  gridAutoFlow: "column",
  alignItems: "center",
}));

const IconButtonStyle = styled(IconButton)(({ theme }) => ({
  color: theme.palette.purple.main,
  transition: "background 0.5s ease",
  "&:hover": {
    backgroundColor: theme.palette.purple.lighter,
    transition: "background 0.5s ease",
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    top: -3,
    right: 0,
    padding: "0 5px",
    backgroundColor: theme.palette.purple.main,
    color: "white",
  },
}));

const AvatarStyle = styled(Avatar)(({ theme }) => ({
  borderRadius: theme.spacing(1.5),
  width: theme.spacing(8),
  height: theme.spacing(8),
}));

const FormBoxStyle = styled(Box)(({ theme }) => ({
  padding: `${theme.spacing(1.25)} ${theme.spacing(5)}`,
  backgroundColor: "white",
  color: theme.palette.background.light,
  borderRadius: theme.spacing(100),
}));

const MainHeader = () => {
  return (
    <AppBarStyle elevation={0}>
      <ToolbarStyle>
        <BoxStyle>
          <IconButtonStyle aria-label='Menu Icon'>
            <MenuIcon />
          </IconButtonStyle>

          <FormBoxStyle component='form' noValidate>
            <Input
              type='search'
              placeholder='Search'
              id='input-with-icon-adornment'
              fullWidth
              disableUnderline
              startAdornment={
                <InputAdornment position='start'>
                  <SearchIcon fontSize='small' />
                </InputAdornment>
              }
            />
          </FormBoxStyle>
        </BoxStyle>

        <BoxStyle>
          <IconButtonStyle aria-label='Open With Icon'>
            <OpenWithOutlinedIcon />
          </IconButtonStyle>

          <IconButtonStyle aria-label='Notification Icon'>
            <StyledBadge badgeContent={5}>
              <NotificationsOutlinedIcon />
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
