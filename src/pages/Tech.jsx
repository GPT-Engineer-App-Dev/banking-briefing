import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Tech = () => {
  return (
    <Container maxW="container.xl" mt={5}>
      <Heading as="h2" size="lg" mb={4}>
        Tech News
      </Heading>
      <Text>Content for Tech News...</Text>
      <Box mt={4}>
        <Link to="/">Back to Home</Link>
      </Box>
    </Container>
  );
};

export default Tech;