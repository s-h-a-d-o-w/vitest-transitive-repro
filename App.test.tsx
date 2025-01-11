import { render, screen } from "@testing-library/react"
import { App } from "./App"

vi.mock("@nivo/core", async () => ({
  // See https://github.com/plouc/nivo/blob/cdf60f77a21706f793b31224be2aebe4478f9161/packages/treemap/src/ResponsiveTreeMap.tsx#L1
  ResponsiveWrapper: () => <div>foo</div>,
}));

test("renders 'foo'", async () => {
  render(<App />)
  await screen.findByText('foo')
})
