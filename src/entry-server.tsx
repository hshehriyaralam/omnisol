import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { routes } from "./App";

export function render(url: string, helmetContext: Record<string, unknown>) {
  const router = createMemoryRouter(routes, {
    initialEntries: [url],
  });

  return renderToString(
    <StrictMode>
      <HelmetProvider context={helmetContext}>
        <RouterProvider router={router} />
      </HelmetProvider>
    </StrictMode>,
  );
}