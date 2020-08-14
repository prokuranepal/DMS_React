import React from "react";

import Widget from "../../components/Widget/index";

const IconWithTextCard = (props) => {
  const {cardColor, value, name, icon, style} = props.data;
  return (
    <Widget styleName={`p-3 bg-${cardColor} text-white`} style={props.style}>
      <div className="media align-items-center flex-nowrap py-lg-2">
        <div className="mr-3">
            <i className={`zmdi zmdi-${icon} zmdi-hc-3x`}/>
        </div>
        <div className="media-body">
          <h1 className="jr-fs-xxl jr-font-weight-black mb-1 text-white">{props.value}</h1>
          <p className="mb-0 jr-fs-cp">{name}</p>
        </div>
      </div>
    </Widget>
  );
};

export default IconWithTextCard;
