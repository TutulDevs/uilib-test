import { styled } from "@material-ui/core";
import MainHeader from "./MainHeader";
import SideBar from "./SideBar";

const WrapperStyle = styled("div")({
  display: "flex",
});

const MainStyle = styled("main")(({ theme }) => ({
  marginTop: theme.spacing(8),
  padding: theme.spacing(1.25),
}));

const Layout = ({ children }) => {
  return (
    <WrapperStyle>
      <MainHeader />

      <SideBar />

      <MainStyle>{children}</MainStyle>
    </WrapperStyle>
  );
};

export default Layout;

export const drawerWidth = 120;
