import { ConfigProvider, Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import QmsFormRoutes from "../routes/qmsFormRoutes";
import TopHeader from "./navigation/topHeader";

const QmsApp = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          Layout: {
            headerPadding: 0,
          },
        },
      }}
    >
      <Layout className="min-h-screen flex flex-col">
        <Header className="flex justify-between items-center text-lg px-0 h-min bg-black">
          <TopHeader />
        </Header>
        <Content
          className="bg-white p-0 flex-1 flex justify-center items-center p-8"
          style={{ background: "linear-gradient(135deg, #3a7bd5, #00d2ff)" }}
        >
          <QmsFormRoutes />
        </Content>
        <Footer className="p-0 bg-black">
          <div className="text-white text-center p-4">
            Created and Maintained by team IT - TimesPro
          </div>
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};
export default QmsApp;
