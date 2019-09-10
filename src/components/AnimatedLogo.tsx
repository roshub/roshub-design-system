import React, { cloneElement, } from 'react'

import { animated, useSpring } from 'react-spring'

type CircleComponent = React.DetailedReactHTMLElement<
  {
    key: string
    fill: any
    style: {
      transform: any // scale(.5) translate(-25%, 25%)
      transformOrigin: string
    }
  },
  HTMLElement
>

const SmallCircleContainer = ({ children, dotColor, dotSize }) => (
  <animated.g>
    {children.map((c: CircleComponent, i: number) =>
      cloneElement(c, {
        key: `small-circle-${i}`,
        fill: dotColor,
        style: {
          transform: dotSize.to((s: number) => `scale(${1.0 * s})`), // scale(.5) translate(-25%, 25%)
          transformOrigin: '50% 50%'
        }
      })
    )}
  </animated.g>
)

const quadFx = (s: number) => 25 * (-4 * s * (s - 1))

export const AnimatedRoshubLogo = ({ size = 300 }) => {
  const {
    strokeDashoffset,
    strokeDasharray,
    dotSize,
    dotColor,
    bigDotSize,
    rotation
  } = useSpring({
    from: {
      dots: [0, 0, 0, 0, 0, 0, 0, 0],
      dotSize: 0,
      bigDotSize: 0,
      dotColor: 'black',
      strokeDashoffset: 500,
      strokeDasharray: 500,
      rotation: '180deg'
    },
    to: async next => {
      await next({
        rotation: '0deg',
        bigDotSize: 0.5,
        dotSize: 1,
      })

      await next({
        bigDotSize: 1,
      })

      await next({
        strokeDashoffset: 250,
        strokeDasharray: 50
      })

      await next({
        strokeDashoffset: 1000,
        strokeDasharray: 500
      })
    },
    // onRest: () => setDone(true)
  })
  return (
    <animated.div
      style={{
        width: '100%',
        maxWidth: `${size}px`
      }}
    >
      <animated.svg
        fill="none"
        strokeLinecap="square"
        strokeMiterlimit={10}
        viewBox="0 0 768 768"
      >
        <path fill="#000" fillOpacity={0} d="M0 0h768v768H0z" />
        {/* Lines: */}
        <animated.g
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
        >
          <path
            fill="#000"
            fillOpacity={0}
            d="M383.511 576.59c-32.967 41.085-86.615 59.562-137.89 47.49-51.276-12.071-91.046-52.541-102.222-104.019-11.175-51.478 8.234-104.796 49.888-137.042l83.647 108.052z"
          />
          <path
            fill="#000"
            fillOpacity={0}
            d="M383.511 576.59c-32.967 41.085-86.615 59.562-137.89 47.49-51.276-12.071-91.046-52.541-102.222-104.019-11.175-51.478 8.234-104.796 49.888-137.042"
          />
          <path
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth={8}
            d="M383.511 576.59h0c-32.967 41.085-86.615 59.562-137.89 47.49-51.276-12.071-91.046-52.541-102.222-104.019-11.175-51.478 8.234-104.796 49.888-137.042"
          />
          <path
            fill="#000"
            fillOpacity={0}
            d="M191.551 576.449c15.738-16.787 73.892-50.362 94.425-100.722 20.534-50.36 12.29-154.078 28.777-201.44 16.488-47.364 58.456-68.947 70.147-82.736"
          />
          <path
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth={8}
            d="M191.551 576.449c15.738-16.787 73.892-50.362 94.425-100.722 20.534-50.36 12.29-154.078 28.777-201.44 16.488-47.364 58.456-68.947 70.147-82.736"
          />
          <path
            fill="#000"
            fillOpacity={0}
            d="M383.945 388.603c-2.505 104.976-88.496 188.564-193.251 187.85L192 384zM383.945 388.603c-2.505 104.976-88.496 188.564-193.251 187.85"
          />
          <path
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth={8}
            d="M383.945 388.603h0c-2.505 104.976-88.496 188.564-193.251 187.85"
          />
          <path
            fill="#000"
            fillOpacity={0}
            d="M384.906 386.535c-.566-42.22 38.213-77.528 88.544-80.619 50.332-3.09 94.856 27.103 101.664 68.94l-94.67 10.783z"
          />
          <path
            fill="#000"
            fillOpacity={0}
            d="M384.906 386.535c-.566-42.22 38.213-77.528 88.544-80.619 50.332-3.09 94.856 27.103 101.664 68.94"
          />
          <path
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth={8}
            d="M384.906 386.535h0c-.566-42.22 38.213-77.528 88.544-80.619 50.332-3.09 94.856 27.103 101.664 68.94"
          />
          <path
            fill="#000"
            fillOpacity={0}
            d="M571.971 192.11c31.758-1.73 61.676 17.023 77.403 48.516 15.727 31.493 14.595 70.386-2.927 100.623-17.522 30.237-48.464 46.69-80.052 42.567L576 288.22z"
          />
          <path
            fill="#000"
            fillOpacity={0}
            d="M571.971 192.11c31.758-1.73 61.676 17.023 77.403 48.516 15.727 31.493 14.595 70.386-2.927 100.623-17.522 30.237-48.464 46.69-80.052 42.567"
          />
          <path
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth={8}
            d="M571.971 192.11h0c31.758-1.73 61.676 17.023 77.403 48.516 15.727 31.493 14.595 70.386-2.927 100.623-17.522 30.237-48.464 46.69-80.052 42.567"
          />
        </animated.g>

        {/* Circles */}
        <animated.g
          style={{
            transform: rotation.interpolate(r => `rotate(${r})`),
            transformOrigin: 'center'
          }}
        >
          <animated.g
            style={{
              transform: bigDotSize.interpolate(
                s => `scale(${s}) translate(${-quadFx(s)}%, ${quadFx(s)}%)`
              ),
              transformOrigin: '50% 50%'
            }}
          >
            <path
              fill="#000"
              d="M132.33 576c0-32.954 26.716-59.67 59.67-59.67A59.67 59.67 0 0 1 251.67 576c0 32.954-26.716 59.67-59.67 59.67s-59.67-26.716-59.67-59.67z"
            />
            <path
              stroke="#fff"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeWidth={4}
              d="M132.33 576h0c0-32.954 26.716-59.67 59.67-59.67h0A59.67 59.67 0 0 1 251.67 576h0c0 32.954-26.716 59.67-59.67 59.67h0c-32.954 0-59.67-26.716-59.67-59.67z"
            />
          </animated.g>

          <SmallCircleContainer dotColor={dotColor} dotSize={dotSize}>
            <animated.g>
              <path
                fill="#000"
                d="M162.425 192c0-16.334 13.241-29.575 29.575-29.575A29.575 29.575 0 0 1 221.575 192c0 16.334-13.241 29.575-29.575 29.575S162.425 208.334 162.425 192z"
              />

              <path
                stroke="#fff"
                strokeLinecap="butt"
                strokeLinejoin="round"
                strokeWidth={4}
                d="M162.425 192h0c0-16.334 13.241-29.575 29.575-29.575h0A29.575 29.575 0 0 1 221.575 192h0c0 16.334-13.241 29.575-29.575 29.575h0c-16.334 0-29.575-13.241-29.575-29.575z"
              />
            </animated.g>

            <animated.g>
              <path
                fill="#000"
                d="M162.425 384c0-16.334 13.241-29.575 29.575-29.575A29.575 29.575 0 0 1 221.575 384c0 16.334-13.241 29.575-29.575 29.575S162.425 400.334 162.425 384z"
              />
              <path
                stroke="#fff"
                strokeLinecap="butt"
                strokeLinejoin="round"
                strokeWidth={4}
                d="M162.425 384h0c0-16.334 13.241-29.575 29.575-29.575h0A29.575 29.575 0 0 1 221.575 384h0c0 16.334-13.241 29.575-29.575 29.575h0c-16.334 0-29.575-13.241-29.575-29.575z"
              />
            </animated.g>

            <animated.g>
              <path
                fill="#000"
                d="M354.425 384c0-16.334 13.241-29.575 29.575-29.575A29.575 29.575 0 0 1 413.575 384c0 16.334-13.241 29.575-29.575 29.575S354.425 400.334 354.425 384z"
              />
              <path
                stroke="#fff"
                strokeLinecap="butt"
                strokeLinejoin="round"
                strokeWidth={4}
                d="M354.425 384h0c0-16.334 13.241-29.575 29.575-29.575h0A29.575 29.575 0 0 1 413.575 384h0c0 16.334-13.241 29.575-29.575 29.575h0c-16.334 0-29.575-13.241-29.575-29.575z"
              />
            </animated.g>

            <animated.g>
              <path
                fill="#000"
                d="M354.425 576c0-16.334 13.241-29.575 29.575-29.575A29.575 29.575 0 0 1 413.575 576c0 16.334-13.241 29.575-29.575 29.575S354.425 592.334 354.425 576z"
              />
              <path
                stroke="#fff"
                strokeLinecap="butt"
                strokeLinejoin="round"
                strokeWidth={4}
                d="M354.425 576h0c0-16.334 13.241-29.575 29.575-29.575h0A29.575 29.575 0 0 1 413.575 576h0c0 16.334-13.241 29.575-29.575 29.575h0c-16.334 0-29.575-13.241-29.575-29.575z"
              />
            </animated.g>

            <animated.g>
              <path
                fill="#000"
                d="M546.425 384c0-16.334 13.241-29.575 29.575-29.575A29.575 29.575 0 0 1 605.575 384c0 16.334-13.241 29.575-29.575 29.575S546.425 400.334 546.425 384z"
              />
              <path
                stroke="#fff"
                strokeLinecap="butt"
                strokeLinejoin="round"
                strokeWidth={4}
                d="M546.425 384h0c0-16.334 13.241-29.575 29.575-29.575h0A29.575 29.575 0 0 1 605.575 384h0c0 16.334-13.241 29.575-29.575 29.575h0c-16.334 0-29.575-13.241-29.575-29.575z"
              />
            </animated.g>

            <animated.g>
              <path
                fill="#000"
                d="M546.425 576c0-16.334 13.241-29.575 29.575-29.575A29.575 29.575 0 0 1 605.575 576c0 16.334-13.241 29.575-29.575 29.575S546.425 592.334 546.425 576z"
              />
              <path
                stroke="#fff"
                strokeLinecap="butt"
                strokeLinejoin="round"
                strokeWidth={4}
                d="M546.425 576h0c0-16.334 13.241-29.575 29.575-29.575h0A29.575 29.575 0 0 1 605.575 576h0c0 16.334-13.241 29.575-29.575 29.575h0c-16.334 0-29.575-13.241-29.575-29.575z"
              />
            </animated.g>

            <animated.g>
              <path
                fill="#000"
                d="M546.425 192c0-16.334 13.241-29.575 29.575-29.575A29.575 29.575 0 0 1 605.575 192c0 16.334-13.241 29.575-29.575 29.575S546.425 208.334 546.425 192z"
              />
              <path
                stroke="#fff"
                strokeLinecap="butt"
                strokeLinejoin="round"
                strokeWidth={4}
                d="M546.425 192h0c0-16.334 13.241-29.575 29.575-29.575h0A29.575 29.575 0 0 1 605.575 192h0c0 16.334-13.241 29.575-29.575 29.575h0c-16.334 0-29.575-13.241-29.575-29.575z"
              />
            </animated.g>

            <animated.g>
              <path
                fill="#000"
                d="M354.425 192c0-16.334 13.241-29.575 29.575-29.575A29.575 29.575 0 0 1 413.575 192c0 16.334-13.241 29.575-29.575 29.575S354.425 208.334 354.425 192z"
              />
              <path
                stroke="#fff"
                strokeLinecap="butt"
                strokeLinejoin="round"
                strokeWidth={4}
                d="M354.425 192h0c0-16.334 13.241-29.575 29.575-29.575h0A29.575 29.575 0 0 1 413.575 192h0c0 16.334-13.241 29.575-29.575 29.575h0c-16.334 0-29.575-13.241-29.575-29.575z"
              />
            </animated.g>
          </SmallCircleContainer>
        </animated.g>
      </animated.svg>
    </animated.div>
  )
}
