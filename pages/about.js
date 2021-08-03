import Head from "next/head";
import Link from "next/link";

const About = () => {
  return (
    <div>
      <Head>
        <title>About Page</title>
      </Head>

      <h1>About Page</h1>
      <Link href='/'>Home Page</Link>
    </div>
  );
};

export default About;
