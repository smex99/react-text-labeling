import React from "react";
import { Layout, Row, Col, Input } from "antd";

import TextLabel from "./TextLabel";
import "antd/dist/antd.css";

export default function App() {
  const [userText, setUserText] = React.useState("");

  const handleInputText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <Layout.Content>
        <Row gutter={[4, 4]}>
          <Col span={24}>
            <form onSubmit={(e) => handleSubmit(e)}>
              <Input.TextArea
                name="textInput"
                rows={4}
                cols={50}
                placeholder="Text to label"
                onChange={(e) => handleInputText(e)}
                value={userText}
              />
            </form>
          </Col>

          <Col span={24}>
            <TextLabel data={[{ id: 1, text: userText }]} />
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  );
}
