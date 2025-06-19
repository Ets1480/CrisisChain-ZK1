import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>CrisisChain-ZK</title>
      </Head>
      <main>
        <h1>🚨 CrisisChain-ZK</h1>
        <p>Secure, transparent aid distribution powered by ZK & Cardano.</p>

        <form>
          <input type="text" placeholder="Enter your identity..." />
          <button type="submit">Register Identity</button>
        </form>

        <form>
          <input type="text" placeholder="Enter proof..." />
          <button type="submit">Verify Proof</button>
        </form>
      </main>
    </>
  );
}
