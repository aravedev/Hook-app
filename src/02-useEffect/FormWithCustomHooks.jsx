import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "../hooks/useForm";

export default function SimpleForm() {
  const { formState, onInputChange, username, email, password, onResetForm } =
    useForm({
      username: "",
      email: "",
      password: "",
    });

  //const { username, email, password } = formState;

  return (
    <>
      <h1>Formulario con Custom Hooks</h1>
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="email@email.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      <input
        type="password"
        className="form-control mt-2"
        placeholder="password"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button className="btn btn-primary mt-2" onClick={() => onResetForm()}>
        Borrar
      </button>
    </>
  );
}

/*
  
*/
