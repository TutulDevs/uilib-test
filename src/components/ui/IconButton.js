import { IconButton } from "@material-ui/core";
import { styled } from "@material-ui/styles";

const IconButtonStyle = styled(IconButton)(({ theme }) => ({
  color: theme.palette.purple.main,
  transition: "0.3s ease-in",
  "&:hover": {
    backgroundColor: theme.palette.purple.lighter,
  },
  [theme.breakpoints.up("xs")]: {
    fontSize: "1.25rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.5rem",
  },
}));

const CustomIconButton = (props) => {
  return (
    <IconButtonStyle
      onClick={props.onClick}
      edge={props.edge}
      aria-label={props.label}>
      {props.children}
    </IconButtonStyle>
  );
};

export default CustomIconButton;
