import { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import { AiOutlineStock } from "react-icons/ai";
import { Earnings } from "../../Components/Earnings";
import { Link } from "react-router-dom";
import "./style.css";

const BalanceTracker = () => {
  const [balance, setBalance] = useState(0);
  const [rendimento, setRendimento] = useState(0);
  const [despesas, setDespesas] = useState(0);

  const user = JSON.parse(localStorage.getItem("app@user"));
  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem("transactions")) || []
  );
  useEffect(() => {
    console.log("useEffect de dentro de BottonExpense");
    setRendimento(
      transactions.reduce((total, transaction) => {
        if (transaction.type === "rendimento") {
          return total + parseInt(transaction.value);
        }
        return total;
      }, 0)
    );
    setDespesas(
      transactions.reduce((total, transaction) => {
        if (transaction.type === "despesa") {
          return total + parseInt(transaction.value);
        }
        return total;
      }, 0)
    );
    setBalance(rendimento - despesas);
  }, [despesas, rendimento, transactions]);

  return (
    <Box className="box-balances">
      <Box className="box-balances-left">
        <Box color={"gray"} fontWeight={"bold"} className="wellcome">
          Olá,{user.user_first_name}
        </Box>
        <Box className="values">
          <Box className="box-saldo">
            <Text fontSize="12px" color="gray">
              Saldo:
            </Text>
            <Text fontSize="lg" fontWeight="bold" color="gray">
              R$ {balance}
            </Text>
          </Box>
          <Box className="box-rendimento">
            <Text fontSize="12px" color="gray">
              Rendimento mensal:
            </Text>
            <Text fontSize="lg" fontWeight="bold" color="green">
              R$ {rendimento}
            </Text>
          </Box>
          <Box className="box-despesas">
            <Text fontSize="12px" color="gray">
              Despesas mensal:
            </Text>
            <Text fontSize="lg" fontWeight="bold" color="red">
              R$ {despesas}
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
          <Earnings
            setTransactions={setTransactions}
            transactions={transactions}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default BalanceTracker;
