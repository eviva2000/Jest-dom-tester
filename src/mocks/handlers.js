import { rest } from "msw";

export const handler = [
  rest.get("http://localhost:3000", (req, res, ctx) => {
    return res(
      ctx.json([
        { name: "chocklate", imagePath: "/images/chocklate.png" },
        { name: "vanila", imagePath: "/images/vanila.png" },
      ])
    );
  }),
];
