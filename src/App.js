import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from "./page/home/Home";
import NotFound from './page/notFound/NotFound';

function App() {
  return (
    <div className="App">
      <RouterProvider
        router={createBrowserRouter([
          {
            path: '/',
            element: (
                <Home />
            ),
          },
          {
            path: '*',
            element: <NotFound />,
          },
        ])}
      />
    </div>
  );
}

export default App;
