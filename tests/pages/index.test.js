
import { render, screen } from "../test-utils";
import Footer from "../../component/Footer";

describe("Footer", () => {
  it("should render the heading", () => {
    const textToFind = "S'inscrire à la newsletter"

    render(<Footer />,{ legacyRoot: true } );
    const heading = screen.getByText(textToFind);

    expect(heading).toBeInTheDocument();
  });
  
});