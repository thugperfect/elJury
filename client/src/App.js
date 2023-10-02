
import './App.css';
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom'
import Home from './pages/Home';
import BookHome from './components/BookHome';
import Index from './pages/Index';
import useSizeProvider from './components/useSizeProvider';
import Signup from './pages/Signup';
import LoginPage from './pages/LoginPage';
import AddBook from './pages/AddBook';

function App() {
  const size = useSizeProvider()
  const route = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path='/' element={<Home size={size}/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/login' element={<LoginPage />}></Route>
    <Route path='/books' element={<Index size={size}/>}>
        <Route index element={<BookHome size={size} />}></Route>
        <Route path=':id' element={<LoginPage size={size} />}></Route>
        <Route path='addbook' element={<AddBook/>}></Route>
    </Route>
    
    </>
    
  ))
  return (
    <div className="bg-zinc-800">
     <RouterProvider router={route}/>
    </div>
  );
}

export default App;
