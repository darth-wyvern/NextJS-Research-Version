import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import {
  FormControl,
  FormErrorMessage,
  Input,
  Button,
  Checkbox,
  InputGroup,
  InputLeftElement,
  Box,
  Heading,
  useColorModeValue,
  InputRightElement,
} from "@chakra-ui/react";
import { Eye, EyeSlash, Lock, UserFocus } from "phosphor-react";
import { useRouter } from "next/router";
import Link from "next/link";
import { checkAccount, setCurrent } from "../store/account";

export default function FormikLogin() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(true);
  const [showEye, setShowEye] = useState(false);
  const bgInput = useColorModeValue("gray.100", "whiteAlpha.100");

  interface FormValues {
    username: string;
    password: string;
    remember: boolean;
  }

  const validatePassword = (value: string): string => {
    let error;
    if (!value) {
      error = "password is required";
    } else if (value.length < 6) {
      error = "password have to than 6 character";
    } else if (value.length > 24) {
      error = "password have to smaller 24 character";
    }
    return error;
  };

  const validateUsername = (value: string): string => {
    let error;
    if (!value) {
      error = "username is required";
    } else if (value.length < 6) {
      error = "username have to than 6 character";
    } else if (value.length > 24) {
      error = "username have to smaller 24 character";
    }
    return error;
  };

  const handleSubmit = (values: FormValues, actions) => {
    setTimeout(() => {
      const loginSuccess = checkAccount(values.username, values.password);
      if (loginSuccess) {
        setCurrent(values.username, values.password);
        router.push("/");
      }

      actions.setSubmitting(false);
    }, 1000);
  };

  return (
    <Formik initialValues={{ username: "", password: "", remember: false }} onSubmit={handleSubmit}>
      {(props) => (
        <Form>
          <Heading as="h5" size="md">
            Hello and welcome back!
          </Heading>
          <Box fontSize="11pt">Please log in to continue.</Box>

          <Field name="username" validate={validateUsername}>
            {({ field, form }) => (
              <FormControl mt="2rem" isInvalid={form.errors.username && form.touched.username}>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="cyan.600"
                    fontSize="1.2em"
                    children={<UserFocus size={24} weight="bold" />}
                  />
                  <Input
                    {...field}
                    placeholder="username"
                    border="none"
                    outline="none"
                    rounded="0.5rem"
                    bgColor={bgInput}
                  />
                </InputGroup>
                <FormErrorMessage>{form.errors.username}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name="password" validate={validatePassword}>
            {({ field, form }) => (
              <FormControl mt="1rem" isInvalid={form.errors.password && form.touched.password}>
                <InputGroup onMouseEnter={() => setShowEye(true)} onMouseLeave={() => setShowEye(false)}>
                  <InputLeftElement
                    pointerEvents="none"
                    color="cyan.600"
                    fontSize="1.2em"
                    children={<Lock size={24} weight="bold" />}
                  />
                  <Input
                    {...field}
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    border="none"
                    outline="none"
                    rounded="0.5rem"
                    bgColor={bgInput}
                  />
                  {showEye ? (
                    <InputRightElement
                      onClick={() => setShowPassword(!showPassword)}
                      pointerEvents="all"
                      color="white.600"
                      fontSize="1.2em"
                    >
                      {showPassword ? <Eye size={18} weight="bold" /> : <EyeSlash size={18} weight="bold" />}
                    </InputRightElement>
                  ) : (
                    <></>
                  )}
                </InputGroup>

                <FormErrorMessage>{form.errors.password}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name="remember">
            {({ field }) => (
              <FormControl mt={4} textAlign="right">
                <Checkbox {...field}>remember</Checkbox>
              </FormControl>
            )}
          </Field>

          <Button mt={4} w="100%" colorScheme="teal" isLoading={props.isSubmitting} type="submit">
            Submit
          </Button>

          <Box textAlign="center" mt="2rem" color="blue.200">
            <Link href="/register">register a account</Link>
          </Box>
        </Form>
      )}
    </Formik>
  );
}
