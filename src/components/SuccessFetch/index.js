
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
      <p>
      {success.text}
        {/* {success
          ? "Thanks for confirming your attendance 😀"
          : "Something went wrong 😞 please try again"} */}
      </p>
      <button onClick={() => setSuccess({success: null, text: ""})}>Close</button>
    </div>
  );
}

export default Success;
