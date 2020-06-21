import React from "react";
import { Home } from "./component";
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
						<Home onSubmitForm={jest.fn()} />
					</HashRouter>
				</Provider>
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
