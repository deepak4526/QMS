import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  DashboardOutlined,
  DollarCircleOutlined,
  ProductOutlined,
  UserOutlined,
  TeamOutlined,
  UsergroupAddOutlined,
  SnippetsOutlined,
  AuditOutlined,
} from "@ant-design/icons";
import { Typography } from "antd";
import { Link } from "react-router-dom";

const { Text } = Typography;
export const SIDEBAR_ROUTES = [
  {
    key: "0",
    icon: <SnippetsOutlined />,
    label: <Link to="/admin/qms-entries">QMS Entries</Link>,
  },
  {
    key: "1",
    icon: <TeamOutlined />,
    label: <Link to="/admin/users">Users</Link>,
  },
  {
    key: "2",
    icon: <AuditOutlined />,
    label: <Link to="/admin/programmes">Programmes</Link>,
  },
];
