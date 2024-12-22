import React from "react";
import Swal from "sweetalert2";

const HtmlTemplatePopup: React.FC = () => {
  const showPopup = () => {
    Swal.fire({
      title: "Custom Popup",
      html: `
        <div style="text-align: center;">
          <h3>Welcome!</h3>
          <p>This is a custom popup with an HTML template.</p>
          <button id="custom-btn" class="btn btn-primary">Click Me</button>
        </div>
      `,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: "OK",
      confirmButtonAriaLabel: "Confirm"
    });

    // Add an event listener to the custom button after rendering
    Swal.getPopup()
      ?.querySelector("#custom-btn")
      ?.addEventListener("click", () => {
        Swal.fire("You clicked the custom button!");
      });
  };

  return (
    <div>
      <button className="btn btn-success" onClick={showPopup}>
        Show Popup
      </button>
    </div>
  );
};

export default HtmlTemplatePopup;
