import React from "react";
import ReactJson from "react-json-view";
import { Row, Col, Card } from "antd";
import Labels from "./Labels";
import Text from "./Text";

interface IProps {
  data: { id: number; text: string }[];
}

export interface IWordLabel {
  word: string;
  label: string;
}

const TextLabel: React.FC<IProps> = ({ data }) => {
  const [labels, setLabels] = React.useState<string[]>([]);
  const [selectedLabel, setSelectedLabel] = React.useState("");
  const [labeledText, setLabledText] = React.useState([]);

  // add label
  function addLabel(label: string): void {
    setLabels((prevLabels) => [...prevLabels, label]);
  }

  // delete label
  function removeLabel(label: string): void {
    setLabels((prevLabels) => prevLabels.filter((item) => item !== label));
  }

  function handleSelectedLabel(label: string): void {
    setSelectedLabel(label);
  }

  function handleLabelWord(value: IWordLabel) {
    setLabledText((prevState) => [...prevState, value]);
  }

  return (
    <Row>
      <Col span={12}>
        <Text
          text={data[0].text}
          selectedLabel={selectedLabel}
          labelWordHandler={handleLabelWord}
        />
      </Col>

      <Col span={12}>
        <Labels
          labels={labels}
          selectedLabel={selectedLabel}
          addLabelHandler={addLabel}
          removeLableHandler={removeLabel}
          selectedLabelHandler={handleSelectedLabel}
        />
      </Col>

      <Col span={12}>
        {/* <pre>{JSON.stringify(labeledText, null, 2)}</pre> */}
        <ReactJson src={labeledText} theme="monokai" />
      </Col>
    </Row>
  );
};

export default TextLabel;
