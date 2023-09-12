import Form from "../../Components/Form";
import Navbar from "../../Components/Navbar";
function Cadastro() {
  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center" }}>Cadastro</h1>
      <Form isRegister={true} />
    </div>
  );
}

export default Cadastro;
