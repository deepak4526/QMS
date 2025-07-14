import {
  Button,
  DatePicker,
  Form,
  Input,
  Modal,
  Select,
  Switch,
  Table,
  Typography,
} from "antd";
import Search from "antd/es/transfer/search";
import dayjs from "dayjs";
import { useState } from "react";
import { Link } from "react-router-dom";

const { Title } = Typography;
const { RangePicker } = DatePicker;
const ProgrammeList = () => {
  // Function to disable dates after today
  const disableFutureDates = (current) => {
    return current && current > dayjs().endOf("day");
  };
  const [addNewModal, setAddNewModal] = useState(false);
  const columns = [
    {
      title: "Course Name",
      dataIndex: "courseName",
      key: "courseName",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "startDate",
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      key: "endDate",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_, record) => (
        <Switch
          checked={record.status === "Active"}
          onChange={(checked) => {
            // Optional: Update status state here
            console.log(
              `Course "${record.courseName}" is now ${
                checked ? "Active" : "Inactive"
              }`
            );
          }}
        />
      ),
    },
  ];

  const dataSource = [
    {
      key: "1",
      courseName: "Data Science",
      category: "Tech",
      duration: "3 months",
      startDate: "01/08/2025",
      endDate: "01/11/2025",
      status: "Active",
    },
    {
      key: "2",
      courseName: "UI/UX Design",
      category: "Design",
      duration: "2 months",
      startDate: "15/07/2025",
      endDate: "15/09/2025",
      status: "Active",
    },
    {
      key: "3",
      courseName: "Digital Marketing",
      category: "Marketing",
      duration: "1 month",
      startDate: "01/07/2025",
      endDate: "01/08/2025",
      status: "Inactive",
    },
    {
      key: "4",
      courseName: "Machine Learning",
      category: "Tech",
      duration: "4 months",
      startDate: "10/06/2025",
      endDate: "10/10/2025",
      status: "Active",
    },
    {
      key: "5",
      courseName: "Finance Fundamentals",
      category: "Finance",
      duration: "2 months",
      startDate: "20/07/2025",
      endDate: "20/09/2025",
      status: "Inactive",
    },
    {
      key: "6",
      courseName: "Cybersecurity Basics",
      category: "Tech",
      duration: "3 months",
      startDate: "05/06/2025",
      endDate: "05/09/2025",
      status: "Active",
    },
    {
      key: "7",
      courseName: "Product Management",
      category: "Business",
      duration: "2 months",
      startDate: "01/09/2025",
      endDate: "01/11/2025",
      status: "Inactive",
    },
    {
      key: "8",
      courseName: "Content Writing",
      category: "Marketing",
      duration: "1 month",
      startDate: "01/06/2025",
      endDate: "01/07/2025",
      status: "Active",
    },
    {
      key: "9",
      courseName: "React Development",
      category: "Tech",
      duration: "2.5 months",
      startDate: "10/07/2025",
      endDate: "25/09/2025",
      status: "Active",
    },
    {
      key: "10",
      courseName: "Excel for Beginners",
      category: "Tools",
      duration: "1 month",
      startDate: "01/07/2025",
      endDate: "01/08/2025",
      status: "Inactive",
    },
    {
      key: "11",
      courseName: "Python Basics",
      category: "Tech",
      duration: "2 months",
      startDate: "15/06/2025",
      endDate: "15/08/2025",
      status: "Active",
    },
    {
      key: "12",
      courseName: "Brand Strategy",
      category: "Marketing",
      duration: "1.5 months",
      startDate: "20/06/2025",
      endDate: "05/08/2025",
      status: "Inactive",
    },
    {
      key: "13",
      courseName: "SEO Essentials",
      category: "Marketing",
      duration: "1 month",
      startDate: "05/07/2025",
      endDate: "05/08/2025",
      status: "Active",
    },
    {
      key: "14",
      courseName: "Cloud Computing",
      category: "Tech",
      duration: "3 months",
      startDate: "01/08/2025",
      endDate: "01/11/2025",
      status: "Inactive",
    },
    {
      key: "15",
      courseName: "Agile Methodologies",
      category: "Business",
      duration: "2 months",
      startDate: "10/07/2025",
      endDate: "10/09/2025",
      status: "Active",
    },
    {
      key: "16",
      courseName: "Illustrator Crash Course",
      category: "Design",
      duration: "1 month",
      startDate: "01/06/2025",
      endDate: "01/07/2025",
      status: "Inactive",
    },
    {
      key: "17",
      courseName: "SQL for Analysts",
      category: "Tech",
      duration: "2 months",
      startDate: "25/07/2025",
      endDate: "25/09/2025",
      status: "Active",
    },
    {
      key: "18",
      courseName: "Leadership 101",
      category: "Business",
      duration: "1.5 months",
      startDate: "15/06/2025",
      endDate: "30/07/2025",
      status: "Active",
    },
    {
      key: "19",
      courseName: "Graphic Design",
      category: "Design",
      duration: "2.5 months",
      startDate: "01/07/2025",
      endDate: "15/09/2025",
      status: "Inactive",
    },
    {
      key: "20",
      courseName: "Data Analytics",
      category: "Tech",
      duration: "3 months",
      startDate: "10/06/2025",
      endDate: "10/09/2025",
      status: "Active",
    },
  ];

  return (
    <>
      <div className="flex justify-between items-center">
        <Title level={4}>Programmes</Title>
        <div className="flex gap-4 items-center">
          <div className="w-[200px]">
            <Search />
          </div>
          {/* <DatePicker disabledDate={disableFutureDates} format="DD/MM/YYYY" /> */}
          <Button
            className="p-1 px-2 hover:bg-white hover:border-blue-500 hover:border-2 bg-black text-white rounded-md border-2"
            onClick={() => setAddNewModal(true)}
          >
            Add New
          </Button>
        </div>
      </div>
      <Table columns={columns} dataSource={dataSource} />
      <Modal
        open={addNewModal}
        onCancel={() => setAddNewModal(false)}
        footer={null}
      >
        <Title level={2}>Add New Programme</Title>
        <Form
          layout="vertical"
          className="flex justify-center flex-col items-center"
        >
          <Form.Item label="Course Name" name="courseName" className="w-full">
            <Input placeholder="Enter Course Name" />
          </Form.Item>
          <div className="flex gap-4 w-full">
            <Form.Item label="Category" name="category" className="w-1/2">
              <Select
                options={[
                  {
                    label: "Select an option",
                    value: "",
                  },
                  {
                    label: "Option 1",
                    value: "option1",
                  },
                  {
                    label: "Option 2",
                    value: "option2",
                  },
                ]}
              />
            </Form.Item>
            <Form.Item label="Duration" name="duration" className="w-1/2">
              <Input placeholder="Enter Duration" />
            </Form.Item>
          </div>
          <div className="flex gap-4 w-full">
            <Form.Item label="Start Date" name="startDate" className="w-1/2">
              <DatePicker format="DD/MM/YYYY" className="w-full" />
            </Form.Item>
            <Form.Item label="End Date" name="endDate" className="w-1/2">
              <DatePicker format="DD/MM/YYYY" className="w-full" />
            </Form.Item>
          </div>
          <Form.Item>
            <Button
              className="font-semibold hover:bg-white hover:border-blue-500 hover:border-2 bg-black text-white rounded-md border-2"
              onClick={() => setAddNewModal(false)}
            >
              Save
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ProgrammeList;
