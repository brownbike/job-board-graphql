import React from "react";
import TestRenderer from "react-test-renderer";
import Button from "./index";

const clickSpy = jest.fn();

test("should render and click a button", () => {
  const testId = "Button";
  const buttonText = "Test Button";
  const testRenderer = TestRenderer.create(
    <Button dataTestId={testId} onClick={clickSpy}>
      {buttonText}
    </Button>
  ).root;

  const button = testRenderer.findByProps({ "data-test-id": testId });

  expect(button.props.children).toEqual(buttonText);
  button.props.onClick();
  expect(clickSpy.mock.calls.length).toEqual(1);
});
