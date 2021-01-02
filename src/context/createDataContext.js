import React, { useReducer } from "react";

export default (reducer, actions, initialstate) => {
  const Context = React.createContext();
  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialstate);
    const boundAction = {};
    // action = {addBlogPost : (dispatch) => dispatch}
    // objects of function
    // console.log(actions);
    for (let key in actions) {
      boundAction[key] = actions[key](dispatch);
    }
    return (
      <Context.Provider value={{ state, ...boundAction }}>
        {children}
      </Context.Provider>
    );
  };
  return { Context, Provider };
};
