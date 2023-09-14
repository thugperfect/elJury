
import './App.css';
import {createBrowserRouter,createRoutesFromElements,Link,RouterProvider,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BookHome from './pages/BookHome';
import Index from './pages/Index';
import Bookpage from './pages/Bookpage';
import useSizeProvider from './components/useSizeProvider';
import Signup from './pages/Signup';
import LoginPage from './components/LoginPage';

function App() {
  const size = useSizeProvider()
  const route = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path='/' element={<Home size = {size}/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/login' element={<Signup/>}></Route>
    <Route path='/book' element={<Index size={size}/>}>
        <Route index element={<BookHome size={size} />}></Route>
        <Route path=':id' element={<LoginPage size={size} />}></Route>
    </Route>
    </>
    
  ))
  return (
    <div className="bg-slate-100 dark:bg-zinc-800">
     <RouterProvider router={route}/>
    </div>
  );
}

export default App;
