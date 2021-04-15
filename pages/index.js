import Head from 'next/head'
import { Heading } from "@chakra-ui/react"

import SearchBar from "../components/SearchBar"

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading>Welcome to VacaHome</Heading>
      <SearchBar />
    </>
  )
}
