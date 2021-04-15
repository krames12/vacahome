import { Box, Button } from "@chakra-ui/react"

const FilterBar = () => (
  <Box paddingY="5">
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
  </Box>
)

export default FilterBar