import {  HStack, Image, Text } from '@chakra-ui/react'
import logo1 from "../assets/logo1.png"
import SwitchComponent from './SwitchComponents';
// import DrawerComponents from './DrawerComponents';
function NavBarComponents(){
    return(
        <>
        <HStack>
            <Image boxSize={"50px"} src={logo1}></Image>
            <Text>Game-X</Text>
            <SwitchComponent></SwitchComponent>
        </HStack>
        </>
    )
}
export default NavBarComponents;