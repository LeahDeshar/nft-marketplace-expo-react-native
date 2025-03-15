export type RouteConfig = {
  name: string;
  options?: {
    headerShown?: boolean;
    [key: string]: any; // Allow other navigation options
  };
};

export const routes: RouteConfig[] = [
  { name: "(side)", options: { headerShown: false } },
  { name: "+not-found", options: {} },
];
