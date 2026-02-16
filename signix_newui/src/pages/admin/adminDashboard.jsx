import { useOutletContext } from "react-router-dom";
import { DashboardCards } from "../../components/common/dashboardCard";

const AdminDashboard = () => {
  const { activeMenu } = useOutletContext();

  return (
    <>
      <DashboardCards activeMenu={activeMenu} />
    </>
  );
};

export default AdminDashboard;
