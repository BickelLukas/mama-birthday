import React from "react";

const Notification = ({ showNotification }: { showNotification: boolean }) => {
  return (
    <div className={`notification-container ${showNotification ? "show" : ""}`}>
      <p>Diesen Buchstaben hast du schon eingegeben</p>
    </div>
  );
};

export default Notification;
