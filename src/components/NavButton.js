
function NavButton(props){

  return (
    <div className="NavButton" onClick={props.goToMainContent}>
      <div className="arrowLine0">&nbsp;</div>
      <div className="arrowLine1">&nbsp;</div>
      <div className="arrowLine2">&nbsp;</div>
    </div>
  );
}
  export default NavButton;