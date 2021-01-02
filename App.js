import { createAppContainer } from "react-navigation";
import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screen/IndexScreen";
import { Provider } from "./src/context/BlogContext";
import ShowScreen from "./src/screen/ShowScreen";
import CreateScreen from "./src/screen/CreateScreen";
import EditScreen from "./src/screen/EditScreen";

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen,
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Blogs",
    },
  }
);
const App = createAppContainer(navigator);
export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
