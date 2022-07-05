import { SimpleGrid } from "@chakra-ui/react"
import CardEntry from "./CardEntry"
import properties from "./properties"

function CreateEntry(property) {
    return (
        <CardEntry 
            id={property.id}
            image={property.imageUrl}
            alt={property.imageAlt}
            title={property.title}
            presalePrice={property.presalePrice}
            salePrice={property.salePrice}
        />
    )
}

export default function MintCard() {
    return (
        <SimpleGrid columns={{lg: 3, md: 2, sm: 1}} spacingX={10} spacingY={10}>
            {properties.map(CreateEntry)}
        </SimpleGrid>
    )
}