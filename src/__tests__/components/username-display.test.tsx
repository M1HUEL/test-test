import "@testing-library/jest-dom"
import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { UsernameDisplay } from "../../components/username-display"

describe("UsernameDisplay Component", () => {
  it("should render username correctly", () => {
    render(<UsernameDisplay username="Hello, World" />)
    expect(screen.getByText("Hello, World")).toBeInTheDocument()
  })
})
