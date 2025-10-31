import { Outlet, Route, Routes } from "react-router-dom";
import Header from "./sections/header";
import Home from "@/routes/Home";

const Layout = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="top-companies" element={<>top-companies</>} />
        <Route path="job-tracker" element={<>job-tracker</>} />
        <Route path="my-calender" element={<>my-calender</>} />
        <Route path="documents" element={<>documents</>} />
        <Route path="messages" element={<>messages</>} />
        <Route path="notification" element={<>notification</>} />
      </Routes>

      <Outlet />
    </>
  );
};

export default Layout;
