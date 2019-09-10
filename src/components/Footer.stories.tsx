import { storiesOf } from "@storybook/react"
import { Footer } from "./Footer"
import React from "react"

storiesOf("Footer", module)
	.add("with text", () => <Footer>Hello Button</Footer>)
	.add("with some emoji", () => <Footer><span role="img" aria-label="emoji">😀 😎 👍 💯</span></Footer>)
