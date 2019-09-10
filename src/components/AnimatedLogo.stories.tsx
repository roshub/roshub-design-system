import React from "react"
import { storiesOf } from "@storybook/react"
import { AnimatedRoshubLogo } from "./AnimatedLogo"

storiesOf("AnimatedRoshubLogo", module)
	.add("default size", () => <AnimatedRoshubLogo/>)
	.add("500px", () => <AnimatedRoshubLogo size={500}/>)
