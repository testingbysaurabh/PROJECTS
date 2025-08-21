
import Lr from './Components/Lr'
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Lr />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  )
}

export default App