import React, { useState } from 'react';
import { Box, Button, Stack, Text, Input } from '@chakra-ui/react';

const BalanceTracker = () => {
  const [balance, setBalance] = useState(0);
  const [expense, setExpense] = useState(0);

  const handleAddIncome = () => {
    // Atualiza o saldo com o valor de entrada
    setBalance(balance + parseFloat(income));
  };

  const handleAddExpense = () => {
    // Atualiza o saldo deduzindo o valor da despesa
    setBalance(balance - parseFloat(expense));
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="md">
      <Stack spacing={4}>
        <Text fontSize="xl" fontWeight="bold">
          Saldo: R$ {balance.toFixed(2)}
        </Text>
        <Input
          placeholder="Valor de entrada"
          type="number"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
        />
        <Button onClick={handleAddIncome} colorScheme="green">
          Adicionar Entrada
        </Button>
        <Input
          placeholder="Valor da despesa"
          type="number"
          value={expense}
          onChange={(e) => setExpense(e.target.value)}
        />
        <Button onClick={handleAddExpense} colorScheme="red">
          Adicionar Despesa
        </Button>
      </Stack>
    </Box>
  );
};
