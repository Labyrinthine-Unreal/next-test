import Head from "next/head"
import { useMoralis } from "react-moralis"
import { Flex,Text,Box,Tabs,TabPanel,TabList,Tab,TabPanels, Button } from "@chakra-ui/react"
import Header from "../components/Header"
import Profile from "../components/Profile"
import MintCards from "../components/MintComponents/MintCards"
import Footer from "../components/Footer"

export default function Home() {
  const {isAuthenticated, authenticate, user, logout, isLoggingOut} =  useMoralis()
  console.log(isAuthenticated)
  if(!isAuthenticated){
    return(
      <>
      
        <Head>
          <title>
            Login | Dashboard
          </title>
        </Head>
        <Flex 
        direction="column" 
        alignItems="center"
        width="100vw"
        height="50vw"
        bgGradient="linear(to-br, teal.400,purple.300)"
        >
        <Box py={30} textAlign='center'>
          <Text fontSize="5xl" fontWeight="bold" color="white">
          Tauros Dashboard</Text>
              <Button colorScheme="purple"
              onClick={()=>authenticate({
                signingMessage:"Tauros SignIN"
              })}>
                Metamask Login
                </Button>
        </Box>
            <MintCards />
        </Flex>
        <Footer />
      </>
    )
  }
  return (
    <>

    <Head>
      <title>
        Tauros Dashboard
      </title>
    </Head>
    <Flex direction="column" width="100vw" height="100vh">
      <Header user={user} logout={logout} isLoggingOut={isLoggingOut}/>
      <Box Flex="1" bg="purple.100" px="44" py="20"></Box>

      <Tabs size="lg" colorScheme="pink" align="center" variant="enclosed">
        <TabList>
          <Tab fontWeight="bold">Profile</Tab>
          <Tab fontWeight="bold">Balance</Tab>
          <Tab fontWeight="bold">Transactions</Tab>
          <Tab fontWeight="bold">NFTs</Tab>
          <Tab fontWeight="bold">send ETH</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Profile />
          </TabPanel>
          <TabPanel>Balance</TabPanel>
          <TabPanel>Transactions</TabPanel>
          <TabPanel>NFTs</TabPanel>
          <TabPanel>Send ETH</TabPanel>
        </TabPanels>
      </Tabs>


    </Flex>

    </>
  )
}
