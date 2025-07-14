import { Col, Image, Row, Typography } from "antd";
import { Link } from "react-router-dom";

const WebFooter = () => {
  return (
    <Col className="bg-[#007FC5] text-white text-center py-8 max-lg:px-8 max-lg:py-8 max-w-screen">
      <Link to="/" className="gap-4 max-h-full mx-auto">
        <Image
          src="/assets/alp.svg"
          className="w-[80px] aspect-square object-contain"
          preview={false}
        />
      </Link>
      <Typography.Paragraph className="text-white text-[16px] font-medium">
        Plot No. 32, Sector 18 HUDA, Gurgaon, Haryana, India - 122015
      </Typography.Paragraph>
      <Typography.Paragraph className="text-white text-[16px] font-medium">
        Phones: +91 124-4731500, 124-4731600, Email: marketing@alpshop.in
      </Typography.Paragraph>
      <Row className="text-white text-[16px] font-medium gap-2 justify-center">
        <Link to="/">Terms and Conditions</Link>
        <Link to="/">Privacy Policy</Link>
        <Link to="/">Refund Policy</Link>
        <Link to="/">Shipping Policy</Link>
        <Link to="/">Contact Us</Link>
      </Row>
      <Typography.Paragraph className="text-white text-[14px] pt-6 font-medium">
        © 2023-2024&nbsp;
        <Link to="/" className="text-white">
          ALP
        </Link>
        &nbsp; All Rights Reserved
      </Typography.Paragraph>
    </Col>
  );
};

export default WebFooter;
