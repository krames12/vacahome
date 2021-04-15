import { Box, Flex, Image, Spacer, Text } from "@chakra-ui/react"

const HouseCard = listing => {
  const {
    type,
    city,
    state,
    price,
    bedrooms,
    bathrooms,
    squareFt,
  } = listing

  return (
    <Box marginX="1" marginY="5">
      <Image 
        borderRadius="xl" 
        src="https://picsum.photos/700/350"
        alt="random placeholder image"
        marginY="2" 
      />
      <Flex>
        <Text paddingRight="2">Bed: {bedrooms}</Text>
        <Text paddingRight="2">Bath: {bathrooms}</Text>
        <Text paddingRight="2">Sq Ft: {squareFt}</Text>
        <Spacer />
        <Text paddingX="2">
          ${price} /per day
        </Text>
      </Flex>
      <Text paddingY="1">{city}, {state}</Text>
    </Box>
  )
}

const Price = price => (
  <Text colorScheme="teal">${price}</Text>
)

export default HouseCard