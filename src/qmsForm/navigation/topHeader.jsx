import {
  Button,
  Image,
  Row,
  Drawer,
  Badge,
  Input,
  Typography,
  ConfigProvider,
} from "antd";
import { Header } from "antd/es/layout/layout";
import { useState } from "react";
import {
  MenuOutlined,
  CloseSquareOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Title } = Typography;
const TopHeader = () => {
  return (
    <Header className="bg-gray-100 w-full h-auto max-sm:w-full max-sm:px-4 max-lg:px-0">
      <div className="flex justify-center w-full items-center sm:px-16 gap-4">
        <Link
          to="/"
          className="flex gap-4 max-h-full items-center justify-center py-2"
        >
          {/* <img
            src="/assets/alp.svg"
            className="w-[80px]"
            preview={false}
            alt="ALP Logo"
          /> */}
          <ConfigProvider
            theme={{
              components: {
                Typography: {
                  titleMarginBottom: 0,
                  titleMarginTop: 0,
                },
              },
            }}
          >
            <Title>TimesPro</Title>
          </ConfigProvider>
        </Link>
      </div>
    </Header>
  );
};

export default TopHeader;
