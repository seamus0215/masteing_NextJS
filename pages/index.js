import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.scss";
import { getSortedPostsData } from "../lib/posts";

export default function Home({  allPostsData  }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm Seamus. I'm a self taught software engineer in aspiration
          and i hope to change the world for the good one day with one of my
          applications.{" "}
          <Link href="/about">
            <a>For more click here.</a>
          </Link>
        </p>
        <p>
          This is a sample website - you’ll be building a site like this on{" "}
          <Link href="/posts/first-post">
            <a>check out posts.</a>
          </Link>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {/* {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))} */}
          {allPostsData.map((postData) => {
            const {id, date, title} = postData
            return (
              <li className={utilStyles.listItem} key={id}>
                {title}
                <br />
                {id}
                <br />
                {date}
              </li>
            );
          })}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();;
  return {  props: {  allPostsData  }  };;
}