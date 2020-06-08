import Head from "next/head";
import Layout, { siteTitle } from "components/layout";
import utilStyles from "styles/utils.module.css";
import { getSortedPostsData } from "lib/posts";
import Link from "next/link";
import Date from "components/date";
import { useDispatch, useSelector } from "react-redux";

import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
} from "../redux/actions/counterActions";
import { useCallback } from "react";

export default function Home({ allPostsData }) {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const incrementCounter = useCallback(
    () => dispatch({ type: INCREMENT_COUNTER }),
    [dispatch]
  );
  const decrementCounter = useCallback(
    () => dispatch({ type: DECREMENT_COUNTER }),
    [dispatch]
  );

  console.log("counter ======= ", counter);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am Danny Dao</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section>
        <h1>Change the counter</h1>
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={decrementCounter}>Decrement</button>
        <p>Counter: {counter}</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
