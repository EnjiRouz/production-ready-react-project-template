import { lazy } from 'react';

export const LazyNotFoundPage = lazy(async () => await import('./NotFoundPage'));
