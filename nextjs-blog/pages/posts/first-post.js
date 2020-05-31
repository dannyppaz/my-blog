/* The Link component enables client-side navigation between two pages in the same Next.js app.
Client-side navigation means that the page transition happens using JavaScript, which is faster than the default navigation done by the browser.

*/
import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post Header</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to homie</a>
        </Link>
      </h2>
    </Layout>
  );
}
