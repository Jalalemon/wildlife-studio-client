
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router/Router';

function App() {
  return (
    <div className="max-w-screen-xl mx-auto" data-theme="cupcake">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
