import { Box, Card, Paper, Typography } from "@material-ui/core";
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
    backgroundColor: theme.palette.green.lighter,
    color: theme.palette.green.main,
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
    color: theme.palette.green.main,
    fontSize: theme.spacing(3.75),
    fontWeight: 700,
    marginTop: theme.spacing(0.5),
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
