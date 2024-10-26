import React, { useState, useEffect } from 'react'; 
import CategoryList from './components/CategoryList'; 
import CategoryPreview from './components/CategoryPreview'; 
import './App.css'; 
// Importing toast notification library
import { ToastContainer, toast } from 'react-toastify'; 
// Importing default CSS for toast notifications
import 'react-toastify/dist/ReactToastify.css'; 

function App() {
  // State to manage the list of categories
  const [categories, setCategories] = useState([]);
  
  // Function to add a new category to the list
  const addCategory = () => {
    const newCategory = { id: Date.now(), name: '', requirements: [] }; 
    setCategories([...categories, newCategory]); 
    toast.success('Category added!'); 
  };

  // useEffect to display a welcome message on first render
  useEffect(() => {
    toast.info('Welcome! Add your categories'); 
  }, []);

  return (
    <div className="app">
      {/* ToastContainer to display toast notifications */}
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="app-header">
        <h1>Requirement Submission List</h1>
      </div>
      <div className="app-body">
        {/* Control section with a button to add a new category */}
        <div className="app-controls">
          <button onClick={addCategory}>Add Category</button>
        </div>
        {/* Main content area displaying the category list and preview */}
        <div className="app-content">
          <CategoryList categories={categories} setCategories={setCategories} /> 
          <CategoryPreview categories={categories} /> 
        </div>
      </div>
    </div>
  );
}

export default App; 