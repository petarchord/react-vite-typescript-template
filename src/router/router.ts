import { createBrowserRouter } from 'react-router-dom'
import { routes } from './routes'
import type { Router as RemixRouter } from '@remix-run/router'

const router: RemixRouter = createBrowserRouter(routes)

export { router }
