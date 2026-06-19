import HomePage from "../../features/dashboard/ui/pages/HomePage";
import ChatsPage from "../../features/chats/ui/pages/ChatsPage";
import SettingsPage from "../../features/settings/ui/pages/SettingsPage";

export const commonRoutes = [
  {
    path: "",
    element: <HomePage />,
  },
  {
    path: "chat",
    element: <ChatsPage />,
  },
  {
    path: "settings",
    element: <SettingsPage />,
  },
];
