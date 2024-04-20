import { useState, useEffect } from "react";
import "./products.css";

export const Products = () => {
    const [products, setProducts] = useState([
        {
            id: 0,
            title: "",
            image: "",
        },
    ]);

    const fetchProducts = async () => {
        try {
            const response = await fetch(
                "https://app-scrip-products-vercel.vercel.app/products"
            );
            const productsJson = await response.json();
            setProducts(productsJson);
        } catch (error) {
            console.error("Failed to fetch products:", error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="container">
            <div className="common">
                <h2> DISCOVER OUR PRODUCTS </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Amet est posuere
                    rhoncus scelerisque. Dolor integer scelerisque nibh amet mi
                    ut elementum dolor.
                </p>
            </div>
            <div className="products-sm">
                <hr />
                <div className="product-filters">
                    <h5> FILTER </h5>
                    <h5> | </h5>
                    <h5> RECOMMENDED </h5>
                </div>
                <hr />
                <div className="product-cards">
                    {
                        products.map(product => 
                            <div key={product.id} className="shadow shadow-md p-3 m-2 product-card">
                                <img src={product.image} height={160} width={160}/>
                                <div style={{display:"flex",justifyContent:"space-evenly", margin:"8px"}}>
                                    <h5>{product.title} </h5>
                                    <i className="fa-regular fa-heart"></i>
                                </div>    
                                <p> Sign in or Create an account to see pricing </p>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="products-md">
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <p> <b>3425 items </b> &#8594; SHOW FILTERS</p>
                    <b> RECOMMENDED &#8595; </b>
                </div>
                <div className="product-cards">
                    {
                        products.map(product => 
                            <div key={product.id} className="shadow shadow-md p-3 m-2 product-card">
                                <img src={product.image} height={200} width={200} alt={"img"+product.id} />
                                <div style={{display:"flex",justifyContent:"space-evenly", margin:"8px"}}>
                                    <h5>{product.title} </h5>
                                    <i className="fa-regular fa-heart"></i>
                                </div>    
                                <p> Sign in or Create an account to see pricing </p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};
