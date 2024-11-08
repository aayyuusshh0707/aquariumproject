import React from "react";

function Buy_Card_price({ edition, price }) {
  return (
    <>
      <div class="buy-card">
        <div class="buy-content">
          <div class="buy-title">{edition}</div>
          <div class="buy-price">{price}</div>
          <div class="buy-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            at posuere eros. Interdum et malesuada fames ac ante ipsum primis in
            faucibus.
          </div>
        </div>
        <button>Buy now</button>
      </div>
    </>
  );
}
export default Buy_Card_price;
