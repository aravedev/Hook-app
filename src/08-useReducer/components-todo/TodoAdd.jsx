import { useForm } from "../../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (description.length <= 1) return;

    // Creating a new Todo Object and sending it as reference to onNewTodo props that is handleNewTodo function
    const newTodo = {
      id: new Date().getTime(),
      done: false,

      // we are storing variable const description = event.target.value , thats the reason in the input we have value = { description }
      description: description,
    };

    onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Que hay que hacer?"
        className="form-control"
        value={description}
        name="description"
        onChange={onInputChange}
      />

      <button type="submit" className="btn btn-primary mt-2">
        Agregar
      </button>
    </form>
  );
};
