'use server';

export const shareMeal = async formData => {
  const newMeal = {
    title: formData.get('title'),
    image: formData.get('image'),
    creator_email: formData.get('email'),
    creator: formData.get('name'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions')
  };
};
