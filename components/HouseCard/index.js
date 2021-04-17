import { Box, Flex, Image, Spacer, Text } from "@chakra-ui/react"
import { IconContext } from "react-icons"
import { RiDoorOpenLine, RiLayoutColumnLine } from "react-icons/ri"
import { FaShower } from "react-icons/fa"

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
      <IconContext.Provider value={{color: "rgb(49, 151, 149)"}}>
        <Flex alignItems="center">
          <RiDoorOpenLine />
          <Text color="gray.600" paddingLeft="2" paddingRight="4" display="flex" alignItems="center">
            {bedrooms}
          </Text>
          <FaShower />
          <Text color="gray.600" paddingLeft="2" paddingRight="4" display="flex" alignItems="center">
            {bathrooms}
          </Text>
          <RiLayoutColumnLine />
          <Text color="gray.600" paddingLeft="2" paddingRight="4" display="flex" alignItems="center">
            {squareFt} /sq ft
          </Text>
          <Spacer />
          <Text paddingX="2">
            ${price} /per day
          </Text>
        </Flex>
      </IconContext.Provider>
      <Text paddingY="1">{city}, {state}</Text>
    </Box>
  )
}

const Price = price => (
  <Text colorScheme="teal">${price}</Text>
)

export default HouseCard
