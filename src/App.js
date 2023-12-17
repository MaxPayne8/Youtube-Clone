import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import store from "./utils/store";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import SearchedVideo from "./components/SearchedVideo";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        { path: "/", element: <MainContainer /> },
        { path: "/watch", element: <WatchPage /> },
        { path: "/results", element: <SearchedVideo /> },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
