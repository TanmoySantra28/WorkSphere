import { Toaster } from "react-hot-toast"
import { Navigate, Route, Routes } from "react-router-dom"
import LoginLanding from "./pages/LoginLanding"
import Layout from "./pages/Layout"
import DashBoard from "./pages/DashBoard"
import Employees from "./pages/Employees"
import Attendance from "./pages/Attendance"
import Leave from "./pages/Leave"
import Payslips from "./pages/Payslips"
import Settings from "./pages/Settings"
import PrintPlayslip from "./pages/PrintPlayslip"
import LoginForm from "./components/LoginForm"

const App = () => {
  return (
    <>
      <Toaster />
      <Routes> 
        <Route path="/login" element={ <LoginLanding/> }/>


        <Route path="/login/admin" element={ <LoginForm role="admin" title="Admin Portal" subtitle="Sign in to manage workforce operations"/> }/>
        <Route path="/login/employee" element={ <LoginForm role="employee" title="Employee Portal" subtitle="Sign in to access your workspace" /> }/>

        <Route element={ <Layout/> }> 
          <Route path="/dashboard" element={ <DashBoard /> } />
          <Route path="/employees" element={ <Employees /> } />
          <Route path="/attendance" element={ <Attendance /> } />
          <Route path="/leave" element={ <Leave /> } />
          <Route path="/payslips" element={ <Payslips /> } />
          <Route path="/settings" element={ <Settings /> } />
        </Route>
        <Route path="/print/payslips/:id" element={ <PrintPlayslip />} />

        <Route path="*" element={ <Navigate to="/dashboard" replace /> } />
      </Routes>
    </>
  )
}

export default App