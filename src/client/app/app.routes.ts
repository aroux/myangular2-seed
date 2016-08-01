import { provideRouter, RouterConfig } from '@angular/router';

import { AboutRoutes } from './+about/index';
import { HomeRoutes } from './+home/index';
import { TableRoutes } from "./+table/table.routes";

const routes: RouterConfig = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...TableRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];
