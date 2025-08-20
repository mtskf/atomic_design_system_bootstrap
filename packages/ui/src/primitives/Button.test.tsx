import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "../index";

describe("Button", () => {
	it("renders children", () => {
		render(<Button>Click</Button>);
		expect(screen.getByRole("button")).toHaveTextContent("Click");
	});

	it("applies loading state", () => {
		render(<Button loading>Load</Button>);
		expect(screen.getByRole("button")).toHaveAttribute("aria-busy", "true");
		expect(screen.getByRole("button")).toBeDisabled();
	});
});


