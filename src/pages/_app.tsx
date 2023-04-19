// "use client";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";

function root({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default root;
