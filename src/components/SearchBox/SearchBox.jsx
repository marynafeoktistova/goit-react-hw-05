import { Field, Form, Formik } from 'formik';
import s from './SearchBox.module.css';
import toast from 'react-hot-toast';

const SearchBox = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    const formattedSearch = values.search.trim().toLowerCase();
    if (!values.search.trim()) {
      toast.error('The search field cannot be empty!');
      return;
    }
    onSubmit(formattedSearch);
    actions.resetForm();
  };
  return (
    <div className={s.searchThumb}>
      <Formik initialValues={{ search: '' }} onSubmit={handleSubmit}>
        <Form>
          <Field className={s.inputSearch} type='text' name='search' autoComplete='off' autoFocus placeholder='Search films' />
          <button className={s.btnSearch} type='submit'>
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBox;
