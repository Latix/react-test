import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import Memo from "../Memo";

test("Check the text shows", async () => {
    const memo = render(<Memo />);

    const memo_text = await memo.findByTestId("memoText");
    console.log(memo_text.innerText);
    expect(memo_text.innerText).toContain("Atlanta");
})