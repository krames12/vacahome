import { Container, Text } from "@chakra-ui/react"

import HouseCard from "../HouseCard"

const ListingsGrid = ({listings}) => (
  <Container padding="1">
    { listings.map( listing => (
      <HouseCard {...listing} />
    ) )}
  </Container>
)

export default ListingsGrid