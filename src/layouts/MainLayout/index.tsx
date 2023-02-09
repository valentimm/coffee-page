import { Header } from "../../components/Header";
import { Outlet } from "react-router-dom";

export function MainLayout () {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}