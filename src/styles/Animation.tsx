import React from 'react'

import { useSpring, animated } from 'react-spring'

export function SlideIn({
  xyz = [200, 0, 0],
  delay = 0,
  reset = false,
  children,
  onRest = () => {},
  ...props
}: any) {
  const signinProps = useSpring({
    from: {
      xyz,
      opacity: 0
    },
    opacity: 1,
    xyz: [0, 0, 0],
    delay,
    onRest,
    reset
  })

  return (
    <animated.div
      style={{
        opacity: signinProps.opacity,
        transform: signinProps.xyz.to(((
          x: number,
          y: number,
          z: number
        ) => `translate3d(${x}px,${y}px,${z}px)`) as any)
      }}
      {...props}
    >
      {children}
    </animated.div>
  )
}

export function Fade({ out, children, ...props }: any) {
  const fadeProps = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: out ? 0 : 1
    }
  })

  return (
    <animated.div style={fadeProps} {...props}>
      {children}
    </animated.div>
  )
}

export function SlideInAndOut({
  children,
  delay = 0,
  config = {
    mass: 5,
    tension: 1000,
    friction: 200
  }
}: any) {
  const { x, height } = useSpring({
    config,
    delay,
    from: { opacity: 0, x: 0, height: 0 },
    to: async (next: any) => {
      await next({ opacity: 1, x: 20, height: 80 })
      // await sleep(1000);
      await next({ opacity: 0, x: 0, height: 0 })
    }
  }) as any

  return (
    <animated.div
      style={{
        transform: x.to(
          (value: number) => `translate3d(0,${value}px,0)`
        )
      }}
    >
      <animated.div style={{ height }}>{children}</animated.div>
    </animated.div>
  )
}
