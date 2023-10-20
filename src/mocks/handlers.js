import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:3030/scoops", (req, res, ctx) => {
    return res(
      ctx.json([
        { name: "chocklate", imagePath: "/images/chocklate.png" },
        { name: "vanila", imagePath: "/images/vanila.png" },
      ])
    );
  }),
];
