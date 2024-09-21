import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes } from './routes'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function App () {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          {routes.map(route => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </Suspense>
    </QueryClientProvider>
  )
}

export default App
