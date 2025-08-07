import { useState } from 'react';
import { useSelector } from 'react-redux';
import Modal from '../componants/UI/modal';
import { Link } from 'react-router';


// This component renders a user profile page with user details and an edit button
const Profile = () => {
  const [openModal, setOpenModal] = useState(false);

  // Get the user data from the Redux store
  const user = useSelector((state) => state.user.user);

  const handleModal = () => {
    setOpenModal(!openModal);
  }
  return (
    <main className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <header className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Profile</h1>
        <Link to={'/profile/edit-profile'} onClick={handleModal} className="bg-main text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition">
          Edit Profile
        </Link>
      </header>
      {/* form modal */}
        <Modal type={'form'} openModal={openModal} path={'/profile'} />
      {/* Profile Card */}
      <section
        aria-label="Profile Summary"
        className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center mb-8"
      >
        <img
          src={user.avatar}
          alt={`${user.name} avatar`}
          className="w-24 h-24 rounded-full bg-center mb-4 border-4 border-blue-100"
        />
        <h2 className="text-xl font-semibold">{user.name}</h2>
        <p className="text-gray-500">{user.email}</p>
        <span className="inline-block mt-2 px-3 py-1 text-sm bg-blue-50 text-blue-700 rounded-full">
          {user.role}
        </span>
      </section>

      {/* Details Section */}
      <section
        aria-label="Account Details"
        className="bg-white rounded-xl shadow-md p-6"
      >
        <h3 className="text-lg font-semibold mb-4">Account Details</h3>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
          <div>
            <dt className="font-medium">Phone</dt>
            <dd>{user.phone}</dd>
          </div>
          <div>
            <dt className="font-medium">Location</dt>
            <dd>{user.location}</dd>
          </div>
          <div>
            <dt className="font-medium">Joined</dt>
            <dd>{user.joined}</dd>
          </div>
        </dl>
      </section>
    </main>
  );
};

export default Profile;
