import { useState } from "react";
import { AppBar, Toolbar, Drawer, Hidden, Typography } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";

import MainHeader from "./MainHeader";
import DrawerContent from "./DrawerContent";

const drawerWidth = 120;

// starts

import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  drawer: {
    visibility: "hidden",
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
      visibility: "visible",
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.purple.main,
  },
}));

// ends

const RootStyle = styled("div")(() => ({
  display: "flex",
}));

const MainContainerStyle = styled("main")(({ theme }) => ({
  padding: `${theme.spacing(3.75)} ${theme.spacing(2.5)}`,
  minHeight: "100vh",
  flexGrow: 1,
}));

const Layout = (props) => {
  // vars
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  // the container
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <RootStyle>
      {/* Appbar */}
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap>
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Navbar drawer */}
      <nav className={classes.drawer} aria-label='Navigation Menus'>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation='css'>
          <Drawer
            container={container}
            variant='temporary'
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}>
            <DrawerContent />
          </Drawer>
        </Hidden>

        <Hidden xsDown implementation='css'>
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant='permanent'
            open>
            <DrawerContent />
          </Drawer>
        </Hidden>
      </nav>

      {/* Main Content Body */}
      <MainContainerStyle>
        <Toolbar />

        {props.children}
      </MainContainerStyle>
    </RootStyle>
  );
};

export default Layout;

//export const drawerWidth = 120;
export const headerHeight = 64;

/*

 <>
      <MainHeader />

      <SideBar />

      <MainStyle>
        <ToolbarStyle />
        {children}
      </MainStyle>
    </>

*/
