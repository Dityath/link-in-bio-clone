import { Box, Switch, Text, useColorMode } from '@chakra-ui/react'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box display="flex" justifyContent="end" alignItems="center">
      <Text fontSize='xs'>
        Use {colorMode === 'light' ? 'Dark' : 'Light'} mode
      </Text>
      <Switch onChange={toggleColorMode} /> 
    </Box>
  )
}

export default Navbar
