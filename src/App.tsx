import { RouterProvider } from "react-router-dom"
import { router } from "./routes/routes"
// import { ReactNotifications } from 'react-notifications-component'

function App() {

  return (
    <div>
      <RouterProvider router={router} />    
    </div>
  )
}

export default App
