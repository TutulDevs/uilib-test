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
  TableBody,
} from "@material-ui/core";
import { visuallyHidden } from "@material-ui/utils";

import { BlockOutlined, CheckOutlined } from "@material-ui/icons";

const users = [
  {
    id: "user1",
    name: "John",
    company: "ABC Ltd",
    city: "Xanadu",
    status: Math.floor(Math.random() * 2),
  },
  {
    id: "user2",
    name: "Mark",
    company: "XYZ Ltd",
    city: "Malibu",
    status: Math.floor(Math.random() * 2),
  },
  {
    id: "user3",
    name: "Godhuli",
    company: "Gan Ltd",
    city: "Rang",
    status: Math.floor(Math.random() * 2),
  },
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
      <TableBody>
        {/* add later -> onClick, aria-checked, selected */}
        {userList.map((el) => (
          <TableRow key={el.id} hover role='checkbox' tabIndex={-1}>
            <TableCell padding='checkbox'>
              {/* add -> checked, inputProps */}
              <Checkbox color='purple' />
            </TableCell>
            {/* add -> id */}
            <TableCell component='th' scope='row'>
              {el.name}
            </TableCell>

            <TableCell>{el.company}</TableCell>
            <TableCell>{el.city} </TableCell>
            <TableCell>
              {el.status === 1 ? (
                <CheckOutlined
                  aria-label='user active'
                  fontSize='small'
                  color='secondary'
                />
              ) : (
                <BlockOutlined
                  aria-label='user banned'
                  fontSize='small'
                  color='error'
                />
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UserListTable;
