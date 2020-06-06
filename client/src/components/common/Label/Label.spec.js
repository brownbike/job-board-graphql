import React from "react";
import TestRenderer from "react-test-renderer";
import Label from "./index";

test("should render a label with props", () => {
  const testId = "Label";
  const buttonText = "Test label";
  const testRenderer = TestRenderer.create(
    <Label dataTestId={testId}>{buttonText}</Label>
  ).root;

  const label = testRenderer.findByProps({ "data-test-id": testId });

  expect(label.props.children).toEqual(buttonText);
});
