import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Dropdown, Layout, MenuProps, Row, Space } from "antd";

const { Header: AntHeader } = Layout;

const Header = () => {
  const items: MenuProps["items"] = [
    {
      key: "0",
      label: (
        <Button type="text" danger>
          Logout
        </Button>
      ),
    },
  ];

  return (
    <AntHeader>
      <Row
        justify="end"
        align="middle"
        style={{
          height: "100%",
        }}
      >
        <Dropdown menu={{ items }}>
          <a href="">
            <Space wrap size={16}>
              <Avatar size="large" icon={<UserOutlined />} />
            </Space>
          </a>
        </Dropdown>
      </Row>
    </AntHeader>
  );
};

export default Header;
