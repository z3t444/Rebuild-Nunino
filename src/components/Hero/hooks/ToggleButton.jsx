import React from "react";
import "../style/Hero.css";

function toggleButton() {
  return (
    <>
      <div>
        <label class="label">
          <div class="toggle">
            <input class="toggle-state" type="checkbox" name="check" value="check" />
            <div class="indicator"></div>
          </div>
        </label>
      </div>
    </>
  );
}

export default toggleButton;
