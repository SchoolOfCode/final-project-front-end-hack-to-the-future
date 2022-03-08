import React from "react";
import Form from "../Form/index";
import css from "./CreateActivity.module.css";

function CreateActivity({ user_id, setSuccess }) {
  return (
    <div className={`${css.activityFormContainer} flex-vertical`}>
      <Form user_id={user_id} setSuccess={setSuccess} />
    </div>
  );
}

export default CreateActivity;
