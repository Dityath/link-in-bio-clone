import { Box, Switch, Text, useColorMode, useDisclosure, Button, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter, Stack } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { RiShoppingCart2Line as UilShoppingCartAlt, RiTeamLine as UilUsersAlt } from "react-icons/ri";
import Link from 'next/link'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box m="auto" w="full" maxW="md" display="flex" justifyContent="start" alignItems="center">
      <Button onClick={onOpen} w={10} h={10} variant="ghost">
        <HamburgerIcon />
      </Button>

      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Lihat menu</DrawerHeader>

          <DrawerBody>
            <Stack direction="column" spacing={3}>
              <Button as={Link} href="/" leftIcon={<UilShoppingCartAlt/>} colorScheme="blue" variant="outline" width="full">Ayo Belanja</Button>
              <Button as={Link} href="/social" leftIcon={<UilUsersAlt/>} colorScheme="blue" variant="outline" width="full">Sosial</Button>
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Text fontSize='xs' mr="2">
              Gunakan mode {colorMode === 'light' ? 'Gelap' : 'Terang'}
            </Text>
            <Switch isChecked={colorMode === 'light' ? true : false} onChange={toggleColorMode} />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export default Navbar
