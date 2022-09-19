import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { routerConfig } from "shared/config/routerConfig/routerConfig";

export default function AppRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routerConfig).map(({ element, path }) => (
          <Route
            key={path}
            path={path}
            element={
              <Suspense fallback={<div>Loading...</div>}>{element}</Suspense>
            }
          />
        ))}
      </Routes>
    </Suspense>
  );
}
