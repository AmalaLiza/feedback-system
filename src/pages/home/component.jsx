import React, { Component } from "react";
import styles from "./styles.css";
import Button from "../../components/button/component";
import Input from "../../components/input/component";
import { useHistory, withRouter } from "react-router-dom";
import StarRating from "../../components/rating/component";

function HomeButton({ onSubmitForm }) {
	const history = useHistory();

	function onSubmit() {
		history.push("/results");
		onSubmitForm();
	}

	return <Button buttonText="Submit" handleClick={onSubmit} />;
}

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			comment: "",
		};
		this.onSubmitForm = this.onSubmitForm.bind(this);
		this.setFormValues = this.setFormValues.bind(this);
	}

	onSubmitForm() {
		this.props.onSubmitForm(this.state);
	}

	setFormValues(valueObject) {
		this.setState(valueObject);
	}

	render() {
		return (
			<div className={styles.container}>
				<Input
					type="input"
					label="Name"
					handleChange={(value) =>
						this.setFormValues({
							name: value,
						})
					}
					placeHolder="Please Enter your namee"
				/>
				<Input
					type="email"
					label="Email Id"
					handleChange={(value) =>
						this.setFormValues({
							email: value,
						})
					}
					placeHolder="Please Enter your emailId"
				/>
				<Input
					type="text"
					label="Comment"
					handleChange={(value) =>
						this.setFormValues({
							comment: value,
						})
					}
					placeHolder="Please Enter your feedback"
				/>
				<StarRating />

				<HomeButton buttonText="Submit" onSubmitForm={this.onSubmitForm} />
			</div>
		);
	}
}
export default withRouter(Home);
