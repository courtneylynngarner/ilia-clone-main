async function getFaceProducts(req, res) {
  console.log("I'm in the controller function");
  const db = req.app.get("db");
  let faceProducts = [];
  try {
    const getFaceProducts = await db.products.find({
      name: "Super Serum Skin Tint SPF 40",
    });
    console.log(getFaceProducts);
    faceProducts.push(getFaceProducts);
    console.log(getFaceProducts);
    res.status(200).send({ getFaceProducts });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getFaceProducts,
};
