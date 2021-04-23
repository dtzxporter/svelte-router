/// <reference types="svelte/types/runtime/ambient" />
import { SpaRouter } from './spa_router';
import { localisedRoute } from './spa_router';
import { navigateTo } from './spa_router';
import { currentRoute } from './spa_router';
import { routeIsActive } from './spa_router';
import Route from './components/route';
import Router from './components/router';
import Navigate from './components/navigate';

export { SpaRouter, localisedRoute, navigateTo, currentRoute, routeIsActive, Route, Router, Navigate };
