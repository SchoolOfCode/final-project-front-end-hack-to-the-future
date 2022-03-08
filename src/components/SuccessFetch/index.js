import css from "./SuccessFetch.module.css";

function Success({ success, setSuccess }) {
  return (
    <div
      className={
        success
          ? `${css.successContainer} display`
          : `${css.successContainer} noDisplay`
      }
      data-testid="className"
    >
      <p>{success.text}</p>
      <button
        onClick={() => setSuccess({ success: null, text: "" })}
        data-testid="closeButton"
      >
        Close
      </button>
    </div>
  );
}

export default Success;
