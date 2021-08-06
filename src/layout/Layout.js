import { Toolbar } from "@material-ui/core";
import MainHeader from "./MainHeader";
import SideBar from "./SideBar";
import { styled } from "@material-ui/core/styles";

const MainStyle = styled("main")(({ theme }) => ({
  marginLeft: drawerWidth,
  padding: theme.spacing(3.75),
  minHeight: "100vh",
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

const Layout = ({ children }) => {
  return (
    <>
      <MainHeader />

      <SideBar />

      <MainStyle>
        <ToolbarStyle />
        {children}
      </MainStyle>
    </>
  );
};

export default Layout;

export const drawerWidth = 120;
