import Head from 'next/head'
import Calculator from '../components/calculator'
import Coupon from '../components/Coupon'

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen text-center">
      <Head>
        <title>stell dragon calc</title>
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <main className="flex-1">
        <h1 className="text-4xl mt-14">stella dradon calculator</h1>
        <p className="mt-3 text-xl">test ver</p>
      <Calculator />
      <Coupon />
      </main>
    </div>
  )
}
