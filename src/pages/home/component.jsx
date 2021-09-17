import React, { useState } from "react";
import styles from "./styles.css";
import Button from "../../components/button/component";
import Input from "../../components/input/component";
import { useHistory, withRouter } from "react-router-dom";
import StarRating from "../../components/rating/component";
import Title from "../../components/title/component";
import validate from "../../utils/validations";
import { useDispatch } from "react-redux";
import { loadComments } from "../../reducers/comments-reducer";

/**
 * Function component to access history object for router redirection
 * @param {onSubmitForm}
 */
export function HomeButton({ state }) {
  const dispatch = useDispatch();
  const history = useHistory(); //useHistory hooks to access historry object.

  return (
    <Button
      buttonText="Submit"
      onClick={() => {
        dispatch(loadComments(state));
        history.push("/results");
      }}
      className={styles.button}
    />
  );
}

/**
 * Home component
 */
const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [error, setError] = useState({
    name: false,
    email: false,
    comment: false,
  });

  const onSubmit = (history) => {
    validateForm(history);
  };

  const validateForm = (history) => {
    if (!!name && !!email && !!comment) {
      if (!validate.email(email)) {
        alert("Please enter a valid email id.");
      } else {
        onSubmitForm({ name, comment, email });
        history.push("/results");
      }
    } else {
      setError({
        error: { name: !name, email: !email, comment: !comment },
      });
    }
  };

  return (
    <div className={styles.container}>
      <Title title="GIVE US FEEDBACK" />
      <Input
        id="input"
        type="input"
        error={error.name}
        label="Name"
        handleChange={(value) => setName(value)}
      />
      <Input
        type="email"
        id="email"
        label="Email Id"
        error={error.email}
        handleChange={(value) => setEmail(value)}
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
        handleChange={(value) => setComment(value)}
      />
      <StarRating
        label="Overall Rating"
        initialRating={rating}
        onRatingClick={(value) => setRating(value)}
        className={styles.rating}
      />

      <HomeButton
        buttonText="Submit"
        state={{ name, comment, email, rating, error }}
      />
    </div>
  );
};

export default withRouter(Home);
