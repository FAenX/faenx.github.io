import { Route, Routes } from "react-router";
import App from "./App";
import ExpertisePage from "./pages/ExpertisePage";
import NotFoundPage from "./pages/NotFoundPage";
import PersonPage from "./pages/PersonPage";
import ProjectDetail from "./pages/ProjectDetail";
import ProjectsPage from "./pages/ProjectsPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/emmanuel-davidson/" element={<PersonPage />} />
      <Route path="/platform-systems/" element={<ExpertisePage slug="platform-systems" />} />
      <Route path="/data-platforms/" element={<ExpertisePage slug="data-platforms" />} />
      <Route path="/agent-systems/" element={<ExpertisePage slug="agent-systems" />} />
      <Route path="/applied-analytics/" element={<ExpertisePage slug="applied-analytics" />} />
      <Route path="/projects/" element={<ProjectsPage />} />
      <Route path="/projects/:id/" element={<ProjectDetail />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
