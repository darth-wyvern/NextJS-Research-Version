import FormContainer from "./formContainer";
import FormikLogin from "./loginComponent";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Login() {
  const router = useRouter();
  return (
    <FormContainer handleClick={() => router.push("/")}>
      <Head>
        <title>login</title>
      </Head>
      <FormikLogin />
    </FormContainer>
  );
}
