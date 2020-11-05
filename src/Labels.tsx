import React from "react";
import { Row, Col, Card, Input, Button, Checkbox } from "antd";
import { DeleteFilled } from "@ant-design/icons";

interface IProps {
  labels: string[];
  selectedLabel: string;
  addLabelHandler: (label: string) => void;
  removeLableHandler: (label: string) => void;
  selectedLabelHandler: (label: string) => void;
}

const Labels: React.FC<IProps> = ({
  labels,
  selectedLabel,
  addLabelHandler,
  removeLableHandler,
  selectedLabelHandler
}) => {
  const [text, setText] = React.useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSelectedLabel = (e: React.FormEvent<HTMLInputElement>) => {
    selectedLabelHandler(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    addLabelHandler(text);
    setText("");
  };

  return (
    <Card hoverable title="Create custom labels">
      {labels.map((label, index) => (
        <Row key={index}>
          <Input
            name={label}
            type="checkbox"
            value={label}
            style={{ margin: 2 }}
            checked={selectedLabel === label ? true : false}
            onChange={(e) => handleSelectedLabel(e)}
          />

          <p style={{ margin: 4 }}>{label}</p>

          <Button
            danger
            icon={<DeleteFilled />}
            htmlType="button"
            type="primary"
            shape="circle"
            onClick={(_e) => removeLableHandler(label)}
          />
        </Row>
      ))}
      {/* Label composer */}
      <Row>
      <form autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
        <Input
          name="label"
          type="text"
          value={text}
          placeholder="label name"
          onChange={(e) => handleInputChange(e)}
        />

        <Button htmlType="submit" type="primary">
          Create
        </Button>
      </form>
      </Row>
    </Card>
  );
};

export default Labels;
