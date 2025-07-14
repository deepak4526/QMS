import { Button, Layout, theme } from "antd";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AdminSidebar from "./adminSidebar";
import AdminRoutes from "../routes/adminRoutes";
import AuthRoutes from "../routes/authRoutes";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

const AdminApp = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const authData = useSelector((state) => state.auth_store);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to /admin/qms-entries if the user is at /admin
    if (authData.is_Login && location.pathname === "/admin") {
      navigate("/admin/qms-entries");
    }
  }, [authData.is_Login, location.pathname, navigate]);

  return (
    <Layout className="min-h-screen">
      {authData.is_Login ? (
        <>
          <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            theme={"light"}
          >
            <AdminSidebar collapsed={collapsed} role={authData.role} />
          </Sider>
          <Layout>
            <Header
              className="flex justify-between items-center text-lg px-2"
              style={{
                background: colorBgContainer,
              }}
            >
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
              />
            </Header>
            <Content className="bg-white m-4 p-4 rounded-xl">
              <AdminRoutes />
            </Content>
          </Layout>
        </>
      ) : (
        <AuthRoutes />
      )}
    </Layout>
  );
};

export default AdminApp;
