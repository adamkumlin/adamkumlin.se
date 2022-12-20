import { forwardRef } from "react";

const NavButton = forwardRef((props, ref) => {

  const {ref0, ref1, ref2} = ref;

  return (

  <div className="NavButton" onClick={props.goToMainContent}>
    <div className="arrowLine0" ref={ref0}></div>
    <div className="arrowLine1" ref={ref1}></div>
    <div className="arrowLine2" ref={ref2}></div>
  </div>
  );
});
  export default NavButton;