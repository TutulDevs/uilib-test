import Head from "next/head";
import { Box, Typography } from "@material-ui/core";
import { styled } from "@material-ui/styles";

import { AiOutlinePlus } from "react-icons/ai";

import CustomButton from "../src/components/ui/Button";
import UserList from "../src/components/listPage/UserList";

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
        <Typography variant='h4' component='h1'>
          Users
        </Typography>

        <CustomButton>
          <AiOutlinePlus />
          <span>New User</span>
        </CustomButton>
      </ContainerBoxStyle>

      {/* User List Content */}
      <UserList />
    </>
  );
};

export default Table;
