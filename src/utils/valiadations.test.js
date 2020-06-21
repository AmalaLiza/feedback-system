import validations from "./validations";

describe("validation util tests", () => {
	it("should return true", () => {
		expect(validations.email("test@gmail.com")).toEqual(true);
	});

	it("should return false", () => {
		expect(validations.email("testgmailcom")).toEqual(false);
	});
});
