import FormContainer from "../components/formContainer";
import FormikLogin from "../components/loginComponent";
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
