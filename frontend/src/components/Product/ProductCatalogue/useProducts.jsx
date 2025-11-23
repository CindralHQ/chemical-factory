import { useEffect, useState } from "react";

export default function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:5000/api/products");
      const data = await res.json();

      setProducts(data);
      localStorage.setItem("products", JSON.stringify(data));
    };

    fetchData();
  }, []);

  return products;
}
