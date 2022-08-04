import { Box, Flex, Text, Input, Button } from "@chakra-ui/react";
import NextImage from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { auth } from "../lib/mutations";

const AuthForm: FC<{ mode: any }> = ({ mode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsLoading(true);

    await auth(mode, { email, password });
    setIsLoading(false);
    router.push("/");
  };
  return (
    <Box height="100vh" width="100vw" bg="black" textColor="white">
      <Flex
        justify="center"
        align="center"
        height="100px"
        borderBottom="white 1px solid"
      >
        <NextImage src="/logo.svg" height={60} width={120} />
      </Flex>
      <Flex justify="center" align="center" height="calc(100vh - 100px)">
        <Box padding="50px" bg="gray.900" borderRadius="6px">
          <Text color="white" fontSize="35px" align="center" paddingY="10px">
            {mode == "signin" ? "SignIn" : "SignUp"}
          </Text>
          <form onSubmit={handleSubmit}>
            <Input
              placeholder="email"
              type="email"
              marginY="10px"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="password"
              type="password"
              marginY="10px"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              bg="green.500"
              marginY="10px"
              isLoading={isLoading}
              sx={{ "&:hover": { bg: "green.300" } }}
            >
              {mode == "signin" ? "SignIn" : "SignUp"}
            </Button>
            <Flex justify="center" align="center">
              <Text color="gray" fontSize="16px">
                {mode == "signup"
                  ? "Already have an account?"
                  : "Not yet member?"}
              </Text>
              <Text color="lightblue" fontSize="16px">
                <a href={`/${mode == "signup" ? "signin" : "signup"}`}>
                  {mode == "signup" ? "Signin" : "Signup"}
                </a>
              </Text>
            </Flex>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default AuthForm;
