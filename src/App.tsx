import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { useEffect, useState, Suspense } from "react";
import routesConfig from "./routes/Routes";
import Spinner from "./components/Spinner";
import TeamLayout from "./pages/team/TeamLayout";
import Details from "./pages/team/Details";
import Team from "./pages/team/Team";
function App() {
  const [isMounted, setIsMounted] = useState(true); // Set it to false
  const location = useLocation();
  // scrollRestoration
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  // lazy load
  useEffect(() => {
    setTimeout(() => {
      setIsMounted(false);
    }, 1000);
  }, []);

  return isMounted ? (
      <Spinner />
  ) : (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/our-team" element={<TeamLayout />}>
            <Route index element={<Team />} />
            <Route path="member/:name" element={<Details />} />
          </Route>
          {routesConfig.map(({ path, component: Component }, index) => (
            <Route
              key={index}
              path={path}
              element={
                <Suspense fallback={<Spinner />}>
                  <Component />
                </Suspense>
              }
            ></Route>
          ))}
        </Route>
      </Routes>
  );
}

export default App;
