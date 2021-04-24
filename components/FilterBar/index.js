import { useEffect } from "react"
import { Box, Button, Checkbox, Flex, Spacer } from "@chakra-ui/react"
import { BsFilter } from "react-icons/bs"

const FilterBar = ({activeFilters, filters, updateActiveFilters}) => {
  // Use this to update the button variants.
  // useEffect(() => {
    
  // }, [filters, updateActiveFilters])

  return (
    <Flex paddingY="5">
      { filters.map((filter, index) => (
        <Button 
          key={`filter-button-${index}`}
          colorScheme="teal" 
          variant={activeFilters?.includes(filter) ? "solid" : "outline"} 
          marginRight="3"
          value={filter}
          onClick={ () => updateActiveFilters(filter)}
        >
          {`${filter[0].toUpperCase()}${filter.slice(1)}`}
        </Button>
      ))}
      <Spacer />
      <Button 
        borderColor="teal.500" 
        color="teal.500" 
        padding="0"
        variant="outline"
      >
        <BsFilter />
      </Button>
    </Flex>
  )
}

export default FilterBar