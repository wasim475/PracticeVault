import { Route, Routes } from "react-router"
import RootLayout from '../RootLayout/RootLayout'
import Program1 from '../Components/program-01/Program1'


const MainRouter = () => {
    
  return (
    <>
      <Routes>
      <Route path="/" element={<RootLayout />} />
      <Route path='/practice'>
        <Route path='program1' element={<Program1/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default MainRouter
