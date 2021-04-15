import Head from 'next/head'
import { Container, Heading } from "@chakra-ui/react"

import listingData from "../data/houseData"

import SearchBar from "../components/SearchBar"
import FilterBar from "../components/FilterBar"
import ListingsGrid from "../components/ListingsGrid"

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
        <ListingsGrid listings={listingData} />
      </Container>
    </>
  )
}
