import FormContainer from "../components/formContainer";
import FormikRegister from "../components/registerComponent";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Register() {
  const router = useRouter();
  return (
    <FormContainer handleClick={() => router.push("/")}>
      <Head>
        <title>register</title>
      </Head>
      <FormikRegister />
    </FormContainer>
  );
}
