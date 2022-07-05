import { Box, SimpleGrid } from "@chakra-ui/react"
import properties from "../components/MintComponents/properties"
import MintAnimation from "../components/MintComponents/MintAnimation"
import MintTitle from "../components/MintComponents/MintTitle"
import MintPrice from "../components/MintComponents/MintPrice"
import MintButton from "../components/MintComponents/MintButton"
import Footer from "../components/Footer"

export default function TaurosPage() {
    const item = properties[0];
            
    return (
        <>
            <SimpleGrid
            columns={{md: 2, sm: 1}} 
                width="100vw"
                height="50vw"
                bgGradient="linear(to-br, teal.400,purple.300)"
            >
                <Box pt={100} align='right' pr={10}>
                    <Box maxW='260' borderWidth='1px' bg='white' borderRadius='lg' overflow="hidden">
                    <MintAnimation 
                        src={item.imageUrl}
                        alt={item.imageAlt}
                    />
                    <Box p='6' h={50}>
                        <MintTitle 
                            title={item.title}
                        />
                        <Box h={10} textAlign='center' as='span' color='gray.600' fontSize='smaller'>
                            <MintPrice
                                presalePrice={item.presalePrice}
                                salePrice={item.salePrice}
                            />
                        </Box>
                    </Box>
                    <Box display='flex' h={20} py={12} justifyContent='center'>
                        <MintButton />
                    </Box>
                </Box>
                </Box>
                <Box maxW='400' pt={100} pl={10} align='left'>
                    <Box 
                        mt='1'
                        fontWeight='semibold'
                        fontSize='sm'
                        as='h6'
                        lineHeight='tight'
                        textAlign='left'
                        verticalAlign='baseline'
                    >
                        {item.description}
                    </Box>
                </Box>
            </SimpleGrid>
            <Footer />
        </>
    )
}