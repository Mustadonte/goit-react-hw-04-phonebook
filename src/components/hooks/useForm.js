import { useState } from 'react';
import { nanoid } from 'nanoid';

const useForm = ({ initialState, onSubmit }) => {
  const [state, setState] = useState({ ...initialState });
  const id = nanoid();
  const handleChange = ({ target }) => {
    const { name, value } = target;

    setState(prevState => ({
      ...prevState,
      id: id,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('done');
    onSubmit({ ...state });
    setState({ ...initialState });
  };

  return { state, setState, handleChange, handleSubmit };
};

export default useForm;
