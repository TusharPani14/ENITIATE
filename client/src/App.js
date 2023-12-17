
import './App.css';
import Dashboard from './components/Dashboard';
import Error from './components/Error';
import Signup from './components/Signup';
import Login from './components/login'
import { Routes, Route } from 'react-router-dom';
import PostDetails from './components/PostDetail';
function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/dash' element={<Dashboard/>}/>
          <Route path="/posts/:postId" element={<PostDetails/>}/>
          <Route path='*' element={<Error/>}/>
          

        </Routes>
    </>
  );
}

export default App;
