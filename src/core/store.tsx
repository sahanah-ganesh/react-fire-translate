import { User } from "@firebase/auth";
import React from "react";
import { auth } from "./firebase";
import { getDatabase, ref, onValue } from "firebase/database";
export interface State {
  initialised: boolean;
  user: User | null;
  platforms: string[];
}

interface Action {
  type: string;
  user?: User | null;
  platforms?: string[];
}

const actions = {
  SET_USER: "SET_USER",
  SET_PLATFORMS: "SET_PLATFORMS",
};

interface Context {
  state: State;
}

const initialState: State = {
  initialised: false,
  user: null,
  platforms: [],
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
    case actions.SET_PLATFORMS:
      return {
        ...state,
        platforms: action.platforms || [],
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
        type: actions.SET_USER,
        user,
      });
      const db = getDatabase();
      const databaseRef = ref(db);
      onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          dispatch({
            type: actions.SET_PLATFORMS,
            platforms: Object.keys(data),
          });
        }
      });
    });
  }, []);
  return (
    <StoreContext.Provider value={{ state }}>{children}</StoreContext.Provider>
  );
};
