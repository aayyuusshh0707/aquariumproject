import React from "react";
import styled from "styled-components";

export default function Loader() {
  const Conatiner = styled.div`
    .loadercontainer {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    .loader {
      display: block;
      width: 84px;
      height: 84px;
      position: relative;
    }

    .loader:before,
    .loader:after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: 0;
      width: 64px;
      height: 64px;
      border-radius: 50%;
      background: #1b4f85;
      transform: translate(-50%, -100%) scale(0);
      animation: push_401 2s infinite linear;
    }

    .loader:after {
      animation-delay: 1s;
    }

    @keyframes push_401 {
      0%,
      50% {
        transform: translate(-50%, 0%) scale(1);
      }

      100% {
        transform: translate(-50%, -100%) scale(0);
      }
    }
  `;
  return (
    <>
      <Conatiner>
        <div className="loadercontainer">
          <span className="loader"></span>
        </div>
      </Conatiner>
    </>
  );
}
