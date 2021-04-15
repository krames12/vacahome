import { useState } from "react"
import { Input } from "@chakra-ui/react"

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("")

  return (
    <Input 
      placeholder="Search via City"
      onChange={ event => setSearchValue(event.target.value)} 
      value={searchValue}
      borderTop="none"
      borderRight="none"
      borderLeft="none"
      borderRadius="0"
    />
  )
}

export default SearchBar