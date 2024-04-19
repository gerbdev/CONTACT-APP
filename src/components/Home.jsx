/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import appFirebase from "../credenciales";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(appFirebase);

const Home = ({ userEmail }) => {
  return (
    <div>
      <h1 className="title text-center font-weight-bold text-white">
        Bienvenido usuario {userEmail}
        <button
          className="text-white font-medium rounded-lg text-sm px-5 py-1 mb-2 bg-blue-600 mt-4"
          onClick={() => signOut(auth)}
        >
          Logout
        </button>
      </h1>
    </div>
  );
};

export default Home;
