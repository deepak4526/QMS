import { FormOutlined, SnippetsOutlined } from "@ant-design/icons";
import { ConfigProvider, Typography } from "antd";
import { Link } from "react-router-dom";
const { Title } = Typography;
const MainScreen = () => {
  return (
    <div className="bg-white w-fit p-8 rounded-xl">
      <div className="flex flex-col justify-center items-center h-full w-full border-black">
        <Title>Quality Management System</Title>
        <div className="flex flex-col gap-4">
          <Link
            to="/qms-form"
            className="p-2 bg-black rounded-xl mt-4 text-white h-28 w-64 text-2xl flex gap-4 items-center justify-center"
          >
            <FormOutlined />
            Add Record
          </Link>
          <Link
            to="/admin"
            className="p-2 bg-black rounded-xl mt-4 text-white h-28 w-64 text-2xl flex gap-4 items-center justify-center"
          >
            <SnippetsOutlined />
            View Records
          </Link>
        </div>
      </div>
    </div>
  );
};
export default MainScreen;
