import React from "react";
import { Row, Col, Card, Input } from "antd";
import { IWordLabel } from "./TextLabel";

interface IProps {
  text: string;
  selectedLabel: string;
  labelWordHandler: (value: IWordLabel) => void;
}

interface ILabeledText {
  index: number;
  label: string;
}

const Text: React.FC<IProps> = ({ text, selectedLabel, labelWordHandler }) => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number>();
  const [labeledIndex, setLabeledIndex] = React.useState<ILabeledText[]>([]);

  function handleLabeledWord(value: ILabeledText) {
    setLabeledIndex((prevState) => [...prevState, value]);
  }

  function chunckText(text: string): string[] {
    let words = text.split(" ");
    return words;
  }

  function isWordLabeled(index: number): boolean {
    if (labeledIndex.filter((item) => item.index === index).length > 0) {
      // setLabeledIndex((prevState) => [...labeledIndex.splice(index, 1)]);
      return true;
    }
    return false;
  }

  function getWordIndexLabel(index: number): string {
    let wordLabel;

    for (let obj of labeledIndex) {
      if (obj.index === index) wordLabel = obj.label;
    }

    return wordLabel;
  }

  return (
    <div
      className="text-label"
      style={{ display: "flex", justifyContent: "space-around" }}
    >
      {chunckText(text).map((word, index) => (
        <div
          key={index}
          className="word"
          onMouseOver={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(-1)}
          onClick={() => {
            labelWordHandler({ word, label: selectedLabel });
            handleLabeledWord({ index, label: selectedLabel });
          }}
        >
          {word}{" "}
          {hoveredIndex === index && selectedLabel && (
            <span
              style={{
                backgroundColor: selectedLabel === "positive" ? "green" : "red",
                color: "white",
                padding: 2,
                borderRadius: 5
              }}
            >
              {selectedLabel}
            </span>
          )}
          {isWordLabeled(index) && (
            <span
              style={{
                backgroundColor: "grey",
                color: "white",
                padding: 2,
                borderRadius: 5
              }}
            >
              {getWordIndexLabel(index)}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Text;
