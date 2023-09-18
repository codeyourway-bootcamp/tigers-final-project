import { Box,} from "@chakra-ui/react";
import Navbar from "../../Components/Navbar";

export default function LandingPage() {
  return (
    <div>
      <Box
        bg="url('/pessoa-feliz.jpg')" 
        bgSize="cover"
        bgPosition="center"
        minHeight="100vh"
        position="relative"
        overflow="hidden"
        className="expanding-image" // Aplicando a classe para o efeito de expansão
      >
        <Navbar isTransparent={true} />
      </Box>
    </div>
  );
}
