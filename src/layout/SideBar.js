import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { drawerWidth } from "./Layout";
import { makeStyles } from "@material-ui/styles";
import { styled } from "@material-ui/core/styles";

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

const LogoTextStyle = styled(Typography)(({ theme }) => ({
  minHeight: theme.spacing(8),
  display: "grid",
  placeItems: "center",
}));

const SideBar = () => {
  const classes = useStyles();

  return (
    <Drawer
      classqName={classes.drawer}
      variant='permanent'
      anchor='left'
      classes={{ paper: classes.drawerPaper }}>
      <Toolbar>
        <LogoTextStyle variant='h5'>Gull</LogoTextStyle>
      </Toolbar>

      <List>
        {["A", "B", "C", "D", "E", "F", "G"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;
