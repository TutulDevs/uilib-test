import { Typography, Link } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import { drawerWidth } from "./Layout";

const FooterStyle = styled("footer")(({ theme }) => ({
  display: "grid",
  placeItems: "center",
  textAlign: "center",
  marginLeft: drawerWidth,
  backgroundColor: theme.palette.background.lighter,
}));

const Footer = () => {
  return (
    <FooterStyle>
      <Typography variant='subtitle2' paragraph>
        Made by{" "}
        <Link
          href='https://github.com/tutuldevs'
          target='_blank'
          rel='noopener'>
          Tutul
        </Link>
      </Typography>
    </FooterStyle>
  );
};

export default Footer;
