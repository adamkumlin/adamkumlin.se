function NavButton(props) {
    return (
      <div className="NavButton" onClick={props.goToMainContent}>
        <div className="arrowLine0"></div>
        <div className="arrowLine1"></div>
        <div className="arrowLine2"></div>
      </div>
    );
  }
  
  export default NavButton;