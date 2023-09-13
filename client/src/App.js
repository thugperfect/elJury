
import './App.css';
import {createBrowserRouter,createRoutesFromElements,Link,RouterProvider,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BookHome from './pages/BookHome';
import Index from './pages/Index';
import Bookpage from './components/Bookpage';
function App() {

  const route = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/book' element={<Index/>}>
        <Route index element={<BookHome/>}></Route>
        <Route path=':id' element={<Bookpage/>}></Route>
    </Route>
    </>
    
  ))
  return (
    <div className="">
     <RouterProvider router={route}/>
    </div>
  );
}

export default App;
