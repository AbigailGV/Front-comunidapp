/* eslint-disable  */
import {Route, Routes} from "react-router-dom";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

import {Login} from "./Login";
import {Home} from "./Home";
import {YourExchanges} from "./YourExchanges";
import {YourResources} from "./YourResources";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/" element={<Home />}></Route>
				<Route path="/your-exchanges" element={<YourExchanges />}></Route>
				<Route path="/your-resources" element={<YourResources />}></Route>
			</Routes>
		</div>
	);
}
export default App;
