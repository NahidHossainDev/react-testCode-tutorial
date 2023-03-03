import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";

const MockFollowerList = () => {
	return (
		<BrowserRouter>
			<FollowersList />
		</BrowserRouter>
	);
};

describe("FollowerList", () => {
	it("Should have follower list into document", async () => {
		render(<MockFollowerList />);
		const followerDivElement = await screen.findByTestId("follower-item-0");
		expect(followerDivElement).toBeInTheDocument();
	});

	it("Should have multiple follower list into document", async () => {
		render(<MockFollowerList />);
		const followerDivElement = await screen.findAllByTestId(/follower-item/i);
		expect(followerDivElement.length > 1).toBe(true);
	});
});
