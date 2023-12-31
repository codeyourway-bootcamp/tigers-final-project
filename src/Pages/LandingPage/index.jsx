import { Box, Button } from "@chakra-ui/react";
import Navbar from "../../Components/Navbar";
import PageContainer from "../../Components/PageContainer";
import "./style.css";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <Box
        bg="url('/financas-img.jpg')"
        bgSize="cover"
        bgPosition="center"
        minHeight="100vh"
        position="relative"
        overflow="hidden"
        display="flex"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        color="white"
        textShadow="0px 4px 8px rgba(0, 0, 0, 0.5)"
      >
        <Navbar isTransparent={true} isLandingPage={true} />
        <PageContainer>
          <h1 style={{ fontSize: "50px", fontWeight: "bold" }}>
            Conquiste o futuro, domine suas finanças hoje!
          </h1>
          <p
            style={{
              marginTop: "10px",
              marginBottom: "30px",
              fontSize: "18px",
              color: "black",
              background: "rgba(255, 255, 255, 0.5)",
              borderRadius: "5px",
            }}
          >
            Tenha o controle total de suas finanças para uma vida financeira
            próspera.
          </p>
        </PageContainer>
      </Box>

      <Box bg="white" padding="40px 20px">
        <PageContainer>
          <h2
            style={{
              fontSize: "42px",
              fontWeight: "bold",
              marginBottom: "60px",
              textAlign: "center",
              color: "gray",
            }}
          >
            O guia para o seu sucesso financeiro
          </h2>
          <ul className="list">
            <li>
              <h1 className="numberStyle">01</h1>Gerencie suas despesas <br />
              de forma eficaz.
            </li>
            <li>
              <h1 className="numberStyle">02</h1>Planeje seu orçamento de
              maneira <br />
              inteligente.
            </li>
            <li>
              <h1 className="numberStyle">03</h1>Acompanhe seus investimentos
              <br />e economias.
            </li>
            <li>
              <h1 className="numberStyle">04</h1>Alcance seus objetivos
              <br />
              financeiros com confiança.
            </li>
          </ul>
          <Box
            style={{
              width: "100%",
              height: "0.1px",
              backgroundColor: "gray",
              // boxShadow: "0px -5px 10px rgba(0, 0, 0, 5)", // Sombra projetada para cima
              marginTop: "60px",
            }}
          ></Box>
        </PageContainer>
      </Box>

      <Box
        bg="white"
        padding="40px 20px"
        textAlign="center"
        marginBottom="30px"
      >
        <PageContainer>
          <Box className="sec2">
            <Box>
              <h2
                style={{
                  fontSize: "14px",
                  textAlign: "left",
                  alignItems: "flex-start",
                }}
              >
                Organize suas finanças
              </h2>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "38px",
                  textAlign: "left",
                  color: "gray",
                }}
              >
                O que você precisa esta aqui!
              </p>
              <ul
                className="list2"
                style={{
                  listStyleType: "circle",
                  paddingLeft: "20px",
                  textAlign: "left",
                }}
              >
                <li>Obtenha um panorama completo das suas finanças.</li>
                <li>Categorize suas despesas e receitas de forma simples.</li>
                <li>
                  Planeje metas financeiras realistas e alcance-as mais
                  rapidamente.
                </li>
                <li>Acompanhe seus investimentos e patrimônio líquido.</li>
              </ul>

              <Link to="/register">
                <Box
                  mt="10px"
                  display="flex"
                  justifyContent="flex-start"
                  marginTop="40px"
                >
                  <Button colorScheme="teal">Register</Button>
                </Box>
              </Link>
            </Box>
            <Box>
              <img
                src="/pc.jpg"
                alt="Imagem de um computador"
                style={{
                  width: "500px",
                  height: "auto",
                  borderRadius: "10px",
                  boxShadow: "5px 5px 10px rgba(0, 0, 0, 5)",
                }}
              />
            </Box>
          </Box>
        </PageContainer>

        <Footer>
          <Button colorScheme="teal" mt="10px" as="a" href="/login">
            Login
          </Button>
          <Button colorScheme="teal" mt="10px" as="a" href="/register">
            Register
          </Button>
        </Footer>
      </Box>
    </div>
  );
}
