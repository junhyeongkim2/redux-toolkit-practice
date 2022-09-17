import React, { FormEvent, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { ReducerType } from "./rootReducer";
import { changeTheme, Theme } from "./slices/theme";
import { User, addUser } from "./slices/users";
import store from "./store/store";
import Topmenu from "./Topmenu";
function App() {
  const users = useSelector<ReducerType, User[]>((state) => state.users);
  const theme = useSelector<ReducerType, any>((state) => state.theme.value);

  return (
    <div
      style={{
        backgroundColor: theme,
        width: 300,
        height: 100,
      }}
    >
      <Topmenu />

      {users.map((user) => (
        <div key={user.id}>
          {user.name} , {user.id}
        </div>
      ))}
    </div>
  );
}

export default App;
