import {
  Button,
  DatePicker,
  Form,
  Modal,
  Select,
  Table,
  Typography,
} from "antd";
import Search from "antd/es/transfer/search";
import dayjs from "dayjs";
import { useState } from "react";
import { Link } from "react-router-dom";
import MainForm from "../../qmsForm/mainForm";

const { Title } = Typography;
const { RangePicker } = DatePicker;
const QMSEntries = () => {
  // Function to disable dates after today
  const disableFutureDates = (current) => {
    return current && current > dayjs().endOf("day");
  };
  const [exportModal, setExportModal] = useState(false);
  const [addNewModal, setAddNewModal] = useState(false);
  const columns = [
    {
      title: "Advisor Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Programme Name",
      dataIndex: "programmeName",
      key: "programmeName",
    },
    {
      title: "Contact",
      dataIndex: "contact",
      key: "contact",
    },
    {
      title: "Team Lead",
      dataIndex: "teamLead",
      key: "teamLead",
    },
    {
      title: "Manager",
      dataIndex: "manager",
      key: "manager",
    },
    {
      title: "Overall Score",
      dataIndex: "overallScore",
      key: "overallScore",
      align: "center",
    },
    {
      title: "Audit Date",
      dataIndex: "auditDate",
      key: "auditDate",
    },
  ];
  const dataSource = [
    {
      key: "1",
      name: "John Brown",
      programmeName: "Data Science",
      contact: "9876543210",
      teamLead: "Sarah Johnson",
      manager: "Michael Scott",
      overallScore: 85,
      auditDate: "14/07/2025",
    },
    {
      key: "2",
      name: "Jim Green",
      programmeName: "Web Development",
      contact: "8765432109",
      teamLead: "David Miller",
      manager: "Jennifer Lee",
      overallScore: 92,
      auditDate: "14/07/2025",
    },
    {
      key: "3",
      name: "Joe Black",
      programmeName: "Machine Learning",
      contact: "7654321098",
      teamLead: "Sarah Johnson",
      manager: "Michael Scott",
      overallScore: 78,
      auditDate: "14/07/2025",
    },
    {
      key: "4",
      name: "Emily White",
      programmeName: "Data Science",
      contact: "6543210987",
      teamLead: "David Miller",
      manager: "Jennifer Lee",
      overallScore: 88,
      auditDate: "14/07/2025",
    },
    {
      key: "5",
      name: "Robert Chen",
      programmeName: "Cybersecurity",
      contact: "5432109876",
      teamLead: "Sarah Johnson",
      manager: "Michael Scott",
      overallScore: 95,
      auditDate: "14/07/2025",
    },
    {
      key: "6",
      name: "Lisa Wang",
      programmeName: "Web Development",
      contact: "4321098765",
      teamLead: "David Miller",
      manager: "Jennifer Lee",
      overallScore: 82,
      auditDate: "14/07/2025",
    },
    {
      key: "7",
      name: "Michael Zhang",
      programmeName: "Machine Learning",
      contact: "3210987654",
      teamLead: "Sarah Johnson",
      manager: "Michael Scott",
      overallScore: 79,
      auditDate: "14/07/2025",
    },
    {
      key: "8",
      name: "Jessica Taylor",
      programmeName: "Data Science",
      contact: "2109876543",
      teamLead: "David Miller",
      manager: "Jennifer Lee",
      overallScore: 91,
      auditDate: "14/07/2025",
    },
    {
      key: "9",
      name: "Daniel Brown",
      programmeName: "Cybersecurity",
      contact: "1098765432",
      teamLead: "Sarah Johnson",
      manager: "Michael Scott",
      overallScore: 84,
      auditDate: "14/07/2025",
    },
    {
      key: "10",
      name: "Sophia Martinez",
      programmeName: "Web Development",
      contact: "9876543211",
      teamLead: "David Miller",
      manager: "Jennifer Lee",
      overallScore: 87,
      auditDate: "14/07/2025",
    },
    {
      key: "11",
      name: "William Johnson",
      programmeName: "Machine Learning",
      contact: "8765432100",
      teamLead: "Sarah Johnson",
      manager: "Michael Scott",
      overallScore: 93,
      auditDate: "14/07/2025",
    },
    {
      key: "12",
      name: "Olivia Davis",
      programmeName: "Data Science",
      contact: "7654321099",
      teamLead: "David Miller",
      manager: "Jennifer Lee",
      overallScore: 76,
      auditDate: "14/07/2025",
    },
    {
      key: "13",
      name: "James Wilson",
      programmeName: "Cybersecurity",
      contact: "6543210988",
      teamLead: "Sarah Johnson",
      manager: "Michael Scott",
      overallScore: 89,
      auditDate: "14/07/2025",
    },
    {
      key: "14",
      name: "Emma Anderson",
      programmeName: "Web Development",
      contact: "5432109877",
      teamLead: "David Miller",
      manager: "Jennifer Lee",
      overallScore: 94,
      auditDate: "14/07/2025",
    },
    {
      key: "15",
      name: "Alexander Thomas",
      programmeName: "Machine Learning",
      contact: "4321098766",
      teamLead: "Sarah Johnson",
      manager: "Michael Scott",
      overallScore: 81,
      auditDate: "14/07/2025",
    },
    {
      key: "16",
      name: "Ava Jackson",
      programmeName: "Data Science",
      contact: "3210987655",
      teamLead: "David Miller",
      manager: "Jennifer Lee",
      overallScore: 90,
      auditDate: "14/07/2025",
    },
    {
      key: "17",
      name: "Benjamin White",
      programmeName: "Cybersecurity",
      contact: "2109876544",
      teamLead: "Sarah Johnson",
      manager: "Michael Scott",
      overallScore: 83,
      auditDate: "14/07/2025",
    },
    {
      key: "18",
      name: "Mia Harris",
      programmeName: "Web Development",
      contact: "1098765433",
      teamLead: "David Miller",
      manager: "Jennifer Lee",
      overallScore: 86,
      auditDate: "14/07/2025",
    },
    {
      key: "19",
      name: "Ethan Clark",
      programmeName: "Machine Learning",
      contact: "9876543212",
      teamLead: "Sarah Johnson",
      manager: "Michael Scott",
      overallScore: 77,
      auditDate: "14/07/2025",
    },
    {
      key: "20",
      name: "Charlotte Lewis",
      programmeName: "Data Science",
      contact: "8765432101",
      teamLead: "David Miller",
      manager: "Jennifer Lee",
      overallScore: 96,
      auditDate: "14/07/2025",
    },
  ];

  return (
    <>
      <div className="flex justify-between items-center">
        <Title level={4}>QMS Entries</Title>
        <div className="flex gap-4 items-center">
          <div className="w-[200px]">
            <Search />
          </div>
          <DatePicker disabledDate={disableFutureDates} format="DD/MM/YYYY" />
          <Button
            className="p-1 px-2 hover:bg-white hover:border-blue-500 hover:border-2 bg-black text-white rounded-md border-2"
            onClick={() => setAddNewModal(true)}
          >
            Add New
          </Button>
          <Button
            className="font-semibold hover:bg-white hover:border-blue-500 hover:border-2 bg-black text-white rounded-md border-2"
            onClick={() => setExportModal(true)}
          >
            Export
          </Button>
        </div>
      </div>
      <Table columns={columns} dataSource={dataSource} />
      <Modal
        open={exportModal}
        onCancel={() => setExportModal(false)}
        footer={null}
      >
        <Title level={2}>Export to Excel</Title>
        <Form
          layout="vertical"
          className="flex justify-center flex-col items-center"
        >
          <Form.Item label="For Particular Date" name="forParticularDate">
            <DatePicker disabledDate={disableFutureDates} format="DD/MM/YYYY" />
          </Form.Item>
          <Title level={4}>OR</Title>
          <Form.Item label="Date Range" name="dateRange">
            <RangePicker />
          </Form.Item>
          <Form.Item>
            <Button
              className="font-semibold hover:bg-white hover:border-blue-500 hover:border-2 bg-black text-white rounded-md border-2"
              onClick={() => setExportModal(false)}
            >
              Export
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        open={addNewModal}
        width="90%"
        centered
        className="my-4"
        onCancel={() => setAddNewModal(false)}
        footer={null}
      >
        <MainForm />
      </Modal>
    </>
  );
};

export default QMSEntries;
