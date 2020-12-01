import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import layoutStyles from "../../components/layout.module.scss";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post Page</title>
      </Head>
      <div>
        <h1>First Post</h1>
        <div className={layoutStyles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
