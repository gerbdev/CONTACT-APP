/* eslint-disable no-unused-vars */
import { useState } from "react";

// importando los modulos de firebase
import appFirebase from "../src/credenciales";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(appFirebase);

// importando los componentes
import Home from "../src/components/Home";
import Login from "../src/components/Login";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (userFirebase) => {
    if (userFirebase) {
      setUser(userFirebase);
    } else {
      setUser(null);
    }
  });

  return <div>{user ? <Home userEmail={user.email} /> : <Login />}</div>;
}

export default App;
