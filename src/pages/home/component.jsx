import React, { Component } from "react";
import styles from "./styles.css";
import Button from "../../components/button/component";
import Input from "../../components/input/component";
import { useHistory, withRouter } from "react-router-dom";
import StarRating from "../../components/rating/component";
import Title from "../../components/title/component";

function HomeButton({ onSubmitForm }) {
	const history = useHistory();

	function onSubmit() {
		onSubmitForm(history);
	}

	return (
		<Button
			buttonText="Submit"
			handleClick={onSubmit}
			className={styles.button}
		/>
	);
}

class Home extends Component {
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
		const { name, email, comment } = this.state;
		if (!!name && !!email && !!comment) {
			this.props.onSubmitForm(this.state);
			history.push("/results");
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
export default withRouter(Home);
