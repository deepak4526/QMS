import {
  Button,
  ConfigProvider,
  DatePicker,
  Form,
  Input,
  Select,
  Switch,
  Typography,
} from "antd";
const { Title, Text } = Typography;
const MainForm = () => {
  return (
    <div className="bg-white rounded-xl w-4/5 p-8 mx-auto">
      {/* <ConfigProvider> */}
      <Form layout="vertical">
        <div className="bg-gray-100 p-4 rounded-xl">
          <Title level={3}>Add New Agent Record</Title>
          <div className="flex flex-wrap">
            <Form.Item
              label="Title"
              name="title"
              className="w-1/3 px-2"
              rules={[
                {
                  required: true,
                  message: "Please enter a title",
                },
              ]}
            >
              <Input placeholder="Enter Title" />
            </Form.Item>
            <Form.Item
              label="Date of the Call"
              name="dateOfCall"
              className="w-1/3 px-2 text-black"
              rules={[
                {
                  required: true,
                  message: "Please enter a date of call",
                },
              ]}
            >
              <DatePicker className="w-full" format="DD/MM/YYYY" />
            </Form.Item>
            <Form.Item
              label="Audit Date"
              name="auditDate"
              className="w-1/3 px-2"
              rules={[
                {
                  required: true,
                  message: "Please enter an Audit Date",
                },
              ]}
            >
              {/* <Input type="date" placeholder="Enter Title" /> */}
              <DatePicker className="w-full" format="DD/MM/YYYY" />
            </Form.Item>

            <Form.Item
              label="Call Duration"
              name="callDuration"
              className="w-1/3 px-2"
              rules={[
                {
                  required: true,
                  message: "Please enter call duration",
                },
              ]}
            >
              <Input placeholder="Enter Call Duration" />
            </Form.Item>
            <Form.Item
              label="Programme Name"
              name="programmeName"
              className="w-1/3 px-2"
              rules={[
                {
                  required: true,
                  message: "Please select Programme Name ",
                },
              ]}
            >
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
            <Form.Item
              label="Week"
              name="week"
              className="w-1/3 px-2"
              rules={[
                {
                  required: true,
                  message: "Please select Week ",
                },
              ]}
            >
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
            <Form.Item
              label="Advisor Name"
              name="advisorName"
              className="w-1/3 px-2"
              rules={[
                {
                  required: true,
                  message: "Please select Advisor Name ",
                },
              ]}
            >
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
            <Form.Item
              label="Team Lead"
              name="teamLead"
              className="w-1/3 px-2"
              rules={[
                {
                  required: true,
                  message: "Please select Team Lead ",
                },
              ]}
            >
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
            <Form.Item
              label="Manager"
              name="manager"
              className="w-1/3 px-2"
              rules={[
                {
                  required: true,
                  message: "Please select Manager ",
                },
              ]}
            >
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
            <Form.Item
              label="Contact Number"
              name="contact"
              className="w-1/3 px-2"
              rules={[
                {
                  required: true,
                  message: "Please enter Contact Number",
                },
              ]}
            >
              <Input placeholder="Enter Contact Number" />
            </Form.Item>
            <Form.Item
              label="Call Type"
              name="callType"
              className="w-1/3 px-2"
              rules={[
                {
                  required: true,
                  message: "Please select Call Type ",
                },
              ]}
            >
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
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-xl mt-8">
          <Title level={3}>Product & Process</Title>
          <div className="flex flex-wrap">
            <Form.Item
              label="Opening of the Call"
              name="callOpening"
              className="w-1/3 px-2"
              rules={[
                {
                  required: true,
                  message: "Please select Opening of the Call ",
                },
              ]}
            >
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
            <Form.Item
              label={
                <span className="text-red-500">
                  Programme Eligibility Checks
                </span>
              }
              name="programmeEligibilityChecks"
              className="w-1/3 px-2"
              rules={[
                {
                  required: true,
                  message: "Please select Programme Eligibility Checks ",
                },
              ]}
            >
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
            <Form.Item
              label={
                <span className="text-red-500">
                  Customer Need Assessment & Profiling
                </span>
              }
              name="customerNeedAssessment"
              className="w-1/3 px-2"
              rules={[
                {
                  required: true,
                  message:
                    "Please select Customer Need Assessment & Profiling ",
                },
              ]}
            >
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
            <Form.Item
              label="Call Flow/Time Invested"
              name="callFlowTimeInvested"
              className="w-1/3 px-2"
              rules={[
                {
                  required: true,
                  message: "Please select Call Flow/Time Invested ",
                },
              ]}
            >
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
            <Form.Item
              label={<span className="text-red-500">Accurate Information</span>}
              name="accurateInformation"
              className="w-1/3 px-2"
              rules={[
                {
                  required: true,
                  message: "Please select Accurate Information",
                },
              ]}
            >
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
            <Form.Item
              label="Programme Knowledge"
              name="programmeKnowledge"
              className="w-1/3 px-2"
              rules={[
                {
                  required: true,
                  message: "Please select Programme Knowledge",
                },
              ]}
            >
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
            <Form.Item
              label="Reference Asked"
              name="referenceAsked"
              className="w-1/3 px-2"
              rules={[
                {
                  required: true,
                  message: "Please select Reference Asked",
                },
              ]}
            >
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
            <Form.Item
              label="Objection Handling"
              name="objectionHandling"
              className="w-1/3 px-2"
              rules={[
                {
                  required: true,
                  message: "Please select Objection Handling",
                },
              ]}
            >
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
            <Form.Item
              label={<span className="text-red-500">Disposition Analysis</span>}
              name="programmeEligibilityChecks"
              className="w-1/3 px-2"
              rules={[
                {
                  required: true,
                  message: "Please select Disposition Analysis",
                },
              ]}
            >
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
            <Form.Item
              label="Closing of the Call"
              name="closingOfCall"
              className="w-1/3 px-2"
              rules={[
                {
                  required: true,
                  message: "Please select Closing of the Call",
                },
              ]}
            >
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
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-xl mt-8">
          <Title level={3}>Soft Skills</Title>
          <div className="flex flex-wrap">
            <Form.Item
              label={
                <span className="text-red-500">Professional Behavior</span>
              }
              name="professionalBehaviour"
              className="w-1/3 px-2"
              rules={[
                {
                  required: true,
                  message: "Please select Professional Behavior",
                },
              ]}
            >
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
            <Form.Item
              label="Effective Communication"
              name="effectiveCommunication"
              className="w-1/3 px-2"
              rules={[
                {
                  required: true,
                  message: "Please select Effective Communication",
                },
              ]}
            >
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
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-xl mt-8">
          <Title level={3}>Score</Title>
          <div className="flex items-center gap-4">
            <div className="flex w-1/3">
              <Text>Product & Process</Text>
              <Text>: 0</Text>
            </div>
            <div className="flex w-1/3">
              <Text>Soft Skills</Text>
              <Text>: 0</Text>
            </div>
            <div className="flex w-1/3">
              <Text>Overall</Text>
              <Text>: 0</Text>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-xl mt-8">
          <Title level={3}>Remarks</Title>
          <div className="flex flex-wrap">
            <Form.Item
              label="Disposition Remark"
              name="dispositionRemark"
              className="w-1/3 px-2"
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Input.TextArea placeholder="Enter Remarks" />
            </Form.Item>
            <Form.Item
              label="Recording Links"
              name="recordingLinks"
              className="w-1/3 px-2"
              rules={[
                {
                  required: true,
                  message: "Please enter Recording Links",
                },
              ]}
            >
              <Input.TextArea placeholder="Enter Remarks" />
            </Form.Item>
            <Form.Item
              label="Area of Improvement"
              name="areaOfImprovement"
              className="w-1/3 px-2"
              rules={[
                {
                  required: false,
                  message: "Please select Area of Improvement",
                },
              ]}
            >
              <Select
                className=""
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

            <Form.Item
              label="Call Summary"
              name="callSummary"
              className="w-1/3 px-2"
              rules={[
                {
                  required: false,
                  message: "Please enter Call Summary",
                },
              ]}
            >
              <Input.TextArea placeholder="Enter Remarks" />
            </Form.Item>
            <Form.Item
              label="Improvement (Comments)"
              name="improvementComments"
              className="w-1/3 px-2"
              rules={[
                {
                  required: false,
                  message: "Please enter Improvement (Comments)",
                },
              ]}
            >
              <Input.TextArea placeholder="Enter Remarks" />
            </Form.Item>
            <Form.Item
              label="Good/Strength about this Call"
              name="goodStrengthAboutThisCall"
              className="w-1/3 px-2"
              rules={[
                {
                  required: false,
                  message: "Please enter Good/Strength about this Call",
                },
              ]}
            >
              <Input.TextArea placeholder="Enter Remarks" />
            </Form.Item>
            <Form.Item
              label="Effective Communication Area"
              name="effectiveCommunicationArea"
              className="w-1/3 px-2"
              rules={[
                {
                  required: false,
                  message: "Please select Effective Communication Area",
                },
              ]}
            >
              <Select
                className=""
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
            <Form.Item
              label="Programme Knowledge (Partial Rating)"
              name="programmeKnowledgePartialRating"
              className="w-1/3 px-2"
              rules={[
                {
                  required: false,
                  message: "Please select Programme Knowledge (Partial Rating)",
                },
              ]}
            >
              <Select
                className=""
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
            <Form.Item
              label="Send Mail Confirmation"
              name="sendMailConfirmation"
              className="w-1/3 px-2"
              rules={[
                {
                  required: true,
                  message: "Please select Send Mail Confirmation",
                },
              ]}
            >
              <Switch checkedChildren="On" unCheckedChildren="Off" />
            </Form.Item>
          </div>
        </div>
        <div className="mx-auto mt-4 text-center">
          <Button type="primary" htmlType="submit" className="rounded-md">
            Save Data
          </Button>
        </div>
      </Form>

      {/* </ConfigProvider> */}
    </div>
  );
};
export default MainForm;
