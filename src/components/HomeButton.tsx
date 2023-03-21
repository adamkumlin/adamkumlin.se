import * as React from "react";
import { Link } from "react-router-dom";
import { forwardRef } from "react";

const HomeButton = forwardRef<HTMLDivElement>((props, ref) => (

      <div className="HomeButton" ref={ref}>
          <Link to="/">
            <h1>Adam Kumlin</h1>
          </Link> 
      </div>
));
  
  export default HomeButton;