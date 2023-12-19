import {
  Alert,
  Button,
  Card,
  Col,
  Form,
  Input,
  message,
  Row,
  Spin,
  Typography,
} from "antd";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";
import useScreenSize from "../../UseScreenSize";
import { API } from "../../Constant";
import { setToken } from "../../Helper";

const SignIn = () => {
  const { isDesktopView } = useScreenSize();
  const navigate = useNavigate();

  const { setUser } = useAuthContext();

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState("");

  const onFinish = async (values) => {
    setIsLoading(true);
    try {
      const value = {
        identifier: values.email,
        password: values.password,
      };
      const response = await fetch(`${API}/auth/local`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });

      const data = await response.json();
      if (data?.error) {
        throw data?.error;
      } else {
        // set the token
        setToken(data.jwt);

        // set the user
        setUser(data.user);

        message.success(`Welcome back ${data.user.username}!`);

        navigate("/", { replace: true });
      }
    } catch (error) {
      console.error(error);
      setError(error?.message ?? "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };


return (
    <Fragment className="signup">
      <Row align="middle" className="sign">
        <Col span={isDesktopView ? 8 : 24} offset={isDesktopView ? 8 : 0}>
          <Card title="SignUp" className="box">
            {error ? (
              <Alert
                className="alert_error"
                message={error}
                type="error"
                closable
                afterClose={() => setError("")}
              />
            ) : null}
            <Form
              name="basic"
              layout="vertical"
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    type: "email",
                  },
                ]}
             className="input" >
                <Input placeholder="Email address" className="placeholder"/>
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true }]}
             className="input" >
                <Input.Password placeholder="Password" className="placeholder"/>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="button"
                >
                  Submit {isLoading && <Spin size="small" />}
                </Button>
              </Form.Item>
            </Form>
            <Typography.Paragraph className="form_help_text">
              Not have an Account? <Link to="/signup">Sign In</Link>
            </Typography.Paragraph>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default SignIn;