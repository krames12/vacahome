import { Button, Flex, Spacer } from "@chakra-ui/react"
import { BsFilter } from "react-icons/bs";

const FilterBar = () => (
  <Flex paddingY="5">
    <Button 
      colorScheme="teal" 
      variant="solid" 
      marginRight="3"
    >
      House
    </Button>
    <Button 
      color="teal.500" 
      borderColor="teal.500" 
      variant="outline" marginRight="3"
    >
      Villa
    </Button>
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

export default FilterBar