import { useEffect, useRef, useState } from "react";
// @ts-ignore
import Flippy, { FrontSide, BackSide } from "react-flippy";
// @ts-ignore
import CardAnimated from "react-animated-3d-card";

interface Props {
  width: string;
  height: string;
  children: React.ReactNode;
  id: string;
}

export function CardFull({ width, height, children, id }: Props) {
  const ref = useRef<any>(null);

  return (
    <div className="z-50">
      <Flippy
        flipOnHover={false} // default false
        flipOnClick={true} // default false
        flipDirection="horizontal" // horizontal or vertical
        ref={ref} // to use toggle method like ref.curret.toggle()
        // if you pass isFlipped prop component will be controlled component.
        // and other props, which will go to div
        style={{ width: width, height: height }} /// these are optional style, it is not necessary
      >
        <FrontSide animationDuration={2000}>
          <CardAnimated
            style={{
              backgroundColor: "none",
              width: width,
              height: height,
              cursor: "pointer",
            }}
            borderRadius="5px"
          >
            <div className="" id={id}>
              <div className="">{children}</div>
            </div>
          </CardAnimated>
        </FrontSide>
        <BackSide animationDuration={2000}>
          <CardAnimated
            style={{
              backgroundColor: "none",
              width: width,
              height: height,
              cursor: "pointer",
            }}
            borderRadius="5px"
          >
            <div
              className=""
              style={{
                width: width,
                height: height,
              }}
            >
              <img
                src="https://gglounge.pt/wp-content/uploads/2022/12/Yu-Gi-Oh-Card-Back-Sleeves-Japanese-Size.jpeg"
                alt="Card"
              />
            </div>
          </CardAnimated>
        </BackSide>
      </Flippy>
    </div>
  );
}
