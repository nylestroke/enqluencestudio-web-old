import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MainPage from "./pages/MainPage/MainPage";
import Footer from "./components/Footer/Footer";
import OurTeam from "./pages/OurTeam/OurTeam";
import Contact from "./pages/Contact/Contact";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/ourteam" element={<OurTeam />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
