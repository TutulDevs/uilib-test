import { Toolbar, Drawer, Typography } from "@material-ui/core";
import { drawerWidth } from "./Layout";
import { headerHeight } from "./Layout";
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

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  display: "grid",
  placeItems: "center",
  [theme.breakpoints.up("xs")]: {
    minHeight: headerHeight,
    padding: `${theme.spacing(2)} ${theme.spacing(0)}`,
    marginBottom: theme.spacing(0),
  },
  [theme.breakpoints.up("sm")]: {
    minHeight: theme.mixins.toolbar.minHeight,
    padding: `${theme.spacing(4.25)} ${theme.spacing(0)}`,
    marginBottom: theme.spacing(1.5),
  },
}));

const SideBar = () => {
  const classes = useStyles();

  return (
    <Drawer
      classqName={classes.drawer}
      variant='permanent'
      anchor='left'
      classes={{ paper: classes.drawerPaper }}>
      <ToolbarStyle>
        <Typography variant='h4'>Gull</Typography>
      </ToolbarStyle>

      {/* Nav List  */}
      <NavItems />
    </Drawer>
  );
};

export default SideBar;
