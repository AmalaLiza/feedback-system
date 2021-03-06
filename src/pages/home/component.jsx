import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./styles.css";
import Button from "../../components/button/component";
import Input from "../../components/input/component";
import { useHistory, withRouter } from "react-router-dom";
import StarRating from "../../components/rating/component";
import Title from "../../components/title/component";
import validate from "../../utils/validations";

/**
 * Function component to access history object for router redirection
 * @param {onSubmitForm}
 */
export function HomeButton({ onSubmitForm }) {
	const history = useHistory(); //useHistory hooks to access historry object.

	function onSubmit() {
		onSubmitForm(history);
	}

	return (
		<Button buttonText="Submit" onClick={onSubmit} className={styles.button} />
	);
}

/**
 * Home component
 */
export class Home extends Component {
	/**
	 * Home component state
	 */
	state = {
		name: "",
		email: "",
		comment: "",
		rating: 0,
		error: {
			name: false,
			email: false,
			comment: false,
		},
	};

	onSubmitForm = (history) => {
		this.validateForm(history);
	};

	validateForm = (history) => {
		const { name, comment } = this.state;
		let email = this.state.email;

		if (!!name && !!email && !!comment) {
			if (!validate.email(email)) {
				alert("Please enter a valid email id.");
			} else {
				this.props.onSubmitForm(this.state);
				history.push("/results");
			}
		} else {
			this.setState({
				error: { name: !name, email: !email, comment: !comment },
			});
		}
	};

	setFormValues = (valueObject) => {
		this.setState(valueObject);
	};

	render() {
		const { rating, error } = this.state;
		return (
			<div className={styles.container}>
				<Title title="GIVE US FEEDBACK" />
				<Input
					id="input"
					type="input"
					error={error.name}
					label="Name"
					handleChange={(value) =>
						this.setFormValues({
							name: value,
						})
					}
				/>
				<Input
					type="email"
					id="email"
					label="Email Id"
					error={error.email}
					handleChange={(value) =>
						this.setFormValues({
							email: value,
						})
					}
				/>
				<Input
					type="comment"
					id="comment"
					label="Comments"
					error={error.comment}
					classes={{
						container: styles.commentInput,
						active: styles.activeCommentInput,
					}}
					handleChange={(value) =>
						this.setFormValues({
							comment: value,
						})
					}
				/>
				<StarRating
					label="Overall Rating"
					initialRating={rating}
					onRatingClick={(value) =>
						this.setFormValues({
							rating: value || 1, //Default value of rating set as 1, if user doesn't rate.
						})
					}
					className={styles.rating}
				/>

				<HomeButton buttonText="Submit" onSubmitForm={this.onSubmitForm} />
			</div>
		);
	}
}

Home.propTypes = {
	/**
	 * onSubmitForm: Function called when form is submitted to dispatch action.
	 */
	onSubmitForm: PropTypes.func.isRequired,
};

export default withRouter(Home);
