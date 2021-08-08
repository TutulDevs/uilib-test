import { List } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import NavItem from "./NavItem";

import { BiLineChart, BiUser } from "react-icons/bi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { IoMdSquareOutline } from "react-icons/io";
import { TiClipboard } from "react-icons/ti";
import { WiDayCloudy } from "react-icons/wi";
import { BsBoundingBox } from "react-icons/bs";
import { CgVinyl } from "react-icons/cg";
import { DriveFileMoveOutlined, TouchAppOutlined } from "@material-ui/icons";

const itemsArray = [
  {
    id: "i1",
    icon: <BiLineChart aria-label='Dashboard' />,
    title: "Dashboard",
    path: "/",
  },
  {
    id: "i2",
    icon: <HiOutlineDesktopComputer aria-label='List' />,
    title: "Table",
    path: "/list",
  },
  {
    id: "i3",
    icon: <IoMdSquareOutline aria-label='About' />,
    title: "About",
    path: "/about",
  },
  {
    id: "i4",
    icon: <TiClipboard aria-label='clipboard' />,
    title: "Files",
    path: "/clipboard",
  },
  {
    id: "i5",
    icon: <DriveFileMoveOutlined aria-label='Drive' />,
    title: "Drive",
    path: "/drive",
  },
  {
    id: "i6",
    icon: <TouchAppOutlined aria-label='Touch' />,
    title: "Touch",
    path: "/touch",
  },
  {
    id: "i7",
    icon: <BiUser aria-label='User' />,
    title: "User",
    path: "/user",
  },
  {
    id: "i8",
    icon: <WiDayCloudy aria-label='Weather' />,
    title: "Weather",
    path: "/weather",
  },
  {
    id: "i9",
    icon: <BsBoundingBox aria-label='Box' />,
    title: "Box",
    path: "/box",
  },
  {
    id: "i10",
    icon: <CgVinyl aria-label='Records' />,
    title: "Records",
    path: "/records",
  },
];

const ListStyle = styled(List)(({ theme }) => ({
  padding: 0,
  marginTop: theme.spacing(3.75),
}));

const NavItems = () => {
  return (
    <ListStyle>
      {itemsArray.map((el) => (
        <NavItem key={el.id} icon={el.icon} title={el.title} path={el.path} />
      ))}
    </ListStyle>
  );
};

export default NavItems;
