import { Box, Card } from "@material-ui/core";
import { styled } from "@material-ui/styles";

import { BsFilter } from "react-icons/bs";
import CustomIconButton from "../ui/IconButton";

const ContainerBoxStyle = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  border: "1px solid salmon",
}));

const UserList = () => {
  return (
    <Card
      variant='outlined'
      elevation={3}
      sx={{
        py: 2.5,
        borderRadius: 1.5,
      }}>
      {/* Form & Button */}
      <ContainerBoxStyle
        sx={{
          px: 2.5,
        }}>
        <h2>Form</h2>

        <CustomIconButton label='filter list'>
          <BsFilter />
        </CustomIconButton>
      </ContainerBoxStyle>

      {/* Actual list of items */}
    </Card>
  );
};

export default UserList;
