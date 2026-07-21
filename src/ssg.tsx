import { renderToString } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { StaticRouter } from "react-router";
import { staticRoutePaths } from "./data/searchPages";
import { AppRoutes } from "./routes";

export const prerenderRoutes = [...staticRoutePaths, "/404.html"];

export function renderUrl(url: string) {
  const helmetContext = {} as { helmet?: any };

  const appHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </HelmetProvider>,
  );

  const helmet = helmetContext.helmet;
  const headTags = helmet
    ? `${helmet.title.toString()}${helmet.meta.toString()}${helmet.link.toString()}${helmet.script.toString()}`
    : "";

  return { appHtml, headTags };
}
