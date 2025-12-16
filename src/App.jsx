import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import TodoPage from './components/ReduxTodo/TodoPage';
import CrudPage from './components/CrudPage';
import ContactForm from './components/ContactForm';
import PhotoGallery from './components/PhotoGallery';

export default function App(){
  return (
    <HashRouter>
      <Navbar />
      <div className="container my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/redux-example" element={<TodoPage />} />
          <Route path="/crud" element={<CrudPage />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/photos" element={<PhotoGallery />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
