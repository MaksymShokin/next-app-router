'use server';

import { redirect } from 'next/navigation';
import { saveMeal } from './meals';

const isInvalid = text => {
  return !text || text.trim() === '';
};

export const shareMeal = async (prevState, formData) => {
  const meal = {
    title: formData.get('title'),
    image: formData.get('image'),
    creator_email: formData.get('email'),
    creator: formData.get('name'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions')
  };

  // validation
  if (
    isInvalid(meal.title) ||
    isInvalid(meal.creator_email) ||
    isInvalid(meal.creator) ||
    isInvalid(meal.summary) ||
    isInvalid(meal.instructions) ||
    !meal.creator_email.includes('@') ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return { message: 'Invalid input' };
  }
  await saveMeal(meal);
  redirect('/meals');
};
