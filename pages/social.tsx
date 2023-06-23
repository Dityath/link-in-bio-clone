import { Avatar, Box, Heading, VStack, Text, Button, SimpleGrid } from '@chakra-ui/react'

import Layout from '@/components/layout'
import Cards from '@/components/cards'

import { UilInstagram, UilTwitter, UilFacebook, UilYoutube } from '@iconscout/react-unicons'

const Social = () => {
  return (
    <Layout>
      <VStack as='section' spacing={4} align='center'>
        <Avatar />
        <Box as="span">@Namamu</Box>
        <Heading as='h1' size='lg'>Pilih barang sesuai kategori</Heading>
        <Text>Namamu</Text>
      </VStack>
      <VStack as='section' spacing={4} mt={10} align='center'>
        <Button w='full' leftIcon={<UilInstagram/>}>Instagram</Button>
        <Button w='full' leftIcon={<UilTwitter/>}>Twitter</Button>
        <Button w='full' leftIcon={<UilFacebook/>}>Facebook</Button>
        <Button w='full' leftIcon={<UilYoutube/>}>Youtube</Button>
      </VStack>
    </Layout>
  )
}

export default Social
