import { Input } from "@chakra-ui/react"

const SearchBar = ({searchTerms, handleSearchUpdate}) => {

  return (
    <Input 
      placeholder="Search via City"
      onChange={ event => handleSearchUpdate(event.target.value)} 
      value={searchTerms}
      borderTop="none"
      borderX="none"
      borderRadius="0"
      padding
    />
  )
}

export default SearchBar