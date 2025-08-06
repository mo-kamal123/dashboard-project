import { useState } from 'react';

// This is a mock user data object representing a user's profile information
const userData = {
  name: 'momo',
  email: 'moo@example.com',
  role: 'Owner',
  phone: '+20 123 456 789',
  location: 'Cairo, Egypt',
  joined: 'March 2025',
  avatar:
    'https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?q=80&w=756&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder Avatar
};

// This component renders a user profile page with user details and an edit button
const Profile = () => {
  const [user] = useState(userData);

  return (
    <section className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Profile</h1>
        <button className="bg-main text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition">
          Edit Profile
        </button>
      </header>

      {/* Profile Card */}
      <article className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center mb-8">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-24 h-24 rounded-full bg-center mb-4 border-4 border-blue-100"
        />
        <h2 className="text-xl font-semibold">{user.name}</h2>
        <p className="text-gray-500">{user.email}</p>
        <span className="inline-block mt-2 px-3 py-1 text-sm bg-blue-50 text-blue-700 rounded-full">
          {user.role}
        </span>
      </article>

      {/* Details Section */}
      <article className="bg-white rounded-xl shadow-md p-6">
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
      </article>
    </section>
  );
};

export default Profile;
