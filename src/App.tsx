import { Grid, GridItem } from '@chakra-ui/react';
import NavBarComponents from './components/NavbarComponents';
import AllGames from './components/AllGames';
import DrawerComponents from './components/DrawerComponents';

function App() {
  return (
    <>
      <Grid
        templateAreas={`"nav nav"
                        "side main"`}
        gridTemplateRows={"60px 1fr"}      // nav height + body height
        gridTemplateColumns={"250px 1fr"}  // sidebar width + main area
        height="100vh"
      >
        <GridItem area="nav" bg="orange">
          <NavBarComponents />
        </GridItem>

        <GridItem
          area="side"
          bg="green"
          padding="10px"
          borderRight="2px solid black"
        >
          <DrawerComponents/>
        </GridItem>

        <GridItem area="main" bg="yellow" padding="10px">
          <AllGames />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
