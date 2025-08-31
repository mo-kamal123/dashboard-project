import EditProfile from '../pages/edit-profile';
import Profile from '../pages/profile';

export const profileRoutes = [
  { path: 'profile', element: <Profile /> },
  { path: 'profile/edit-profile', element: <EditProfile /> },
];
