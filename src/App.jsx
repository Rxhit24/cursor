import { Outlet } from "react-router-dom"
import NavBar from "./components/Landing/NavBar"

function App() {
  return (
    <>
      <NavBar/>
      <Outlet/>
      {/* <HeroSection/> */}
    </>
  )
}

export default App
