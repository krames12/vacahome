import Head from 'next/head'
import { Container, Heading } from "@chakra-ui/react"

import SearchBar from "../components/SearchBar"
import FilterBar from "../components/FilterBar"

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Heading paddingY="5">Welcome to VacaHome</Heading>
        <SearchBar />
        <FilterBar />
      </Container>
    </>
  )
}
