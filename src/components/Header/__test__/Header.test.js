import { render, screen } from "@testing-library/react";
import Header from "../Header";

test("Should render same text passed into title prop", async () => {
	const title = "My Header";
	render(<Header title={title} />);
	const headingElement = screen.getByText(title);
	expect(headingElement).toBeInTheDocument();
});

test("getByRole-heading", async () => {
	const title = "My Header";
	render(<Header title={title} />);
	const headingElement = screen.getByRole("heading", { name: title });
	expect(headingElement).toBeInTheDocument();
});

test("getByRole-heading should have one element", async () => {
	const title = "My Header";
	render(<Header title={title} />);
	const headingElements = screen.getAllByRole("heading");
	expect(headingElements.length === 1).toBe(true);
});

it("getByTitle-heading should have title attribute", async () => {
	const title = "My Header";
	render(<Header title={title} />);
	const headingElement = screen.getByTitle(title);
	expect(headingElement).toBeInTheDocument();
});

it("getById-header-1 should have data-test-id", async () => {
	const title = "My Header";
	render(<Header title={title} />);
	const headingElement = screen.getByTestId("header-1");
	expect(headingElement).toBeInTheDocument();
});

// FIND BY
test("findBy should render same text", async () => {
	const title = "My Header";
	render(<Header title={title} />);
	const headingElement = await screen.findByText(title);
	expect(headingElement).toBeInTheDocument();
});

// Fuery BY
test("queryBy not to be have the same text", async () => {
	const title = "My Header";
	render(<Header title={title} />);
	const headingElement = screen.queryByText("Something ");
	expect(headingElement).not.toBeInTheDocument();
});
