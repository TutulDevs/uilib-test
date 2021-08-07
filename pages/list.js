import Head from "next/head";
import { Typography } from "@material-ui/core";

const Table = () => {
  return (
    <>
      <Head>
        <title>List | UI Lib</title>
      </Head>

      <Typography variant='h4' component='h1' mt={2}>
        Here goes the list of items/users
      </Typography>
    </>
  );
};

export default Table;
