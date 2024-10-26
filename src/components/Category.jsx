import React, { useState } from 'react';
import Requirement from './Requirement';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Category.css'

function Category({ category, updateCategoryName, removeCategory, addRequirement, removeRequirement }) {
  const [requirementName, setRequirementName] = useState('');

  const handleAddRequirement = () => {
    if (requirementName.trim()) {
      addRequirement(category.id, requirementName);
      setRequirementName('');
    } else {
      toast.error('Requirement cannot be empty!');
    }
  };

  return (
    <div className="category">
      <div className="category-header">
        <input 
          type="text" 
          value={category.name} 
          onChange={(e) => updateCategoryName(category.id, e.target.value)} 
          placeholder="Category Name" 
        />
        <button onClick={() => removeCategory(category.id)}>Delete</button>
      </div>
      <div className="category-body">
        {category.requirements.map(requirement => (
          <Requirement 
            key={requirement.id} 
            requirement={requirement} 
            removeRequirement={() => removeRequirement(category.id, requirement.id)} 
          />
        ))}
        <div className="requirement-add">
          <input 
            type="text" 
            value={requirementName} 
            onChange={(e) => setRequirementName(e.target.value)} 
            placeholder="Add Requirement" 
          />
          <button onClick={handleAddRequirement}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default Category;
