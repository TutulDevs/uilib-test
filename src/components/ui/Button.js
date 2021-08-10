import { Button } from "@material-ui/core";
import { styled } from "@material-ui/styles";

const ButtonStyle = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.purple.light,
  color: theme.palette.common.white,
  fontWeight: 600,
  display: "grid",
  gap: theme.spacing(0.5),
  gridAutoFlow: "column",
  boxShadow: theme.shadows[5],
  borderRadius: theme.spacing(1.25),
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  "&:hover": {
    backgroundColor: theme.palette.purple.main,
    boxShadow: theme.shadows[10],
  },
}));

const CustomButton = (props) => {
  return <ButtonStyle>{props.children}</ButtonStyle>;
};

export default CustomButton;
