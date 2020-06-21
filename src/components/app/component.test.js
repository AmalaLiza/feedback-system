import React from "react";
import { shallow } from "enzyme";
import App from "./component";
import renderer from "react-test-renderer";
import { HashRouter } from "react-router-dom";
import configureStore from "../../store";
import { Provider } from "react-redux";

const mockStore = configureStore();

describe("App Component Test Suite", () => {
	it("renders correctly", () => {
		const tree = renderer
			.create(
				<Provider store={mockStore}>
					<HashRouter>
						<App />
					</HashRouter>
				</Provider>
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
