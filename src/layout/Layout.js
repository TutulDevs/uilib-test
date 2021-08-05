import { Toolbar } from "@material-ui/core";
import MainHeader from "./MainHeader";
import SideBar from "./SideBar";
import { styled } from "@material-ui/core/styles";

const MainStyle = styled("main")(({ theme }) => ({
  marginLeft: drawerWidth,
  padding: "1rem",
  minHeight: "100vh",
}));

const Layout = ({ children }) => {
  return (
    <>
      <MainHeader />

      <SideBar />

      <MainStyle>
        <Toolbar />
        {children}
      </MainStyle>
    </>
  );
};

export default Layout;

export const drawerWidth = 120;
