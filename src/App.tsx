import { Suspense } from 'react'
import { BrowserRouter, Routes, useRoutes } from 'react-router-dom'
import routes from '~react-pages'

function App () {
  // eslint-disable-next-line no-console
  console.log(routes)

  return (
        <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>
  )
}

export default App
