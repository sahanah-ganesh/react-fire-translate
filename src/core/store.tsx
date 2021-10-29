import { User } from "@firebase/auth";
import React from "react";
import { auth } from "./firebase";

export interface State {
  initialised: boolean;
  user: User | null;
}

interface Action {
  type: string;
  user?: User | null;
}

const actions = {
  SET_USER: "SET_USER",
};

interface Context {
  state: State;
}

const initialState: State = {
  initialised: false,
  user: null,
};

const StoreContext = React.createContext<Context>({
  state: initialState,
});

interface Props {
  children: JSX.Element;
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case actions.SET_USER:
      return {
        ...state,
        initialised: true,
        user: action.user || null,
      };

    default:
      throw new Error("Invalid action");
  }
};

export const useStore = () => {
  return React.useContext(StoreContext);
};

export const StoreProvider = ({ children }: Props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (!user) {
        dispatch({ type: actions.SET_USER, user: null });
        return;
      }
      dispatch({
        user,
        type: actions.SET_USER,
      });
    });
  }, []);
  return (
    <StoreContext.Provider value={{ state }}>{children}</StoreContext.Provider>
  );
};
