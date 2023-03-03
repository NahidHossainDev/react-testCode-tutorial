import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TodoFooter from "../TodoFooter";

const MockTodoFooter = ({ taskNum }) => {
	return (
		<BrowserRouter>
			<TodoFooter numberOfIncompleteTasks={taskNum} />
		</BrowserRouter>
	);
};

test("Should render the correct text", async () => {
	const taskNum = 1;
	const textShouldBe = `${taskNum} ${taskNum > 1 ? "tasks" : "task"} left`;
	render(<MockTodoFooter taskNum={taskNum} />);
	const pElement = screen.getByText(textShouldBe);
	expect(pElement).toBeInTheDocument();
});

test("Should be visible to user", async () => {
	const taskNum = 1;
	const textShouldBe = `${taskNum} ${taskNum > 1 ? "tasks" : "task"} left`;
	render(<MockTodoFooter taskNum={taskNum} />);
	const pElement = screen.getByText(textShouldBe);
	expect(pElement).toBeVisible();
});
