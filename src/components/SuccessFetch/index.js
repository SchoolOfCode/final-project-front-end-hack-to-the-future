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
      <p id="successText">{success.text}</p>
      <button onClick={() => setSuccess({ success: null, text: "" })}>
        Close
      </button>
    </div>
  );
}

export default Success;
