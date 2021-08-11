import { Box, Card, InputAdornment, TextField } from "@material-ui/core";
import { styled } from "@material-ui/styles";

import { AiOutlineSearch } from "react-icons/ai";
import { BsFilter } from "react-icons/bs";
import CustomIconButton from "../ui/IconButton";

const ContainerBoxStyle = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const TextFieldStyle = styled(TextField)(({ theme }) => ({
  "& MuiInputBase-root": {
    borderRadius: theme.spacing(1.25),
  },
  "& input": {
    [theme.breakpoints.down("sm")]: {
      padding: `${theme.spacing(1.25)} ${theme.spacing(0)}`,
      maxWidth: theme.spacing(20),
    },
  },
}));

const UserList = () => {
  return (
    <Card
      variant='outlined'
      elevation={3}
      sx={{
        py: 2.5,
        borderRadius: 1.5,
        boxShadow: "0px 5px 15px -5px rgba(0,0,0,0.25)",
      }}>
      {/* Form & Button */}
      <ContainerBoxStyle
        sx={{
          px: 2.5,
        }}>
        <TextFieldStyle
          type='search'
          placeholder='Search user...'
          aria-label='Search here'
          id='outlined-start-adornment'
          variant='outlined'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <AiOutlineSearch />
              </InputAdornment>
            ),
          }}
        />

        <CustomIconButton label='filter list'>
          <BsFilter />
        </CustomIconButton>
      </ContainerBoxStyle>

      {/* Actual list of items */}
    </Card>
  );
};

export default UserList;
