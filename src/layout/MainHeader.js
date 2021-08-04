import { AppBar, Box, styled, TextField, Toolbar } from "@material-ui/core";
import { drawerWidth } from "./Layout";
import MenuIcon from "@material-ui/icons/Menu";

const AppBarStyle = styled(AppBar)(({ theme }) => ({
  width: `calc(100% - ${drawerWidth}px)`,
  backgroundColor: theme.palette.background.default,
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  color: "black",
  borderBottom: "2px solid green",
}));

const MainHeader = () => {
  return (
    <AppBarStyle elevation={0}>
      <ToolbarStyle>
        <Box>
          <MenuIcon fontSize='small' />

          <TextField type='text' placeholder='search' />
        </Box>
      </ToolbarStyle>
    </AppBarStyle>
  );
};

export default MainHeader;
