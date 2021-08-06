import { Box, Paper, Typography } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

const HomeCard = ({ colorId, icon, title, amount }) => {
  const CardStyle = styled(Paper)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.palette.background.paper,
    padding: `${theme.spacing(3.75)} ${theme.spacing(2.5)}`,
    borderRadius: theme.spacing(3),
    boxShadow: "none",
    "&: hover": {
      boxShadow: "0px 5px 25px -10px rgba(0,0,0,0.5)",
    },
  }));

  const IconWrapperStyle = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:
      colorId === "purple"
        ? theme.palette.purple.lighter
        : colorId === "blue"
        ? theme.palette.blue.lighter
        : colorId === "green"
        ? theme.palette.green.lighter
        : colorId === "orange"
        ? theme.palette.orange.lighter
        : theme.palette.purple.lighter,
    color:
      colorId === "purple"
        ? theme.palette.purple.main
        : colorId === "blue"
        ? theme.palette.blue.main
        : colorId === "green"
        ? theme.palette.green.main
        : colorId === "orange"
        ? theme.palette.orange.main
        : theme.palette.purple.main,
    minHeight: theme.spacing(10),
    padding: `${theme.spacing(0)} ${theme.spacing(1.75)}`,
    marginRight: theme.spacing(1.5),
    borderRadius: theme.spacing(10),
  }));

  const TitleTextStyle = styled(Typography)(({ theme }) => ({
    color: theme.palette.gray.main,
    fontSize: theme.spacing(1.75),
  }));

  const AmountTextStyle = styled(Typography)(({ theme }) => ({
    color:
      colorId === "purple"
        ? theme.palette.purple.main
        : colorId === "blue"
        ? theme.palette.blue.main
        : colorId === "green"
        ? theme.palette.green.main
        : colorId === "orange"
        ? theme.palette.orange.main
        : theme.palette.purple.main,
    fontSize: theme.spacing(3.75),
    fontWeight: 700,
    marginTop: theme.spacing(0.25),
  }));

  return (
    <CardStyle>
      <IconWrapperStyle>{icon}</IconWrapperStyle>

      <Box>
        <TitleTextStyle variant='subtitle2' component='h2'>
          {title}
        </TitleTextStyle>

        <AmountTextStyle variant='h4' component='h4'>
          {amount}
        </AmountTextStyle>
      </Box>
    </CardStyle>
  );
};

export default HomeCard;
