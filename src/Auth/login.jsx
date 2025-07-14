import { Button, Form, Image, Input, Typography } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const { Title } = Typography;

const LogIn = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    const data = {
      email_or_mobile: values.email,
      password: values.password,
    };
    console.log(data);

    // Import the LoginAdminData action and dispatch it
    // For now, let's create a simple login simulation
    dispatch({
      type: "auth/login",
      payload: {
        data: {
          user: {
            name: "Admin User",
            email: values.email,
            seller_code: "ADMIN123",
            role: "admin",
          },
          token: "sample-token-123456",
        },
      },
    });

    // Navigate to dashboard after login
    navigate("/admin/qms-entries");

    // Uncomment this when you have the actual LoginAdminData action
    // dispatch(LoginAdminData(data))
    //   .then((response) => {
    //     if (response.meta.requestStatus === "fulfilled") {
    //       navigate("/admin/order-requests");
    //     }
    //   })
    //   .catch((error) => {
    //     Alertify.error("Login failed: " + error.message);
    //   });
  };

  useEffect(() => {
    document.title = "Admin Login: ALP Shop";
  }, []);

  return (
    <div className="grid h-screen place-items-center max-sm:p-4">
      <Form
        layout="vertical"
        className="shadow-2xl p-10 sm:w-1/3 rounded-xl w-full"
        size={"large"}
        onFinish={handleSubmit}
      >
        {/* <Image width={100} src="/assets/alp.svg" preview={false} /> */}
        <Title className="text-center">TimesPro</Title>
        <Title level={2}>Sign In</Title>
        <Form.Item
          label="Email Address"
          name="email"
          rules={[
            {
              required: true,
              message: "Please enter your email",
            },
          ]}
        >
          <Input type="email" placeholder="Enter Email" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please enter your password",
            },
          ]}
        >
          <Input.Password
            placeholder="Enter Password"
            visibilityToggle={{
              visible: passwordVisible,
              onVisibleChange: setPasswordVisible,
            }}
          />
        </Form.Item>
        <Form.Item>
          <Button className="w-full" type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
        <div className="text-right text-[#0474b8]">
          <Link to="/admin/forgot-password">Forgot password</Link>
        </div>
      </Form>
    </div>
  );
};

export default LogIn;
