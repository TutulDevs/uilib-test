import Head from "next/head";
import { Typography, Link } from "@material-ui/core";

const About = () => {
  return (
    <div>
      <Head>
        <title>About | Gull</title>
      </Head>

      <Typography variant="h2">About Me</Typography>

      <Typography variant="subtitle1" paragraph sx={{ maxWidth: "md" }}>
        Hi there! {`I'm`} Tutul, a Frontend Developer focused in Nextjs &
        Reactjs. I love to learn things by building projects.
        <br />
        Check my{" "}
        <Link
          href="https://github.com/tutuldevs"
          target="_blank"
          rel="noopener"
          underline="hover"
          color="purple"
        >
          GitHub profile
        </Link>{" "}
        to know more.
      </Typography>

      <Typography variant="subtitle1" paragraph sx={{ maxWidth: "md" }}>
        This is a test project for UI Lib for an intern position. I {`couldn't`}
        qualify for the position. Also it is a premium theme. So I {`can't`} add
        more component here.
      </Typography>
    </div>
  );
};

export default About;
