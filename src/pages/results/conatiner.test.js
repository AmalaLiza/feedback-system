import React from "react";
import { Results } from "./component";
import renderer from "react-test-renderer";
import configureStore from "../../store";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

const mockStore = configureStore();

describe("CommentBox Component Test Suite", () => {
	it("renders correctly", () => {
		const tree = renderer
			.create(
				<Provider store={mockStore}>
					<HashRouter>
						<Results />
					</HashRouter>
				</Provider>
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
