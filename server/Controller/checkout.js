require("dotenv").config();
const { STRIPE_KEY } = process.env;
const stripe = require("stripe")(STRIPE_KEY);

const checkout = async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Super Serum Skin Tint SPF 40",
          },
          unit_amount: 5296,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "http://localhost:3006/success",
    cancel_url: "http://localhost:3006/",
  });

  res.redirect(303, session.url);
};

module.exports = {
  checkout,
};
