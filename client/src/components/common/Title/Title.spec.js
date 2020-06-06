import React from "react";
import TestRenderer from "react-test-renderer";
import Title from "./index";

test("should render a title component with props", () => {
  const testId = "Title";
  const buttonText = "Test Title";
  const testRenderer = TestRenderer.create(
    <Title dataTestId={testId}>{buttonText}</Title>
  ).root;

  const title = testRenderer.findByProps({ "data-test-id": testId });

  expect(title.props.children).toEqual(buttonText);
});
