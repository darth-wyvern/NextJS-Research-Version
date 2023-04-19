import FormContainer from "./formContainer";
import FormikRegister from "./registerComponent";
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
