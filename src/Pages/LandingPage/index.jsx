import { Box, Button } from "@chakra-ui/react";
import Navbar from "../../Components/Navbar";
import PageContainer from "../../Components/PageContainer";
import "./style.css";
import Footer from "../../Components/Footer";

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
        textShadow="0px 4px 10px rgba(0, 0, 0, 0.5)"
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
              color: "bgray",
              background: "rgba(255, 255, 255, 0.8)",
              borderRadius: "5px",
            }}
          >
            Tenha o controle total de suas finanças para uma vida financeira
            próspera.
          </p>
        </PageContainer>
      </Box>

      {/* Nova seção para a lista */}
      <Box bg="white" padding="40px 20px">
        <PageContainer>
          <h2
            style={{
              fontSize: "42px",
              fontWeight: "bold",
              marginBottom: "45px",
              textAlign: "center",
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
              {" "}
              <h2
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                }}
              >
                O que nossa aplicação oferece
              </h2>
              <p>
                Aqui estão alguns dos recursos que você pode aproveitar com
                nossa aplicação:
              </p>
              <ul style={{ listStyleType: "none", paddingLeft: "20px" }}>
                <li>Receba um panorama completo das suas finanças.</li>
                <li>Categorize suas despesas e receitas de forma simples.</li>
                <li>
                  Planeje metas financeiras realistas e alcance-as mais
                  rapidamente.
                </li>
                <li>Acompanhe seus investimentos e patrimônio líquido.</li>
              </ul>
            </Box>
            <Box>
              <img
                src="/pc.jpg"
                alt="Imagem de um computador"
                style={{ width: "500px", height: "auto" }}
              />
            </Box>
          </Box>
        </PageContainer>
      </Box>

      <Footer>
        <Button colorScheme="teal" mt="10px" as="a" href="/sobre">
          Ver mais
        </Button>
        <Button colorScheme="teal" mt="10px" as="a" href="/login">
          Login
        </Button>
        <Button colorScheme="teal" mt="10px" as="a" href="/register">
          Register
        </Button>
      </Footer>
    </div>
  );
}
