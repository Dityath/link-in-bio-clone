import { CardBody, Card, Heading, CardFooter, Box, Button } from "@chakra-ui/react" 
import { Image } from "@chakra-ui/next-js"

interface CardsType {
  title: string;
  link: string;
  img: string;
}

const Cards = ({ title, link, img }: CardsType) => {
  return (
    <Card size="sm" display="flex" flexDir="column" alignItems="center">
      <CardBody>
        <Image
          src={img}
          alt={`Photo of ${title}`}
          borderRadius="md"
          width="190"
          height="190"
        />
        <Heading mt="5" size='md' textAlign="center">{title}</Heading>
      </CardBody>
      <CardFooter width="full">
        <Button width="full" variant='ghost' size="xs" colorScheme='blue'>
          Lihat
        </Button>
      </CardFooter>
    </Card>
  )
}

export default Cards
