import { useEffect, useState } from "react";
import { user_registration } from "./FakeDatabase";
function App() {
  // Usando FakeDatabase com um estado
  const [users, setUsers] = useState(null);
  useEffect(() => {
    user_registration.then((data) => {
      setUsers(data);
    });
  }, []);
  return (
    <>
      <div>Hello Word</div>
      <div>
        {users
          ? users.data[0].user_first_name + " " + users.data[0].user_last_name
          : "Carregando..."}{" "}
      </div>
    </>
  );
}

export default App;
