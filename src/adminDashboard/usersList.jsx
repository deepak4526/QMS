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

const { Title } = Typography;
const { RangePicker } = DatePicker;
const UsersList = () => {
  // Function to disable dates after today
  const disableFutureDates = (current) => {
    return current && current > dayjs().endOf("day");
  };
  const [exportModal, setExportModal] = useState(false);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Contact Number",
      dataIndex: "contact",
      key: "contact",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
  ];
  const dataSource = [
    {
      key: "1",
      name: "John Brown",
      email: "john.brown@example.com",
      contact: "9876543210",
      role: (
        <span className="bg-green-100 text-green-600 px-2 py-1 rounded-md">
          ADVISOR
        </span>
      ),
    },
    {
      key: "2",
      name: "Jim Green",
      email: "jim.green@example.com",
      contact: "8765432109",
      role: (
        <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-md">
          TEAM LEAD
        </span>
      ),
    },
    {
      key: "3",
      name: "Joe Black",
      email: "joe.black@example.com",
      contact: "7654321098",
      role: (
        <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md">
          MANAGER
        </span>
      ),
    },
    {
      key: "4",
      name: "Emily White",
      email: "emily.white@example.com",
      contact: "6543210987",
      role: (
        <span className="bg-green-100 text-green-600 px-2 py-1 rounded-md">
          ADVISOR
        </span>
      ),
    },
    {
      key: "5",
      name: "Robert Chen",
      email: "robert.chen@example.com",
      contact: "5432109876",
      role: (
        <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-md">
          TEAM LEAD
        </span>
      ),
    },
    {
      key: "6",
      name: "Lisa Wang",
      email: "lisa.wang@example.com",
      contact: "4321098765",
      role: (
        <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md">
          MANAGER
        </span>
      ),
    },
    {
      key: "7",
      name: "Michael Zhang",
      email: "michael.zhang@example.com",
      contact: "3210987654",
      role: (
        <span className="bg-green-100 text-green-600 px-2 py-1 rounded-md">
          ADVISOR
        </span>
      ),
    },
    {
      key: "8",
      name: "Jessica Taylor",
      email: "jessica.taylor@example.com",
      contact: "2109876543",
      role: (
        <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-md">
          TEAM LEAD
        </span>
      ),
    },
    {
      key: "9",
      name: "Daniel Brown",
      email: "daniel.brown@example.com",
      contact: "1098765432",
      role: (
        <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md">
          MANAGER
        </span>
      ),
    },
    {
      key: "10",
      name: "Sophia Martinez",
      email: "sophia.martinez@example.com",
      contact: "9876543211",
      role: (
        <span className="bg-green-100 text-green-600 px-2 py-1 rounded-md">
          ADVISOR
        </span>
      ),
    },
    {
      key: "11",
      name: "William Johnson",
      email: "william.johnson@example.com",
      contact: "8765432100",
      role: (
        <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-md">
          TEAM LEAD
        </span>
      ),
    },
    {
      key: "12",
      name: "Olivia Davis",
      email: "olivia.davis@example.com",
      contact: "7654321099",
      role: (
        <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md">
          MANAGER
        </span>
      ),
    },
    {
      key: "13",
      name: "James Wilson",
      email: "james.wilson@example.com",
      contact: "6543210988",
      role: (
        <span className="bg-green-100 text-green-600 px-2 py-1 rounded-md">
          ADVISOR
        </span>
      ),
    },
    {
      key: "14",
      name: "Emma Anderson",
      email: "emma.anderson@example.com",
      contact: "5432109877",
      role: (
        <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-md">
          TEAM LEAD
        </span>
      ),
    },
    {
      key: "15",
      name: "Alexander Thomas",
      email: "alex.thomas@example.com",
      contact: "4321098766",
      role: (
        <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md">
          MANAGER
        </span>
      ),
    },
    {
      key: "16",
      name: "Ava Jackson",
      email: "ava.jackson@example.com",
      contact: "3210987655",
      role: (
        <span className="bg-green-100 text-green-600 px-2 py-1 rounded-md">
          ADVISOR
        </span>
      ),
    },
    {
      key: "17",
      name: "Benjamin White",
      email: "ben.white@example.com",
      contact: "2109876544",
      role: (
        <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-md">
          TEAM LEAD
        </span>
      ),
    },
    {
      key: "18",
      name: "Mia Harris",
      email: "mia.harris@example.com",
      contact: "1098765433",
      role: (
        <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md">
          MANAGER
        </span>
      ),
    },
    {
      key: "19",
      name: "Ethan Clark",
      email: "ethan.clark@example.com",
      contact: "9876543212",
      role: (
        <span className="bg-green-100 text-green-600 px-2 py-1 rounded-md">
          ADVISOR
        </span>
      ),
    },
    {
      key: "20",
      name: "Charlotte Lewis",
      email: "charlotte.lewis@example.com",
      contact: "8765432101",
      role: (
        <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-md">
          TEAM LEAD
        </span>
      ),
    },
  ];

  return (
    <>
      <div className="flex justify-between items-center">
        <Title level={4}>Users</Title>
        <div className="flex gap-4 items-center">
          <div className="w-[200px]">
            <Search />
          </div>
          <Select
            placeholder="Select Role"
            options={[
              {
                label: (
                  <span className="bg-green-100 text-green-600 px-2 py-1 rounded-md">
                    ADVISOR
                  </span>
                ),
                value: (
                  <span className="bg-green-100 text-green-600 px-2 py-1 rounded-md">
                    ADVISOR
                  </span>
                ),
              },
              {
                label: (
                  <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-md">
                    TEAM LEAD
                  </span>
                ),
                value: "teamLead",
              },
              {
                label: (
                  <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md">
                    MANAGER
                  </span>
                ),
                value: (
                  <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md">
                    MANAGER
                  </span>
                ),
              },
            ]}
          />
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
    </>
  );
};

export default UsersList;
