// https://loading.io/css/

import "./Spinner.scss";
import React from "react";

interface SpinnerProps {
  className?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ className = "" }) => (
  <div className={`Spinner ${className}`}>
    <div />
    <div />
    <div />
    <div />
  </div>
);

export default Spinner;
