import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { SignUp } from "./pages/SignUp";
import { MainFeed } from "./pages/MainFeed";
import { useUserStore } from "./store/useUserStore";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const userName = useUserStore((state) => state.username);

  if (!userName) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

const router = createBrowserRouter([
  { path: "/", element: <SignUp /> },
  {
    path: "/feed",
    element: (
      <ProtectedRoute>
        <MainFeed />
      </ProtectedRoute>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
