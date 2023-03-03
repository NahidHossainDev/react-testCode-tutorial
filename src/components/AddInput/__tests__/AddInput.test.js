import { fireEvent, render, screen } from "@testing-library/react";
import AddInput from "../AddInput";

const mockSetTodo = jest.fn();

describe("AddInput", () => {
	it("Should render input element", async () => {
		render(<AddInput todos={[]} setTodos={mockSetTodo} />);
		const inputElement = screen.getByPlaceholderText("Add a new task here...");
		expect(inputElement).toBeInTheDocument();
	});

	it("Should be able to type in input", async () => {
		const text = "Go for GYM";
		render(<AddInput todos={[]} setTodos={mockSetTodo} />);
		const inputElement = screen.getByPlaceholderText("Add a new task here...");
		fireEvent.change(inputElement, { target: { value: text } });

		expect(inputElement.value).toBe(text);
	});

	it("input element should be empty by clicking add new btn", async () => {
		const text = "Go for GYM";
		render(<AddInput todos={[]} setTodos={mockSetTodo} />);

		const btnElement = screen.getByRole("button", { name: "Add" });
		const inputElement = screen.getByPlaceholderText("Add a new task here...");
		fireEvent.change(inputElement, { target: { value: text } });
		fireEvent.click(btnElement);

		expect(inputElement.value).toBe("");
	});
});
