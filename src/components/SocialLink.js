import React from "react";

const SocialLink = ({ href, icon, itemClass }) => {
  return (
    <li>
      <a href={href} target="_blank" className={itemClass} rel="noreferrer">
        <i className={`fab ${icon}`}></i>
      </a>
    </li>
  );
};

export default SocialLink;
