import { useState } from "react";
import { user_registration } from "./FakeDatabase";
function App() {
  // Usando FakeDatabase com um estado
  const [users, setUsers] = useState(user_registration);
  return (
    <>
      <div>Hello Word</div>
      <div>{users.data[0][2] + " " + users.data[0][3]} </div>
    </>
  );
}

export default App;
