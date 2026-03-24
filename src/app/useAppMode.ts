import { useLocation } from "react-router-dom";

const SIMPLE_PREFIX = "/app";

export const useAppMode = () => {
  const location = useLocation();
  const isSimple =
    location.pathname === SIMPLE_PREFIX || location.pathname.startsWith(`${SIMPLE_PREFIX}/`);
  const basePath = isSimple ? SIMPLE_PREFIX : "";
  const normalizedPath = isSimple
    ? location.pathname.replace(SIMPLE_PREFIX, "") || "/"
    : location.pathname;

  const to = (path: string) => {
    if (!path.startsWith("/")) {
      return `${basePath}/${path}`;
    }

    if (path === "/") {
      return basePath || "/";
    }

    return `${basePath}${path}`;
  };

  return {
    isSimple,
    isDemo: !isSimple,
    basePath,
    normalizedPath,
    to,
  };
};
