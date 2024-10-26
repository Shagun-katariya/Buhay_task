import React from 'react';
import Category from './Category';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './CategoryList.css'

function CategoryList({ categories, setCategories }) {
  //updating the category name
  const updateCategoryName = (id, name) => {
    setCategories(
      categories.map(category => 
        category.id === id ? { ...category, name } : category
      )
    );
  };

  //removing the category
  const removeCategory = (id) => {
    setCategories(categories.filter(category => category.id !== id));
    toast.success('Category Removed!')
  };

  //adding requirement
  const addRequirement = (categoryId, requirementName) => {
    setCategories(categories.map(category => 
      category.id === categoryId 
        ? { 
            ...category, 
            requirements: [
              ...category.requirements, 
              { id: Date.now(), name: requirementName }
            ]
          } 
        : category
    ));
    toast.success('Requirement Added!')
  };

  //removing requirement
  const removeRequirement = (categoryId, requirementId) => {
    setCategories(categories.map(category => 
      category.id === categoryId 
        ? { 
            ...category, 
            requirements: category.requirements.filter(req => req.id !== requirementId)
          } 
        : category
    ));
    toast.success('Requirement Deleted!')
  };

  return (
    <div className="category-list">
      {categories.map(category => (
        <Category 
          key={category.id} 
          category={category} 
          updateCategoryName={updateCategoryName}
          removeCategory={removeCategory}
          addRequirement={addRequirement}
          removeRequirement={removeRequirement}
        />
      ))}
    </div>
  );
}

export default CategoryList;
