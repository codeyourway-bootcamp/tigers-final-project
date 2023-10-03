import { useEffect, useState } from "react";
import "./style.css";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Box,
} from "@chakra-ui/react";

function Earnings() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [type, setType] = useState("");
  const [value, setValue] = useState(0);
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [transactions, setTransactions] = useState([]);
  const reset = () => {
    setType("");
    setValue(0);
    setDescription("");
    setDate("");
    setCategory("");
    setTransactions([]);
  };
  useEffect(() => {
    const recordedTransactions =
      JSON.parse(localStorage.getItem("transactions")) || [];
    setTransactions(recordedTransactions);
  }, []);
  return (
    <>
      <Box className="add-rendimento">
        <Button
          style={{
            width: "50%",
            height: "50%",
            border: "4px solid green",
            borderRadius: "50px",
            fontWeight: "bold",
            fontSize: "36px",
            color: "green",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "6px",
            backgroundColor: "white",
          }}
          onClick={() => {
            setType("rendimento");
            onOpen();
          }}
        >
          +
        </Button>
        <h2>Rendimento</h2>
      </Box>
      <Box className="add-despesas">
        <Button
          style={{
            width: "50%",
            height: "50%",
            border: "4px solid red",
            borderRadius: "50px",
            fontWeight: "bold",
            fontSize: "42px",
            color: "red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "9px",
            backgroundColor: "white",
          }}
          onClick={() => {
            setType("despesa");
            onOpen();
          }}
          colorScheme="red"
        >
          -
        </Button>
        <h2>Despesas</h2>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Adicionar {type}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form>
              <div className="form-group">
                <label>Valor</label>
                <div className="">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Valor"
                    value={value}
                    onChange={(e) => {
                      setValue(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Data</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Data"
                  value={date}
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label>Categoria</label>
                <select
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                >
                  <option value="casa">Casa</option>
                  <option value="despesas">Vestuário</option>
                </select>
              </div>
              <div className="form-group">
                <label>Descrição</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Descrição"
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </div>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              onClick={() => {
                console.log(transactions);
                setTransactions([
                  ...transactions,
                  {
                    value,
                    description,
                    date,
                    category,
                    type,
                  },
                ]);
                localStorage.setItem(
                  "transactions",
                  JSON.stringify(transactions)
                );
                alert(`${type} adicionado com sucesso!`);
                reset();
                onClose();
              }}
              variant="ghost"
            >
              Registrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export { Earnings };
