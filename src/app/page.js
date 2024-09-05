'use client'

import { PathnameProvider } from '@/lib/contexts/PathnameContext'
import { reduxStore } from '@/redux/api/store'
import { Provider } from 'react-redux'


export default function Page() {
  return (
      <PathnameProvider>
        <Provider store={reduxStore}>
          <div id='Redux_Datastore_Auxiliar_Children'>
            <h1>bienvenido a redux toolkit</h1>
          </div>
        </Provider>
      </PathnameProvider>
  )
}