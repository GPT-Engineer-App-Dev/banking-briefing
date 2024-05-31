import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const World = () => {
  return (
    <Container maxW="container.xl" mt={5}>
      <Heading as="h2" size="lg" mb={4}>
        World News
      </Heading>
      <Text>Content for World News...</Text>
      <Box mt={4}>
        <Link to="/">Back to Home</Link>
      </Box>
    </Container>
  );
};

export default World;