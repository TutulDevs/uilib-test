import Head from "next/head";
import { Box, Typography } from "@material-ui/core";
import { styled } from "@material-ui/styles";

import { AiOutlinePlus } from "react-icons/ai";

import CustomButton from "../src/components/ui/Button";

const ContainerBoxStyle = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const Table = () => {
  return (
    <>
      <Head>
        <title>List | Gull</title>
      </Head>

      <ContainerBoxStyle sx={{ mb: 5 }}>
        <Typography variant="h4" component="h1">
          Users
        </Typography>

        <CustomButton>
          <AiOutlinePlus />
          <span>New User</span>
        </CustomButton>
      </ContainerBoxStyle>

      {/* User List Content */}
      <ContainerBoxStyle>
        <Typography variant="h6" component="h3">
          A list can be added here.
        </Typography>
      </ContainerBoxStyle>
    </>
  );
};

export default Table;
