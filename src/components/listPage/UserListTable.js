import { useEffect, useState } from "react";
import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Checkbox,
  TableSortLabel,
  Box,
} from "@material-ui/core";
import { visuallyHidden } from "@material-ui/utils";

const users = [
  { name: "John", company: "ABC Ltd", city: "Xanadu", status: "XXX" },
  { name: "Mark", company: "XYZ Ltd", city: "Malibu", status: "YYY" },
];

// Table Header
const CustomTableHeader = (props) => {
  const {
    order,
    orderBy,
    onSelectAllOnClick,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;

  // sorting func
  const createSortHandler = (property) => (event) =>
    onRequestSort(event, property);

  return (
    <TableHead>
      <TableRow>
        {/* Checkbox Cell */}
        <TableCell padding='checkbox'>
          <Checkbox
            color='primary'
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllOnClick}
            inputProps={{ "aria-label": "Select all users" }}
          />
        </TableCell>

        {["Name", "Company", "City", "Status"].map((el) => (
          <TableCell
            key={el}
            sx={{ fontWeight: 600, fontSize: 20 }}
            align='center'
            sortDirection={orderBy === el ? order : false}>
            <TableSortLabel
              active={orderBy === el}
              direction={orderBy === el ? order : "asc"}
              onClick={createSortHandler(el)}>
              {el}
              {orderBy === el ? (
                <Box component='span' sx={visuallyHidden}>
                  {order === "desc" ? "sort: desc" : "sort: asc"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

const UserListTable = () => {
  // states
  const [userList, setUserList] = useState([]);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("company");
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    setUserList(users);
  }, []);

  // select all
  const handleSelectAllClick = (e) => {
    if (e.target.checked) {
      console.log("checked");
      // const newSelecteds = userList.map((n) => n.name);
      // setSelectedItems(newSelecteds);
      return;
    }
    // or empty the selected
    setSelectedItems([]);
  };

  // sort
  const handleRequestSort = (e, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return (
    <Paper sx={{ width: "100%", my: 2 }}>
      {/* On top of the header will be included later */}

      {/* Main table */}

      <TableContainer>
        <Table aria-labelledby='User List Table'>
          {/* Table Header */}
          <CustomTableHeader
            order={order}
            orderBy={orderBy}
            numSelected={selectedItems.length}
            onSelectAllOnClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={userList.length}
          />

          {/* Table Body */}
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default UserListTable;
