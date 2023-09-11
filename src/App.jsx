import { useEffect, useState } from "react";
import { user_registration } from "./FakeDatabase";

function App() {
  const [ setUsers] = useState(null);

  useEffect(() => {
    user_registration.then((data) => {
      setUsers(data);
    });
  }, []);
  return <></>;
}

export default App;
/*<div style={{ height: "85vh" }}>
 /*<Navbar />
 <div>Hello Word</div>
 <div>
   {users
     ? users.data[0].user_first_name + " " + users.data[0].user_last_name
     : "Carregando..."}{" "}
 </div>
 <Form isRegister={true} />
 <Button />
 <Footer />
</div>*/
