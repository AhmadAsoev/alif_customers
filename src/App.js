import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './page/home/Home';
import NotFound from './page/notFound/NotFound';
import { ContextProvider } from './context/ContextData';
import AddCustomer from './component/main/AddCustomer';

function App() {
  return (
    <ContextProvider>
      <RouterProvider
        router={createBrowserRouter([
          {
            path: '/',
            element: (
              <div>
                <AddCustomer/>
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
