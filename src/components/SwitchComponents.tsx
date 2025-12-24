import { Switch,Stack,useColorMode } from "@chakra-ui/react";

function SwitchComponent(){
        let { colorMode, toggleColorMode} = useColorMode();
        return(
         <>
         <Stack align='center' direction='row'>
         <Switch colorScheme = "teal" size='lg' onChange = {toggleColorMode} /></Stack>
         </>
    )
}

export default SwitchComponent;