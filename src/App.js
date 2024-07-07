import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './page/home/Home';
import NotFound from './page/notFound/NotFound';
import { ContextProvider } from './context/ContextData';

function App() {
  return (
    <ContextProvider>
      <RouterProvider
        router={createBrowserRouter([
          {
            path: '/',
            element: (
              <div>
                <Home />
              </div>
            ),
          },
          {
            path: '*',
            element: <NotFound />,
          },
        ])}
      />
    </ContextProvider>
  );
}

export default App;
