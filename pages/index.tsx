import { Avatar, Box, Heading, VStack, SimpleGrid } from '@chakra-ui/react'

import Layout from '@/components/layout'
import Cards from '@/components/cards'

import mock from '@/mockapi/mockapidefault.json' 

export default function Home() {
  return (
    <Layout>
      <VStack as='section' spacing={4} align='center'>
        <Avatar />
        <Box as="span">@Namamu</Box>
        <Heading as='h1' size='lg'>Pilih barang sesuai kategori</Heading>
      </VStack>
      <SimpleGrid as='section' columns={2} mt={10} spacing={5}>
        {mock.map((items) => (
          <Cards key={items.id} title={items.title} link={`/${items.id}`} img={items.img} />
        ))}
      </SimpleGrid>
    </Layout>
  )
}
