import axios from 'axios';
import DOMPurify from 'dompurify';


const API_URL = 'http://localhost:3001/todos';


export const fetchTodos = async () => {
  try {
  const response = await axios.get(API_URL);
  const sanitizedTodos = response.data.map((todo: any) => ({
    ...todo,
    title: DOMPurify.sanitize(todo.title), // Sanitiza cada título
  }));
  return sanitizedTodos;

} catch (error) {
  throw new Error('Failed to fetch todos');
}
};

export const createTodo = async (todo: { title: string; status: string }) => {
  const response = await axios.post(API_URL, todo);
  return response.data;
};

export const updateTodo = async (id: string, updatedFields: Partial<{ title: string; status: string }>) => {
  const response = await axios.patch(`${API_URL}/${id}`, updatedFields);
  return response.data;
};

export const deleteTodoById = async (id: string) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};