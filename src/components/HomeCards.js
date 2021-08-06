import { Box } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import { FiUserPlus } from "react-icons/fi";
import { RiHandCoinLine } from "react-icons/ri";
import { AiOutlinePieChart } from "react-icons/ai";
import { GiMoneyStack } from "react-icons/gi";
import HomeCard from "./HomeCard";

const cardItems = [
  {
    colorId: "purple",
    icon: <FiUserPlus />,
    title: "New Leads",
    amount: "205",
  },
  {
    colorId: "blue",
    icon: <RiHandCoinLine />,
    title: "Sales",
    amount: "$4021",
  },
  {
    colorId: "green",
    icon: <AiOutlinePieChart />,
    title: "Orders",
    amount: "80",
  },
  {
    colorId: "orange",
    icon: <GiMoneyStack />,
    title: "Expense",
    amount: "$1200",
  },
];

const ContainerStyle = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  [theme.breakpoints.up("xs")]: {
    gap: `${theme.spacing(3)} ${theme.spacing(5)}`,
    gridTemplateColumns: "repeat(1, 1fr)",
  },
  [theme.breakpoints.up("sm")]: {
    gap: `${theme.spacing(4)} ${theme.spacing(5)}`,
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  [theme.breakpoints.up("lg")]: {
    gridTemplateColumns: "repeat(4, 1fr)",
  },
}));

const HomeCards = () => {
  return (
    <ContainerStyle>
      {cardItems.map((el) => (
        <HomeCard
          key={el.colorId}
          icon={el.icon}
          title={el.title}
          amount={el.amount}
        />
      ))}
    </ContainerStyle>
  );
};

export default HomeCards;

// padding: `${theme.spacing(3.75)} ${theme.spacing(2.5)}`,
