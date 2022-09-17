import React, { FormEvent, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { ReducerType } from "./rootReducer";
import { changeTheme, Theme } from "./slices/theme";
import { User, addUser } from "./slices/users";
import store from "./store/store";
function App() {
  const users = useSelector<ReducerType, User[]>((state) => state.users);
  const theme = useSelector<ReducerType, any>((state) => state.theme.value);

  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [color, setColor] = useState("#2C3342");

  const handleChangeName = (e: any) => {
    setName(e.target.value);
  };
  const handleChangeColor = async (e: any) => {
    await console.log("buttonclicked!!");
    if (color === "#2C3342") await setColor("#F99872");
    else {
      await setColor("#2C3342");
      await console.log("else");
      await console.log(color);
    }

    await handleTheme(e);
  };

  const handleAddUser = (e: FormEvent) => {
    e.preventDefault();
    dispatch(addUser({ name } as User));

    setName("");
  };

  const handleTheme = (e: any) => {
    e.preventDefault();
    dispatch(changeTheme({ color } as Theme));
  };

  return (
    <div style={{ backgroundColor: color, width: 300, height: 100 }}>
      <form onSubmit={handleAddUser}>
        <input type="text" value={name} onChange={handleChangeName} />
        <button type="submit">Add User and Color</button>
      </form>
      <button onClick={handleChangeColor}>change theme</button>

      {users.map((user) => (
        <div key={user.id}>
          {user.name} , {user.id}
        </div>
      ))}
    </div>
  );
}

export default App;
