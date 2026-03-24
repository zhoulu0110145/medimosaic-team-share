import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom";

import { AppShell } from "../components/AppShell";
import { DashboardPage } from "../pages/DashboardPage";
import { LandingPage } from "../pages/LandingPage";
import { NotesPage } from "../pages/NotesPage";
import { PresentationPage } from "../pages/PresentationPage";
import { ReportDetailPage } from "../pages/ReportDetailPage";
import { SharePage } from "../pages/SharePage";
import { SummaryPage } from "../pages/SummaryPage";
import { TimelinePage } from "../pages/TimelinePage";
import { UploadPage } from "../pages/UploadPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    element: (
      <AppShell>
        <Outlet />
      </AppShell>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashboardPage />,
      },
      {
        path: "/upload",
        element: <UploadPage />,
      },
      {
        path: "/summary",
        element: <SummaryPage />,
      },
      {
        path: "/timeline",
        element: <TimelinePage />,
      },
      {
        path: "/report/:id",
        element: <ReportDetailPage />,
      },
      {
        path: "/notes",
        element: <NotesPage />,
      },
      {
        path: "/share",
        element: <SharePage />,
      },
    ],
  },
  {
    path: "/app",
    element: (
      <AppShell>
        <Outlet />
      </AppShell>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="/app/dashboard" replace />,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
      {
        path: "upload",
        element: <UploadPage />,
      },
      {
        path: "summary",
        element: <SummaryPage />,
      },
      {
        path: "timeline",
        element: <TimelinePage />,
      },
      {
        path: "report/:id",
        element: <ReportDetailPage />,
      },
      {
        path: "notes",
        element: <NotesPage />,
      },
      {
        path: "share",
        element: <SharePage />,
      },
    ],
  },
  {
    path: "/presentation",
    element: <PresentationPage />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
