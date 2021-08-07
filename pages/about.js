import Head from "next/head";
import { Typography, Link } from "@material-ui/core";

const About = () => {
  return (
    <div>
      <Head>
        <title>About | UI Lib</title>
      </Head>

      <Typography variant='h2'>About Me</Typography>

      <Typography variant='subtitle1' paragraph sx={{ maxWidth: "md" }}>
        Hi there! I'm Tutul, a Frontend Developer focused in Nextjs & Reactjs. I
        love to learn things by building projects.
        <br />
        Check my{" "}
        <Link
          href='https://github.com/tutuldevs'
          target='_blank'
          rel='noopener'
          underline='hover'
          color='purple'>
          GitHub profile
        </Link>{" "}
        to know more.
      </Typography>
    </div>
  );
};

export default About;
