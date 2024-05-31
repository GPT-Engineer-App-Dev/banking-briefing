import { Box, Container, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" mt={5}>
      <Flex direction={{ base: "column", md: "row" }}>
        <Box flex="3" mr={{ md: 5 }}>
          <Heading as="h2" size="lg" mb={4}>
            Latest News
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/images/news1.jpg" alt="News 1" />
              <Box p={4}>
                <Heading as="h3" size="md">News Headline 1</Heading>
                <Text mt={2}>Brief description of the news article...</Text>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/images/news2.jpg" alt="News 2" />
              <Box p={4}>
                <Heading as="h3" size="md">News Headline 2</Heading>
                <Text mt={2}>Brief description of the news article...</Text>
              </Box>
            </Box>
          </VStack>
        </Box>
        <Box flex="1" mt={{ base: 5, md: 0 }}>
          <Heading as="h2" size="lg" mb={4}>
            Trending Topics
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box borderWidth="1px" borderRadius="lg" p={4}>
              <Heading as="h3" size="md">Trending Topic 1</Heading>
              <Text mt={2}>Brief description of the trending topic...</Text>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" p={4}>
              <Heading as="h3" size="md">Trending Topic 2</Heading>
              <Text mt={2}>Brief description of the trending topic...</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;