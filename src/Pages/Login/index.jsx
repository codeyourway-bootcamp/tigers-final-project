import Form from "../../Components/Form";
import Footer from "../../Components/Footer";
import { Box } from "@chakra-ui/react";
import "./style.css";
import { BiSolidBarChartSquare } from "react-icons/bi";

function Login() {
  return (
    <div>
      <Box className="stripe"></Box>{" "}
      {/* Faixa que se estende pela largura da página */}
      <Box className="container">
        <Box
          style={{
            display: "flex",
            alignItems: "center ",
            marginTop: "0",
            marginBottom: "10px",
          }}
        >
          <BiSolidBarChartSquare size={55} color="rgba(66, 153, 225, 1)" />
          <h1 style={{ color: "black" }}> MoneyMinder</h1>
        </Box>
        <Box className="content">
          <Box className="login-box">
            <h1>Login</h1>
            <Form />
            <p
              style={{
                fontSize: "14px",
                fontWeight: "normal",
                marginTop: "20px",
              }}
            >
              Não possui conta?
              <a style={{ color: "blue" }} href="/register">
                Criar!
              </a>
            </p>
          </Box>
        </Box>
      </Box>
      <Footer simple={true} z-index />
    </div>
  );
}

export default Login;
