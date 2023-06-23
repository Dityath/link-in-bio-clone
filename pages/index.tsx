import { Avatar, Box, Heading, VStack, SimpleGrid } from '@chakra-ui/react'
import Layout from '@/components/layout'
import Cards from '@/components/cards'

export default function Home() {
  return (
    <Layout>
      <VStack as='section' spacing={4} align='center'>
        <Avatar />
        <Box as="span">@Namamu</Box>
        <Heading as='h1' size='lg'>Pilih barang sesuai kategori</Heading>
      </VStack>
      <SimpleGrid as='section' columns={2} mt={10} spacing={5}>
        <Cards title="New Jeans" link="/" img="https://source.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
        <Cards title="New Jeans" link="/" img="https://source.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
        <Cards title="New Jeans" link="/" img="https://source.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
        <Cards title="New Jeans" link="/" img="https://source.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
        <Cards title="New Jeans" link="/" img="https://source.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
        <Cards title="New Jeans" link="/" img="https://source.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
      </SimpleGrid>
    </Layout>
  )
}
