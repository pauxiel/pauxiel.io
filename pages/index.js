import Head from 'next/head';
import Container from '@/components/Container';

import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Link,
  Code,
  Button
} from '@chakra-ui/react';

export default function Index() {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  };
  return (
    <Container>
      <Head>
        <title>Home- Obayuwana Paul</title>
      </Head>

      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        px={2}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading mb={2}>Hi, I'm Obayuwana Paul</Heading>
          <Text>I am a freelancer, web developer, frontend, backend</Text>
        </Flex>
      </Stack>
    </Container>
  );
}
