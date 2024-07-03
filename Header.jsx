
import { BsList } from "react-icons/bs"; "react-icons/ai"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdContact } from "react-icons/io";
import { HiOutlineX } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

export default function Header() {

    const [modal, setModal] = useState(true)
    function callModal() {
        setModal(!modal)
    }

    return (
        <div className="main-header">
            <div className="main-modal">
                {!modal && <div id="modal">
                    <HiOutlineX className="modal-icons" onClick={() => {
                        setModal(!modal)
                    }} />
                    <div className="popular">
                        <h2>Popular Category</h2>
                            <p>women Clothes</p>
                            <p>Men Clothes</p>
                            <p>Kids Clothes</p>
                            <p>Electronics</p>
                            <p>Home Appliances</p>
                            <p>Furniture</p>
                            <p>Sports</p>
                            <p>Fashion</p>
                            <p>Beauty</p>
                            <p>Health</p>
                    </div>
                </div>}
            </div>
            <div className="header">
                <div className="h">
                    <BsList className="nav-list" onClick={callModal} />
                    <h2>Shopping App</h2>
                </div>

                <div className="nav-bar">
                    <div>
                        <IoMdContact className="navList" />
                        <AiOutlineShoppingCart className="nav-list" />
                    </div>
                </div>
            </div>
            <div className="buttonElem">
                <input type="search" placeholder="search your product" />
                <CiSearch className="search"/>
            </div>
            <div className="end-nav">
                <p>Deals</p>
                <p>Best Sellers</p>
                <p>Check Order</p>
                <p>ShoppingApp Basic</p>
            </div>
        </div>
    )
}
