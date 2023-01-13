import { Text } from "./index";
import { customRender } from "@thnbi/test-commons/react-testing-library";

const render = customRender();

describe("<Text />", () => {
  it("renders h1 tag", () => {
    const { container } = render(<Text tag="h1">Hello World</Text>);
    expect(container).toMatchSnapshot();
  });
});
