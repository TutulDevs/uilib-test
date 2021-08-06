import { AppBar, Toolbar, Drawer, Typography } from "@material-ui/core";
import { drawerWidth } from "./Layout";
import { makeStyles } from "@material-ui/styles";
import { styled } from "@material-ui/core/styles";
import NavItems from "../components/NavItems";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
    border: "none",
    backgroundColor: theme.palette.purple.main,
    color: "white",
    textAlign: "center",
    padding: `0 ${theme.spacing(1.5)}`,
  },
}));

const AppBarStyle = styled(AppBar)(({ theme }) => ({
  position: "static",
  backgroundColor: theme.palette.purple.main,
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  paddingLeft: 0,
  paddingRight: 0,
  marginBottom: theme.spacing(1.5),
}));

const LogoTextStyle = styled(Typography)(({ theme }) => ({
  display: "grid",
  placeItems: "center",
  marginTop: theme.spacing(2.5),
}));

const SideBar = () => {
  const classes = useStyles();

  return (
    <Drawer
      classqName={classes.drawer}
      variant='permanent'
      anchor='left'
      classes={{ paper: classes.drawerPaper }}>
      <AppBarStyle elevation='0'>
        <ToolbarStyle>
          <LogoTextStyle variant='h5'>Gull</LogoTextStyle>
        </ToolbarStyle>
      </AppBarStyle>

      {/* Nav List  */}
      <NavItems />
    </Drawer>
  );
};

export default SideBar;
