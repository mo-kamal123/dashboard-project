import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../store/user/user-slice';
import { useNavigate } from 'react-router';

const EditProfile = () => {
  const userData = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State to hold editable fields
  const [formValues, setFormValues] = useState({
    name: userData.name || '',
    email: userData.email || '',
    phone: userData.phone || '',
    role: userData.role || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(setUser(formValues));
    navigate('/profile');
  };

  return (
    <section className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <header className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold">Edit Profile</h1>
      </header>
      <form onSubmit={handleSubmit} className="space-y-10">
        {['name', 'email', 'phone', 'role'].map((field) => (
          <div key={field}>
            <label
              htmlFor={field}
              className="block text-sm font-medium text-gray-700"
            >
              {field.toUpperCase()}
            </label>
            <input
              type={field === 'email' ? 'email' : 'text'}
              id={field}
              name={field}
              value={formValues[field]}
              onChange={handleChange}
              required
              className="mt-1 px-2 py-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-main text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors duration-300"
        >
          Save Changes
        </button>
      </form>
    </section>
  );
};

export default EditProfile;
