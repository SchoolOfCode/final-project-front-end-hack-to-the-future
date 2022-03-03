import React from "react";
import Form from "../Form/index";
import css from "./CreateActivity.module.css";

function CreateActivity({ user_id }) {
  return (
    <div className={`${css.activityFormContainer} flex-vertical`}>
      <Form user_id={user_id} />
    </div>
  );
}

export default CreateActivity;
