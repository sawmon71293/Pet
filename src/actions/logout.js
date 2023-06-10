import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteItem, deletePet } from '../helper';

export const logoutAction = () => {
  deleteItem({ key: 'userName' });
  deleteItem({ key: 'pets' });
  toast.success("You've deleted your account!");
  return redirect('/');
};

export const deletePetAction = async ({ request }) => {
  const data = await request.formData();
  const { id } = Object.fromEntries(data);
  try {
    deletePet(id);
    toast.success("You've deleted your pet!");
    return redirect('/');
  } catch (e) {
    throw new Error('There was a problem deleting your pet.');
  }
};
