import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  StackDivider,
  Box,
  Text,
} from "@chakra-ui/react";

function CardProfile() {
  const userData = JSON.parse(localStorage.getItem("app@user"));

  return (
    <Card>
      <CardHeader>
        <Heading size="md">Account</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Nome
            </Heading>
            <Text pt="2" fontSize="sm">
              {userData?.user_first_name}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Email
            </Heading>
            <Text pt="2" fontSize="sm">
              {userData?.user_email}
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default CardProfile;
