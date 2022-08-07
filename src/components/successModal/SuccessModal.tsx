// import { ReactComponent as Cancel } from "../../assets/icons/Path.svg";
// import { ReactComponent as Mark } from "../../assets/icons/checkmark.svg";
import "./style.scss";
const SuccessModal = ({ icon, text, closeModal }: any) => {
  return (
    <div onClick={closeModal} className="successModal">
      <div className="popBox">
        <div className="left">
          {/* <Mark className="mark" /> */}
          <p className="popText">{text}</p>
        </div>
        {/* <Cancel onClick={closeModal} className="cancel" /> */}
      </div>
    </div>
  );
};

export default SuccessModal;
