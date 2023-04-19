import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { setAccounts } from "../store/account";
import {
  Box,
  Flex,
  FormControl,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { MagnifyingGlass } from "phosphor-react";

const IndexPage = () => {
  const router = useRouter()
  const [api, getApi] = useState();
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://6437e2fdc1565cdd4d6066c3.mockapi.io/api/v1/account");
      getApi(result.data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    setAccounts(api);
  }, [api]);

  if (!api) return (<div>loading</div>)

  const handleSubmit = (values) => {
    const fetchData = async () => {
      const unsplashURL = `https://api.unsplash.com`;
      const unsplashAccessKey = `otaK-XvVBAkm1iBO2fIH3nL9ijFNmsQ1dOy8M29oI1w`;
      const getRequestHeaders = () => ({
        "Content-Type": "application/json",
        Authorization: `Client-ID ${unsplashAccessKey}`,
      });
      const url = `${unsplashURL}/search/photos?query=${values.query}&page=1&per_page=30`;
      const response = await fetch(url, {
        method: "GET",
        headers: getRequestHeaders(),
        mode: "cors",
      });
      const value = await response.json();
      setImages(value.results);
    };

    fetchData();
  };

  return (
    <Flex flex="1" flexDir="column">
      <Flex w="100%">
        <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
          {(props) => (
            <Form style={{ width: "100%", marginBottom: "1rem" }}>
              <Field name="query">
                {({ field, form }) => (
                  <FormControl>
                    <InputGroup>
                      <InputLeftElement
                        children={
                          <button>
                            <MagnifyingGlass size={24} weight="bold" onClick={handleSubmit} />
                          </button>
                        }
                      />
                      <Input {...field} placeholder="input your image ___" />
                    </InputGroup>
                  </FormControl>
                )}
              </Field>
            </Form>
          )}
        </Formik>
      </Flex>

      <Box overflow="auto" style={{ columns: 4 }}>
        {images ? (
          images.map((image, index) => (
            <Box key={index} display="inline-block">
              <Image src={image.urls.small} alt="" />
            </Box>
          ))
        ) : (
          <div>loading</div>
        )}
      </Box>
    </Flex >
  );
};

export default IndexPage; // call api, giao diện, formik //
