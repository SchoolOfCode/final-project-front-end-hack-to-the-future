import css from "./SuccessFetch.module.css";

function Success({ success, setSuccess }) {
  return (
    <div
      className={
        success
          ? `${css.successContainer} display`
          : `${css.successContainer} noDisplay`
      }
    >
      <p>{success.text}</p>
      <button onClick={() => setSuccess({ success: null, text: "" })} className={css.closeAlertButton}>
        Close
      </button>
    </div>
  );
}

export default Success;
