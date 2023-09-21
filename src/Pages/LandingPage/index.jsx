import { Box } from "@chakra-ui/react";
import Navbar from "../../Components/Navbar";
import PageContainer from "../../Components/PageContainer";

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
        className="expanding-image" // Aplicando a classe para o efeito de expansão
      >
        <Navbar isTransparent={true} isLandingPage={true} />
        <PageContainer>
          <Box alignItems={"center"} justifyContent={"flex-start"}></Box>
          <p></p>
        </PageContainer>
      </Box>
    </div>
  );
}
