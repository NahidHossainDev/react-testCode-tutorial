import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";

const MockTodo = () => {
	return (
		<BrowserRouter>
			<Todo />
		</BrowserRouter>
	);
};

const addItem = (items) => {
	const inputElement = screen.getByPlaceholderText("Add a new task here...");
	const btnElement = screen.getByRole("button", { name: "Add" });

	items.forEach((item) => {
		fireEvent.change(inputElement, { target: { value: item } });
		fireEvent.click(btnElement);
	});
};

// Use describe function to make the block separate
describe("Add Todo Items", () => {
	it("add single item into todo list", async () => {
		render(<MockTodo />);
		const items = ["Go for GYM"];
		addItem(items);

		const divElement = screen.getAllByTestId("todo-container");
		expect(divElement[0].textContent).toBe(items[0]);
	});

	it("add multiple items into todo list", async () => {
		render(<MockTodo />);
		const items = ["Go for GYM", "Make Brakefast", "Go to office"];
		addItem(items);
		const divElement = screen.getAllByTestId("todo-container");
		expect(divElement.every((el, i) => el.textContent === items[i])).toBe(true);
	});
});

describe("check is todo item mark as complete", () => {
	it("by click list item should have class 'todo-item-active'", async () => {
		render(<MockTodo />);
		const items = ["Go for GYM", "Make Brakefast", "Go to office"];
		addItem(items);
		const divElement = screen.getAllByTestId("todo-container");
		fireEvent.click(divElement[0]);

		expect(divElement[0]).toHaveClass("todo-item-active");
	});

	it("by click 1s list item shouldn't have the class 'todo-item-active' into other", async () => {
		render(<MockTodo />);
		const items = ["Go for GYM", "Make Brakefast", "Go to office"];
		addItem(items);
		const divElement = screen.getAllByTestId("todo-container");
		fireEvent.click(divElement[1]);

		// Check that only the clicked item has the 'todo-item-active' class
		const allOtherItemNotTobeActive = divElement.every(
			(item, idx) => idx === 1 || !item.classList.contains("todo-item-active")
		);
		expect(allOtherItemNotTobeActive).toBe(true);
	});
});
