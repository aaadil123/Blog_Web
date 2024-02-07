import "./App.css";
import Header from './components/Header';
import Blogs from './components/Blogs';
import Pagination from './components/Pagination';
import {AppContext} from './context/AppContext';
import { useContext,useEffect } from "react";


export default function App() {
  const{fetchBlogPosts} = useContext(AppContext);

  useEffect( () => {
    fetchBlogPosts();
  },[])

  return (
    <div className="flex flex-col justify-center items-center w-full h-full gap-y-1">
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
}
