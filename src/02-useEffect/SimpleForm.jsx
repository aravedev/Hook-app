import { useState } from "react";
import { useEffect } from "react";
import Message from "./Message";

export default function SimpleForm() {
  const [formState, setFormState] = useState({
    username: "draved",
    email: "test@mail.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  };

  useEffect(() => {
    // console.log("useEffect activated");
  }, []);

  useEffect(() => {
    // console.log("formState Changed");
  }, [formState]);

  useEffect(() => {
    //  console.log("Email Changed");
  }, [email]);

  return (
    <>
      <h1>Simple Form</h1>
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

      {username === "draved2" && <Message />}
    </>
  );
}
