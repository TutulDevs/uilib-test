import { AppBar, styled, Toolbar } from "@material-ui/core";
import { drawerWidth } from "./Layout";

const AppBarStyle = styled(AppBar)(({ theme }) => ({
  borderBottom: "2px solid green",
  backgroundColor: theme.palette.background.default,
  color: "black",
  boxShadow: "none",
  width: `calc(100% - ${drawerWidth}px)`,
}));

const MainHeader = () => {
  return (
    <AppBarStyle>
      <Toolbar>The Header of the App</Toolbar>
    </AppBarStyle>
  );
};

export default MainHeader;
