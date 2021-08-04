import { styled, Toolbar } from "@material-ui/core";
import MainHeader from "./MainHeader";
import SideBar from "./SideBar";

const WrapperStyle = styled("div")({
  display: "flex",
});

const MainStyle = styled("main")(({ theme }) => ({
  marginLeft: drawerWidth,
  padding: "1rem",
}));

const Layout = ({ children }) => {
  return (
    <WrapperStyle>
      <MainHeader />

      <SideBar />

      <MainStyle>
        <Toolbar />
        {children}
      </MainStyle>
    </WrapperStyle>
  );
};

export default Layout;

export const drawerWidth = 120;
