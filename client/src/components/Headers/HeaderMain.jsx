import React from "react";

export const HeaderMain = (width) => {
  let fontPercent = "40px";
  let fontCenter = "65px";
  let fontBottom = "20px";
  let padding = "35px";
  let fontBest = "30px";
  if (width.width <= 500) {
    fontPercent = "20px";
    fontCenter = "35px";
    fontBottom = "8px";
    padding = "0px";
  }

  return (
    <div
      className="d-flex justify-content-around align-items-center bg-dark w-100 "
      style={{ fontSize: fontBottom }}
    >
      <div className="d-flex flex-column">
        <b>
          <div className="text-info" style={{ fontSize: fontPercent }}>
            1.53 %
          </div>
          <div className="text-secondary">5 Mins</div>
        </b>
      </div>
      <div className="d-flex flex-column">
        <b>
          <div className="text-info" style={{ fontSize: fontPercent }}>
            1.53 %
          </div>
          <div className="text-secondary">1 Hour</div>
        </b>
      </div>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ paddingBottom: padding }}
      >
        <b>
          <div className="text-secondary" style={{ fontSize: fontBest }}>
            Best Price to Trade
          </div>
          <div className="text-white" style={{ fontSize: fontCenter }}>
            ₹ 38,70,160
          </div>
          <div className="text-secondary m-0">Average BTC/INR net</div>
          <div className="text-secondary m-0">price including commission</div>
        </b>
      </div>
      <div className="d-flex flex-column">
        <b>
          <div className="text-info" style={{ fontSize: fontPercent }}>
            1.53 %
          </div>
          <div className="text-secondary">1 Day</div>
        </b>
      </div>
      <div className="d-flex flex-column">
        <b>
          <div className="text-info" style={{ fontSize: fontPercent }}>
            1.53 %
          </div>
          <div className="text-secondary">7 Days</div>
        </b>
      </div>
    </div>
  );
};
