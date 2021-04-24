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
  const [filters, setFilters] = useState([])
  const [activeFilters, setActiveFilters] = useState([])

  const updateActiveFilters = tag => {
    setActiveFilters(activeFilters.includes(tag) 
      ? activeFilters.filter( filter => tag !== filter) 
      : [...activeFilters, tag])
  }

  useEffect(() => {
    setListings(listingData?.filter(({city, state, type}) => {
      const isMatchingSearch = city?.toLowerCase()?.includes(searchTerms.toLowerCase()) 
        || state?.toLowerCase()?.includes(searchTerms.toLowerCase()) 
      const isMatchingFilters = activeFilters.length === 0 ? true : activeFilters.includes(type)

      return isMatchingSearch && isMatchingFilters
    }))
  }, [activeFilters, searchTerms, setSearchTerms])

  useEffect(() => {
    const listingTypes = []
    listings.forEach(({type}) => {
      !listingTypes.includes(type) ? listingTypes.push(type) : null;
    })

    setFilters(listingTypes)
  }, [])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Heading paddingY="5">Welcome to VacaHome</Heading>
        <SearchBar searchTerms={searchTerms} handleSearchUpdate={setSearchTerms} />
        <FilterBar activeFilters={activeFilters} filters={filters} updateActiveFilters={updateActiveFilters}/>
        <ListingsGrid listings={listings} />
      </Container>
    </>
  )
}
