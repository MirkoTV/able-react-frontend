import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders Able Typeahead", () => {
  render(<App />);
  const linkElement = screen.getByText(/Typeahead/i);
  expect(linkElement).toBeInTheDocument();
});

test("user can type on search bar", async () => {
  render(<App />);
  const textInput = screen.getByPlaceholderText(/Search/i);
  expect(textInput).toBeInTheDocument();
  let resultsList = screen.queryByTestId("results-list");
  expect(resultsList).not.toBeInTheDocument();
  userEvent.type(textInput, "Spiderman");
  await waitFor(() => expect(screen.queryByTestId("results-list")).toBeInTheDocument());
  textInput.blur();
  await waitFor(() => expect(screen.queryByTestId("results-list")).not.toBeInTheDocument());
});
