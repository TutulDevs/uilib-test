import Head from "next/head";
import Link from "next/link";
import { Box, Typography } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

const ContainerStyle = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  minHeight: "70vh",
}));

const ErrorImageStyle = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  maxWidth: theme.breakpoints.values.sm / 1.5,
  maxHeight: theme.breakpoints.values.sm / 1.5,
  objectFit: "cover",
  margin: "20px 0",
}));

const LinkStyle = styled("a")(({ theme }) => ({
  backgroundColor: theme.palette.purple.main,
  color: theme.palette.common.white,
  padding: `${theme.spacing(1)} ${theme.spacing(1.75)}`,
  borderRadius: theme.spacing(1.75),
  textDecoration: "none",
  display: "inline-block",
  marginTop: theme.spacing(1.5),
}));

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>404 | Gull</title>
      </Head>

      <ContainerStyle>
        <ErrorImageStyle src='/error-404.png' alt='Error Page Image' />

        <Typography variant='h4'>
          This page is not found or built yet.
        </Typography>

        <Typography variant='subtitle1' paragraph>
          {" "}
          <Link href='/' passHref>
            <LinkStyle>Go to the Home Page</LinkStyle>
          </Link>
        </Typography>
      </ContainerStyle>
    </>
  );
};

export default Custom404;
