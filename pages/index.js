import { useState, useEffect } from "react"
import Head from 'next/head'
import { Container, Heading, Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react"

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW="xl" spacing="6">
        <Heading margin="6">How much money do I need to make today to hit my yearly goal?</Heading>
        
        <InputGroup marginBottom="6">
          <InputLeftElement 
            pointerEvents="none"
            fontSize="1.5em"
            children="$"
          />
          <Input placeholder="What is your goal for the year?" size="lg" name="goal" />
        </InputGroup>
        <InputGroup marginBottom="6">
          <InputLeftElement 
            pointerEvents="none"
            fontSize="1.5em"
            children="$"
          />
          <Input placeholder="How much have you made so far?" size="lg" name="progress" />
        </InputGroup>

        <Text marginTop="6" fontSize="6xl" color="green.400" align="center">$0.00</Text>
      </Container>
    </>
  )
}
