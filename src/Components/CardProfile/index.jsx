import React from 'react';
//import './style.css';
import { Card, CardHeader, CardBody, CardFooter, Divider, flexbox, Heading, Stack, StackDivider, Box, Text } from '@chakra-ui/react'

// import { Container } from './styles';

 function CardProfile() {
  return (
    <Card>
  <CardHeader>
    <Heading size='md'>Account</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Nome
        </Heading>
        <Text pt='2' fontSize='sm'>
          Diego Gonçalves de Medeiros
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Email
        </Heading>
        <Text pt='2' fontSize='sm'>
          email.teste@gmail.com
        </Text>
      </Box>
      
    </Stack>
  </CardBody>
</Card>
    
    
  );
}

export default CardProfile;