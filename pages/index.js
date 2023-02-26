import Head from "next/head";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Zain Page</title>
      </Head>
      <h1>Zain Page</h1>
      <p>This is a sample page for Zain</p>
      <Link href="/about">About</Link>
    </>
  );
}
