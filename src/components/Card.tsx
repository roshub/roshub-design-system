import React, { useRef } from 'react'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components/macro'

const CardContainer = animated(styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`)

/*
export const Card = animated(styled.div`
  width: 300px;

  margin: 1em;

  @media all and (min-width: 800px) {
    margin: 4em;
  }

  max-width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 1em 0; 
  
  */

  /* color: ${p => p.theme.color.background}; */
  
  /*
  
  background: ${p => p.theme.color.background};
  border-radius: 20px;

  background-size: cover;
  background-position: center center;
  
  box-shadow: 0px 2px 10px -5px rgba(0, 0, 0, 0.5);
  transition: box-shadow 0.5s;
  border: 10px solid white;
 
  will-change: transform;

  :hover {
    box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.8);
  }
`)*/

const calc = (x: number, y: number, rect: any) => [
  (y - rect.top - rect.height / 2) / 20,
  (x - rect.left - rect.width / 2) / 20,
  1.05
]

const trans: any = (x: string, y: string, s: string) =>
  `perspective(450px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
/*
export const HoverCard = ({ children, className = '', animate = true }) => {
  const ref = useRef(null) as any
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }))
  return (
    <CardContainer ref={ref} className={className}>
      <Card
        style={{ transform: props.xys.to(trans) }}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        onMouseMove={e => {
          if (!animate) {
            return
          }
          const rect = ref.current.getBoundingClientRect()
          set({ xys: calc(e.clientX, e.clientY, rect) })
        }}
      >
        {children}
      </Card>
    </CardContainer>
  )
}
*/