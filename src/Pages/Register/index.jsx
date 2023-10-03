import Form from "../../Components/Form";
import Footer from "../../Components/Footer";
import { BiSolidBarChartSquare } from "react-icons/bi";
import { Box } from "@chakra-ui/react";
import "./style.css";

function Register() {
  return (
    <div>
      <Box className="register-stripe"></Box>{" "}
      <Box className="register-container">
        <Box
          style={{
            display: "flex",
            alignItems: "center ",
            marginTop: "150px",
            marginBottom: "10px",
            zIndex: "2",
          }}
        >
          <BiSolidBarChartSquare size={55} color="rgba(66, 153, 225, 1)" />
          <h1 style={{ color: "black" }}> MoneyMinder</h1>
        </Box>
        <Box className="register-content">
          <Box className="register-box">
            <h1>Register</h1>
            <Form isRegister={true} />
            <p
              style={{
                fontSize: "14px",
                fontWeight: "normal",
                marginTop: "20px",
              }}
            >
              Já possui conta?
              <a style={{ color: "blue" }} href="/login">
                Entrar!
              </a>
            </p>
          </Box>
        </Box>
      </Box>
      <Footer simple={true} />
    </div>
  );
}

export default Register;
