import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import {
  useContract,
  useMetamask,
  useDisconnect,
  useAddress,
} from "@thirdweb-dev/react";
import Login from '../components/Login'
import Loading from '../components/Loading';

const Home: NextPage = () => {
  const address = useAddress();
  const { contract, isLoading } = useContract(process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS);
  
  if (!address) return <Login />
  if (isLoading) return <Loading />

  return (
    <div className="bg-[#091B18] min-h-screen flex flex-col">
      <Head>
        <title>Lottery Dapp</title>
      </Head> 

      <Header />

    </div>
  )
}

export default Home
