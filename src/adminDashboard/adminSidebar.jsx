import { Image, Menu, Typography } from "antd";
import { SIDEBAR_ROUTES } from "../routes/routesLinking";
import { useLocation } from "react-router-dom";

const { Title } = Typography;

const AdminSidebar = (props) => {
  const location = useLocation();
  const orderItems = SIDEBAR_ROUTES || [];

  // Determine the active menu item based on the current path
  const activeKey =
    orderItems.find((item) => location.pathname.startsWith(item.label.props.to))
      ?.key || "1";

  return (
    <>
      <div
        className={`mx-auto my-4 ${
          props.collapsed ? "w-[70px]" : "max-w-[90%]"
        }`}
      >
        {/* <Image src="/assets/alp.svg" preview={false} /> */}
        <Title level={4} className="text-center">
          TimesPro
        </Title>
      </div>
      <Menu
        theme="light"
        className="text-base text-left mt-2"
        mode="inline"
        selectedKeys={[activeKey]} // Use selectedKeys instead of defaultSelectedKeys
        items={orderItems}
      />
    </>
  );
};

export default AdminSidebar;
