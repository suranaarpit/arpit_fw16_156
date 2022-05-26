import { render, screen, fireEvent } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import App from "../App";
import Button from "./Button";
import renderer from "react-test-renderer";

describe("Button Testing", function () {
  //   beforeAll(); => connect to a db
  //   beforeEach(); => //
  //   afterAll(); => disconnect from db
  //   afterEach(); => //

  it("Should have button in DOM", function () {
    render(<Button>Click Me</Button>); // Virtually
    // screen.debug();

    let button = screen.getByText("Click Me"); // document
    expect(button).toBeInTheDocument();
  });

  it("should render based on testID", function () {
    render(<Button>Click Me</Button>);
    let button = screen.getByTestId("customBtn");
    expect(button).toBeInTheDocument();
  });

  it("Should render empty Button", function () {
    render(<Button></Button>);

    let button = screen.getByTestId("customBtn");
    expect(button).toBeEmptyDOMElement();
  });

  //
  //   it.only("Should change Theme", function () {});
  it("Should change Theme", function () {
    render(<App></App>);

    let h3 = screen.getByText("Theme is light");
    // expect(h3).toBeInTheDocument();
    expect(h3).toHaveTextContent("light");

    let themeButton = screen.getByText("Change Theme");
    fireEvent.click(themeButton);
    // userEvent.click(themeButton);
    expect(h3).toHaveTextContent("dark");
  });
  it("should call given function", function () {
    const mockFn = jest.fn();
    render(<Button onClick={mockFn}>Click Me</Button>);
    // render(<Button onClick={mockFn}></Button>);

    // const btn = screen.getByTestId("customBtn");
    const btn = screen.getByText("Click Me");
    fireEvent.click(btn);
    fireEvent.click(btn);

    expect(mockFn).toBeCalledTimes(2);
  });

  // SnapShots => Screenshot
  it("Should match snapshot", function () {
    const tree = renderer
      .create(
        <Button colorScheme={"green"} Varient="ghost">
          Add Counter
        </Button>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("Should show correct Green Classes", function () {
    render(<Button colorScheme={"green"}>Click Me</Button>);
    const btn = screen.getByTestId("customBtn");
    expect(btn).toHaveClass("green");
  });
});

// jest how to run single test suite "jest -t "Button Tests""
