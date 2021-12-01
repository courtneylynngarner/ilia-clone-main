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
            name: "T-shirt",
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "http://localhost:3006/success",
    cancel_url: "http://localhost:3006/home",
  });

  res.redirect(303, session.url);
};

module.exports = {
  checkout,
};
