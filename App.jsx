import { furniture, shoe, kitchen } from "./Data";
import MoreProduct from "./MoreProduct";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";

function App() {
	
	function handleImageEventFurniture() {
		console.log("handleImageEventFurniture");
	}

	function handleImageEventShoe() {
		console.log("handleImageEventShoe");
	}

	function handleImageEventKitchen() {
		console.log("handleImageEventKitchen"); 
	}

	const furnitureData = furniture.map((itemsFurniture) => (
		<div key={itemsFurniture}>
			<div className="card">
				<img
					src={itemsFurniture.img}
					alt=""
					style={color}
					onClick={handleImageEventFurniture}
				/>
				<p>{itemsFurniture.name}</p>
				<p>{itemsFurniture.price}</p>

				<div className="icons-card">
					
				</div>
			</div>
		</div>
	));

	const shoeData = shoe.map((itemsShoe) => (
		<div key={itemsShoe}>
			<div className="card">
				<img
					src={itemsShoe.img}
					alt=""
					style={color}
					onClick={handleImageEventShoe}
				/>
				<p>{itemsShoe.name}</p>
				<p>{itemsShoe.price}</p>

				<div className="icons-card">
				</div>
			</div>
		</div>
	));

	const kitchenData = kitchen.map((itemsKitchen) => (
		<div key={itemsKitchen}>
			<div className="card">
				<img
					src={itemsKitchen.img}
					alt=""
					style={color}
					onClick={handleImageEventKitchen}
				/>
				<p>{itemsKitchen.name}</p>
				<p>{itemsKitchen.price}</p>

				<div className="icons-card">
					
				</div>
			</div>
		</div>
	));

	return (
		<>
			<Header />
			<div className="items-card">{furnitureData}</div>
			<div className="more-product">
				<MoreProduct />
			</div>

			<div className="items-card">
				{shoeData}
				{kitchenData}
			</div>

			<Footer />
		</>
	);
}

export default App;

const color = {
	height: "300px",
	width: "280px",
	borderRadius: "10px",
	margin: "10px",
	backgroundColor: "white",
	padding: "10px",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
};
