import { MdOutlineSpaceDashboard } from 'react-icons/md';

const NotiCard = ({ notif }) => {
  return (
    <article
      className={`flex flex-col sm:flex-row sm:items-start gap-4 p-4 rounded-lg shadow-md hover:shadow-lg transition ${
        notif.read ? 'bg-white' : 'bg-blue-50'
      }`}
    >
      {/* Notification Icon */}
      <div>
        <MdOutlineSpaceDashboard
          className={`w-6 h-6 ${
            notif.read ? 'text-gray-400' : 'text-blue-600'
          }`}
        />
      </div>
      {/* Notification Content */}
      <div className="flex-1">
        <h2 className="font-semibold">{notif.title}</h2>
        <p className="text-gray-600 text-sm">{notif.message}</p>
        <time className="text-xs text-gray-400">{notif.time}</time>
      </div>
    </article>
  );
};

export default NotiCard;
