import { useState, useEffect } from "react";

export const Products = () => {
    const [products, setProducts] = useState([
        {
            "id": 0,
            "title": "",
            "image": ""
        }
    ]);

    const fetchProducts = async () => {
        try {
            const response = await fetch("https://app-scrip-products-vercel.vercel.app/products");
            const productsJson = await response.json();
            setProducts(productsJson);
        } catch (error) {
            console.error("Failed to fetch products:", error);
        }
    };

    useEffect(() => {
        console.log("mounted");
        fetchProducts();
    }, []);

    return (
        <div className="container">
            {products.map((product) => (
                <div className="card m-3" key={product.id}>
                    <h3>{product.title}</h3>
                    <img src={product.image} height={250} width={250}/>
                </div>
            ))}
        </div>
    );
};
