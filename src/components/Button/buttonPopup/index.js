import React from "react";
import css from "./buttonPopup.module.css";

export function Popup(props) {
  return (
    <div className={css.popup}>
      <div className={css.popupInner}>
        {props.content};
        {/* this button might need changing from button to span. */}
        <button className={css.closeBtn} onClick={props.handleClose}>
          X
        </button>
      </div>
    </div>
  );
}

// function Popup({ setTrigger, popupState }) {
//     const [timedPopup, setTimedPopup] = useState(false);
//     setTrigger = ;
//     useEffect(() => {
//        setTimeout(() => {
//           setTimedPopup(popupState);
//        });
//     }, [popupState]);

//     return timedPopup ? (
//        <div className="popup">
//           <div className="popup-inner">
//              <div className="close__button">
//                 <button className="close-btn" onClick={() => setTrigger(false)}>
//                    X
//                 </button>
//              </div>
//              <div className="popup__text">
//                 <p>
//                    This is the popup 👍
//                 </p>
//              </div>
//           </div>
//        </div>
//     ) : (
//        ""
//     );
//  }

//  export default Popup;
