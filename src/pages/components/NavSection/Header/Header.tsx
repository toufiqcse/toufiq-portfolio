import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitch,
  FaTwitter,
} from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <Head>
        <title>toufiq portfolio header</title>
      </Head>
      <main className="max-w-full">
        <div className="flex justify-center items-center gap-2">
          <Link href={""}>
            <FaFacebook />
          </Link>
          <Link href={""}>
            <FaInstagram />
          </Link>
          <Link href={""}>
            <FaLinkedin />
          </Link>
          <Link href={""}>
            <FaGithub />
          </Link>
          <Link href={""}>
            <FaTwitter />
          </Link>
        </div>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};

export default Header;
