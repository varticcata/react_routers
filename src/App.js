import Products from "./components/products";
import Posts from "./components/posts";
import Dashboard from "./components/admin/dashboard";
import Home from "./components/home";
import NavBar from "./components/navbar";
import NotFound from "./components/notFound";
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import ProductDetails from './components/productDetails';
import Users from './components/admin/users';
import AdminPosts from './components/admin/posts';

function App() {
  return (
    <div>
      <NavBar />
      <div className='content'>
        <Routes>
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<ProductDetails />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/posts/:year' element={<Posts />} />
          <Route path='/posts/:year/:month' element={<Posts />} />
          <Route path='admin' element={<Dashboard />}>
            <Route path='users' element={<Users />} />
            <Route path='posts' element={<AdminPosts />} />
            <Route path='*' element={<NotFound />} />
          </Route>
          <Route path='/' element={<Home />} />
          <Route path='/messages' element={<Navigate to="/posts" />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
