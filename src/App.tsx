import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
    </Suspense>
  );
}

export default App;
