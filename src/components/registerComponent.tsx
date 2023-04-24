import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import {
  FormControl,
  FormErrorMessage,
  Input,
  Button,
  Checkbox,
  InputGroup,
  InputLeftElement,
  Heading,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import { Lock, UserFocus } from "phosphor-react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import { checkAccount, getAccounts } from "../store/account";

export default function FormikRegister() {
  const title = useColorModeValue("black", "white");

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

  const validateConfirmPassword = (pass: string, value: string): string => {
    let error;
    if (!value) {
      error = "confirm password is required";
    }
    if (!pass) {
      error = "password is required";
    }
    if (pass !== value) {
      error = "password not matched";
    }
    return error;
  };

  const handleSubmit = (values, actions) => {
    setTimeout(() => {
      const accountEnable = checkAccount(values.username, values.password);

      actions.setSubmitting(false);
    }, 1000);
  };

  return (
    <Formik initialValues={{ username: "", password: "", confirmPassword: "" }} onSubmit={handleSubmit}>
      {(props) => (
        <Form>
          <Heading as="h5" size="md" mb={4}>
            Welcome to oOo
          </Heading>
          <Box fontSize="10pt" color={title}>
            Register to create your first account and start exploring the photo gallery in oOo.
          </Box>

          <Field name="username" validate={validateUsername}>
            {({ field, form }) => (
              <FormControl mt="2rem" isInvalid={form.errors.username && form.touched.username}>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="cyan.600"
                    fontSize="1.2em"
                    children={<UserFocus size={24} weight="light" />}
                  />
                  <Input {...field} placeholder="username" />
                </InputGroup>
                <FormErrorMessage>{form.errors.username}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name="password" validate={validatePassword}>
            {({ field, form }) => (
              <FormControl mt={2} isInvalid={form.errors.password && form.touched.password}>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="cyan.600"
                    fontSize="1.2em"
                    children={<Lock size={24} weight="light" />}
                  />
                  <Input {...field} type="password" placeholder="password" />
                </InputGroup>
                <FormErrorMessage>{form.errors.password}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name="confirmPassword" validate={(value) => validateConfirmPassword(props.values.password, value)}>
            {({ field, form }) => (
              <FormControl mt={2} isInvalid={form.errors.confirmPassword && form.touched.confirmPassword}>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="cyan.600"
                    fontSize="1.2em"
                    children={<Lock size={24} weight="light" />}
                  />
                  <Input {...field} type="password" placeholder="password" />
                </InputGroup>
                <FormErrorMessage>{form.errors.confirmPassword}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Button mt={4} w="100%" colorScheme="teal" isLoading={props.isSubmitting} type="submit">
            Create Account
          </Button>

          <Box color="blue.200" textAlign="center" mt="2rem">
            <Link href="/login">you have account go login</Link>
          </Box>
        </Form>
      )}
    </Formik>
  );
}
