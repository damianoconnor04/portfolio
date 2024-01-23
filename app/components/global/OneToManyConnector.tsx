import React from "react";
import { animated, useSpring } from "@react-spring/web";

type OneToManyProps = { flipped?: boolean }
const OneToMany: React.FC<OneToManyProps> = ({ flipped }) => {

  const color = 'rgba(143, 221, 233, 0.75)'

  // highlight node animations
  const mainProps = useSpring({
    // from top of center line to bottom of center line
    from: { y: 0 },
    to: { y: 160 },
    config: { duration: 750 },
    reset: true,
    delay: 500,
  });

  const topLeftProps = useSpring({
    // from left end of line (one) to center of main line
    from: { x: 0, opacity: 1 },
    to: { x: 8.5, opacity: 0 },
    config: { duration: 200 },
    reset: true,
    delay: 400, // 500 delay - 100 (top to horiz line)
  });
  
  const topRightProps = useSpring({
    // from right end of line (one) to center of main line
    from: { x: 18, opacity: 1 },
    to: { x: 8.5, opacity: 0 }, // 14 (svg width) + 3.5 (rect width) + .5 (no idea why), hide on mount
    config: { duration: 200 },
    reset: true,
    delay: 400,
  });

  const bottomLeftProps = useSpring({
    // from center of main line to left end of line (one or many)
    from: { x: 8.5, opacity: 1 },
    to: { x: 0, opacity: 0 },
    config: { duration: 250 },
    reset: true,
    delay: 1175, // 500 delay + 675 main node approaching bottom line (90%)
  });

  const bottomRightProps = useSpring({
    // from center of main line to right end of line (one or many)
    from: { x: 8.5, opacity: 1 },
    to: { x: 18, opacity: 0 },
    config: { duration: 250 },
    reset: true,
    delay: 1175,
  });

  const bottomLeftAngledProps = useSpring({
    // from center of main line to left end of angled line (many)
    from: {x: 8.5, y: 152, opacity: 1},
    to: {x: 0, y: 160, opacity: 0},
    config: { duration: 250 },
    reset: true,
    delay: 1250, // 500 delay + 675 main node approaching bottom line (90%) + 75 (delay between horiz & angled)
  });

  const bottomRightAngledProps = useSpring({
    // from center of main line to right end of angled line (many)
    from: {x: 8.5, y: 152, opacity: 1},
    to: {x: 18, y: 160, opacity: 0},
    config: { duration: 250 },
    reset: true,
    delay: 1250,
  });

  return (
    <svg
      width="14"
      height="160"
      viewBox="0 0 14 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: 
        flipped !== undefined 
          ? flipped 
            ? 'rotate(180deg)' 
            : 'none'
          : 'none' 
        }}
    >
      <line x1="7" x2="7" y2="160" stroke="#3f3f3fE6" stroke-width="1.5" />
      <line x1="0.5" y1="8" x2="13.5" y2="8" stroke="#3f3f3fE6" stroke-width="1.5" />
      <line x1="0.5" y1="152" x2="13.5" y2="152" stroke="#3f3f3fE6" stroke-width="1.5" />
      <path d="M7 152.5L4.25 156L1.5 159.5" stroke="#3f3f3fE6" stroke-width="1.5" />
      <path d="M7 152.5L9.75 156L12.5 159.5" stroke="#3f3f3fE6" stroke-width="1.5" />

      {/* main highlight node */}
      <animated.rect
        y={mainProps.y.to(y => y)}
        x='50%'
        width='0.75'
        height='7'
        style={{ opacity: mainProps.y.to(y => (y === 160 ? 0 : 1)) }} //opacity 0 at anim end
        transform="translate(-0.375, -7)" // center rect
        fill={color}
      />

      {/* top left highlight node */}
      <animated.rect 
        opacity={topLeftProps.opacity.to(o => o)}
        x={topLeftProps.x.to(x => x)}
        y='8' // top of 'one' line (one side)
        width='3.5'
        height='0.75'
        style={{ opacity: topLeftProps.x.to(x => (x === 8.5 ? 0 : 1)) }} //opacity 0 at anim start
        transform="translate(-3.5, -0.375)"
        fill={color}
      />

      {/* top right highlight node */}
      <animated.rect 
        opacity={topRightProps.opacity.to(o => o)}
        x={topRightProps.x.to(x => x)}
        y='8'
        width='3.5'
        height='0.75'
        style={{ opacity: topRightProps.x.to(x => (x === 8.5 ? 0 : 1)) }}
        transform="translate(-3.5, -0.375)"
        fill={color}
      />

      {/* bottom left highlight node */}
      <animated.rect 
        opacity={bottomLeftProps.opacity.to(o => o)}
        x={bottomLeftProps.x.to(x => x)}
        y='152' // top of 'one' line (many side)
        width='3.5'
        height='0.75'
        style={{ opacity: bottomLeftProps.x.to(x => (x === 8.5 ? 0 : 1)) }}
        transform="translate(-3.5, -0.375)"
        fill={color}
      />

      {/* bottom right highlight node */}
      <animated.rect 
        opacity={bottomRightProps.opacity.to(o => o)}
        x={bottomRightProps.x.to(x => x)}
        y='152'
        width='3.5'
        height='0.75'
        style={{ opacity: bottomRightProps.x.to(x => (x === 8.5 ? 0 : 1)) }} 
        transform="translate(-3.5, -0.375)"
        fill={color}
      />

      {/* bottom left angled highlight node */}
      <animated.rect 
        opacity={bottomLeftAngledProps.opacity.to(o => o)}
        x={bottomLeftAngledProps.x.to(x => x)}
        y={bottomLeftAngledProps.y.to(y => y)}
        width='3.5'
        height='0.75'
        style={{ opacity: bottomLeftAngledProps.x.to(x => (x === 8.5 ? 0 : 1)) }}
        transform="translate(-3.5, -0.375)"
        fill={color}
      />

      {/* bottom right angled highlight node */}
      <animated.rect 
        opacity={bottomRightAngledProps.opacity.to(o => o)}
        x={bottomRightAngledProps.x.to(x => x)}
        y={bottomRightAngledProps.y.to(y => y)}
        width='3.5'
        height='0.75'
        style={{ opacity: bottomRightAngledProps.x.to(x => (x === 8.5 ? 0 : 1)) }}
        transform="translate(-3.5, -0.375)"
        fill={color}
      />

    </svg>
  );
}


export default OneToMany;