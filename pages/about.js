import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";

export default function AboutPage() {
  return (
    <Layout>
      <Head>
        <title>About Page</title>
      </Head>
      <h2>About page</h2>
      <Link href="/">
        <a>← Back to home</a>
      </Link>
    </Layout>
  );
}
