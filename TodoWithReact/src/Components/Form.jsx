import { useState } from "react";
import { v4 as uuid } from "uuid";

const Form = ({ todos, setTodos, itemToBeEdited, setItemToBeEdited }) => {
  //   console.log("Form Comp mounted")

  // const[todos, setTodos] = useState([])
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <div className="w-[50vw] border h-[100vh]  border-gray-400 bg-gradient-to-br from-neutral-300 to-yellow-100">
      {itemToBeEdited?.id ? (
        // Edit Form ke liye

        <div className="border w-[50%] mx-auto p-2 mt-[20vh] flex flex-col gap-2 rounded-2xl border-gray-400 bg-yellow-100">
          <input
            value={itemToBeEdited.title}
            onChange={(e) =>
              setItemToBeEdited({ ...itemToBeEdited, title: e.target.value })
            }
            className="bg-white border p-2 rounded-lg border-gray-400"
            type="text"
            placeholder="Enter task title"
          />
          <textarea
            value={itemToBeEdited.desc}
            onChange={(e) =>
              setItemToBeEdited({ ...itemToBeEdited, desc: e.target.value })
            }
            className="bg-white border p-2 rounded-lg border-gray-400"
            placeholder="Enter task description"
          ></textarea>
          <button
            onClick={() => {
              if (!itemToBeEdited.title || !itemToBeEdited.desc) return;

              const newArr = todos.map((i) =>
                i.id === itemToBeEdited.id ? itemToBeEdited : i
              );

              setTodos(newArr);
              setItemToBeEdited({});
            }}
            className="bg-green-300 w-[50%] mx-auto rounded-lg text-lg"
          >
            Update Task
          </button>
        </div>
      ) : (
        //   Add Form ke liye
        <div className="border w-[50%] mx-auto p-2 mt-[20vh] flex flex-col gap-2 rounded-2xl border-gray-400 bg-yellow-100">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-white border p-2 rounded-lg border-gray-400"
            type="text"
            placeholder="Enter task title"
          />
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="bg-white border p-2 rounded-lg border-gray-400"
            placeholder="Enter task description"
          ></textarea>
          <button
            onClick={() => {
              if (!title || !desc) return;

              setTodos([
                ...todos,
                { title, desc, id: uuid(), isCompleted: false },
              ]);
              setTitle("");
              setDesc("");
            }}
            className="bg-green-300 w-[50%] mx-auto rounded-lg text-lg"
          >
            Add Task
          </button>
        </div>
      )}
    </div>
  );
};

export default Form;
