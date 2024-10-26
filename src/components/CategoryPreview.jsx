import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './CategoryPreview.css'

function CategoryPreview({ categories }) {
  const printJSON = () => {
    toast.success('Console Successfully!')
    console.log(JSON.stringify(categories, null, 2));
  };

  return (
    <div className="category-preview">
      <h2>Categories Preview</h2>
      {categories.map((category) => (
        <div key={category.id} className="preview-category">
          <strong>{category.name || 'Untitled Category'}</strong>
          <ul>
            {category.requirements.map((requirement) => (
              <li key={requirement.id}>{requirement.name}</li>
            ))}
          </ul>
        </div>
      ))}
      <button onClick={printJSON}>Export</button>
    </div>
  );
}

export default CategoryPreview;
