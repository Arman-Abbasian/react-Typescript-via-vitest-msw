import { setupServer } from 'msw/node'
import { handlers } from './handlers'

// This configures a Service Worker with the given request handlers.
export const server = setupServer(...handlers);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());