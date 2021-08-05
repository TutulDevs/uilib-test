import { Typography } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

const ListStyle = styled("li")(({ theme }) => ({
  marginBottom: theme.spacing(1.5),
}));

const LinkIconStyle = styled("span")(({ theme }) => ({
  lineHeight: 0,
  "& svg": {
    fontSize: "1.5rem",
  },
}));

const LinkTitleStyle = styled(Typography)(({ theme }) => ({
  fontSize: "0.75rem",
}));

const NavItem = ({ path, icon, title }) => {
  const { pathname } = useRouter();

  const LinkStyle = styled("a")(({ theme }) => ({
    display: "grid",
    gap: `0 ${theme.spacing(0.5)}`,
    placeItems: "center",
    cursor: "pointer",
    color: theme.paper,
    backgroundColor: pathname === path && theme.palette.purple.light,
    minHeight: theme.mixins.toolbar.minHeight,
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1),
    transition: "background 0.3s ease",
    "&:hover": {
      backgroundColor: theme.palette.purple.light,
      transition: "background 0.3s ease",
    },
  }));

  return (
    <ListStyle>
      <Link href={path}>
        <LinkStyle>
          <LinkIconStyle>{icon}</LinkIconStyle>

          {pathname === path && (
            <LinkTitleStyle variant='subtitle2' component='span'>
              {title}
            </LinkTitleStyle>
          )}
        </LinkStyle>
      </Link>
    </ListStyle>
  );
};

export default NavItem;
