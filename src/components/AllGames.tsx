import { useEffect, useState } from "react";
import ApiClient from "../Services/ApiClient";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";

function AllGames() {
  interface getGameResponse {
    count: number;
    next: String;
    results: game[];
  }
  interface game {
    id: number;
    name: String;
    background_image: string;
    rating : number;
    released : String;
  }

  let [games, setGames] = useState<game[]>([]);
  let [error, setError] = useState();

  useEffect(function () {
    ApiClient.get<getGameResponse>("/games")
      .then((Response) => setGames(Response.data.results))
      .catch((error) => setError(error.message));
  });
  return (
    <>
      {games.map((g) => (
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src={g.background_image}
            alt="Caffe Latte"
          />

          <Stack>
            <CardBody>
              <Heading size="md">{g.name}</Heading>
              <p>Released on : {g.released}</p>
              <Text color='blue.600' fontSize='2xl'>Rating: {g.rating}/5</Text>
        
            </CardBody>

            <CardFooter>
              <Button variant="solid" colorScheme="blue">
                Play Now
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      ))}
    </>
  );
}

export default AllGames;
