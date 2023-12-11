'use server';

import { redirect } from 'next/navigation';
import { saveMeal } from './meals';

export const shareMeal = async formData => {
  const newMeal = {
    title: formData.get('title'),
    image: formData.get('image'),
    creator_email: formData.get('email'),
    creator: formData.get('name'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions')
  };

  await saveMeal(newMeal);
  redirect('/meals')
};
