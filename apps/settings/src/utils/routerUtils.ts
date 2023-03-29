type Dupa = () => JSX.Element;
export type Route = { path: string; element: Dupa };

export const getRouteElement = (routes: Route[], path: string): Dupa | undefined => {
  return routes.find((route) => path.endsWith(route.path))?.element;
};
