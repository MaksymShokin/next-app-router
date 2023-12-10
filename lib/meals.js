import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
  await new Promise(resolve => setTimeout(resolve, 3000));

  // throw new Error('Meals loading failed')
  return db.prepare('SELECT * FROM meals').all();
}
