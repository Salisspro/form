
import { useState } from "react";

export default function MoreProduct() {
    
    const [moreProduct, setMoreProduct] = useState('see more product');

    function callProduct() {
        setMoreProduct('sorry no more products')
    }

    return (
        <div>
            <p onClick={callProduct} className="">{ moreProduct}</p> 
        </div>
    )
}
