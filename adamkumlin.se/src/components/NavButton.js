function NavButton(props) {
    return (
      <div className="NavButton">
          <i onClick={props.goToMainContent}></i>
      </div>
    );
  }
  
  export default NavButton;