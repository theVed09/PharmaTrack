import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { Provider } from 'react-redux';
import AppStore from './utils/AppStore';

function App() {
  const route=createBrowserRouter([
    {
      path:'/',
      element:<Login/>
    },{
      path:'/dashboard',
      element:<Dashboard/>
    }
  ]
    
  )
  return (
    <div className="App">
      <Provider store={AppStore}>
      <RouterProvider router={route}/>
      </Provider>
    </div>
  );
}

export default App;
