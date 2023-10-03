import { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { AiOutlineStock } from "react-icons/ai";
import { Earnings } from "../../Components/Earnings";
import { Link } from "react-router-dom";
import "./style.css";

const BalanceTracker = () => {
  const [balance, setBalance] = useState(0);

  const handleAddIncome = () => {
    setBalance(balance + parseFloat(income));
  };

  const handleAddExpense = () => {
    setBalance(balance - parseFloat(expense));
  };

  return (
    <Box className="box-balances">
      <Box className="box-balances-left">
        <Box color={"gray"} fontWeight={"bold"} className="wellcome">
          Olá, Fulano
        </Box>
        <Box className="values">
          <Box className="box-saldo">
            <Text fontSize="12px" color="gray">
              Saldo:
            </Text>
            <Text fontSize="lg" fontWeight="bold" color="gray">
              R$ {balance.toFixed(2)}
            </Text>
          </Box>
          <Box className="box-rendimento">
            <Text fontSize="12px" color="gray">
              Rendimento mensal:
            </Text>
            <Text fontSize="lg" fontWeight="bold" color="green">
              R$ {balance.toFixed(2)}
            </Text>
          </Box>
          <Box className="box-despesas">
            <Text fontSize="12px" color="gray">
              Despesas mensal:
            </Text>
            <Text fontSize="lg" fontWeight="bold" color="red">
              R$ {balance.toFixed(2)}
            </Text>
          </Box>
          <Link to="/charts">
            <Box className="ver-relatorios">
              <AiOutlineStock size={"35"} />

              <Text fontSize="12px" color="gray">
                Ver relatórios:
              </Text>
            </Box>
          </Link>
        </Box>
      </Box>

      <Box className="box-divider"></Box>

      <Box className="box-balances-right">
        <h2>Operações</h2>
        <Box className="operations">
          <Earnings />
        </Box>
      </Box>
    </Box>
  );
};

export default BalanceTracker;
