import { Route, Routes } from "react-router";
import RootLayout from '../Rootlayout/RootLayout';

const MainRouter = () => {
  return (
    <>
      
        <Routes>
          <Route path="/" element={<RootLayout />} />
        </Routes>
      
    </>
  );
};

export default MainRouter;
