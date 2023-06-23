import { Box, BoxProps } from '@chakra-ui/react'
import Navbar from '../navbar';

interface LayoutType extends BoxProps {
  children: React.ReactNode;
}

const Layout = ({children, ...others}: LayoutType) => {
  return (
    <>
      <Navbar />
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box maxW="md" w="full" {...others}>
          {children} 
        </Box>
      </Box>
    </>
  )
}

export default Layout

