import React, { useState } from 'react';
import {
  MdOutlineCircleNotifications,
  MdOutlineSpaceDashboard,
} from 'react-icons/md';
import NotiCard from '../components/noti-card';

// This is a mock data array representing notifications
const notificationsData = [
  {
    id: 1,
    title: 'New Order Received',
    message: 'You have received a new order from John Doe.',
    time: '2 mins ago',
    read: false,
  },
  {
    id: 2,
    title: 'Payment Successful',
    message: 'Your payment of $120 was processed successfully.',
    time: '1 hour ago',
    read: true,
  },
  {
    id: 3,
    title: 'New Message',
    message: 'You have a new message from Sarah.',
    time: 'Yesterday',
    read: false,
  },
];

// This component displays a notification page with a list of notifications
const Notification = () => {
  const [notifications, setNotifications] = useState(notificationsData);

  // Function to mark all notifications as read
  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((notif) => ({ ...notif, read: true })));
  };

  return (
    <section className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <header className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <MdOutlineCircleNotifications className="w-6 h-6 text-main" />
          Notifications
        </h1>
        <button
          onClick={markAllAsRead}
          className="text-sm bg-main text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors duration-300"
        >
          Mark all as read
        </button>
      </header>

      {/* Notifications List */}
      <section aria-label="Notifications List" className="space-y-4">
        {notifications.map((notif) => (
          <NotiCard key={notif.id} notif={notif} />
        ))}
      </section>
    </section>
  );
};

export default Notification;
