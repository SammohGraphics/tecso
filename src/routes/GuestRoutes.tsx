import { Outlet } from "react-router-dom";
import GuestLayout from "../pages/layouts/GuestLayout";

// !####### MAIN FUNC ##########
const GuestRoutes = () => {
  return (
    <GuestLayout>
      <Outlet />
    </GuestLayout>
  );
};

export default GuestRoutes;
