import React, { useEffect } from "react";
import axios from "axios";

function SuperSkinSerum() {
  useEffect(() => {
    async function getProducts() {
      const res = await axios.get("http://localhost:3005/api/product");
      console.log(res.data);
    }
    getProducts();
  });
  return <div>hello there</div>;
}

export default SuperSkinSerum;
