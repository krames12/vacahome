import Head from 'next/head'
import { useEffect, useState } from "react"
import { Container, Heading } from "@chakra-ui/react"

import listingData from "../data/houseData"

import SearchBar from "../components/SearchBar"
import FilterBar from "../components/FilterBar"
import ListingsGrid from "../components/ListingsGrid"

export default function Home() {
  const [listings, setListings] = useState(listingData)
  const [searchTerms, setSearchTerms] = useState("")
  const [activeFilters, setActiveFilters] = useState([])

  useEffect(() => {
    const filteredListings = listingData?.filter(({city, state}) => {
      return city?.includes(searchTerms) || state?.includes(searchTerms)
    })

    console.log("Filtered Listings", filteredListings);

    setListings(filteredListings)
    console.log(listings)
  }, [searchTerms, setSearchTerms])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Heading paddingY="5">Welcome to VacaHome</Heading>
        <SearchBar searchTerms={searchTerms} handleSearchUpdate={setSearchTerms} />
        <FilterBar activeFilters={activeFilters} setActiveFilters={setActiveFilters} />
        <ListingsGrid listings={listings} />
      </Container>
    </>
  )
}
