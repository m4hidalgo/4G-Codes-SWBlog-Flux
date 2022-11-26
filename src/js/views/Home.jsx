import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => (
	<div className="container-fluid bg-black p-5">
		<div className="row mb-5">
			<div className="col">
				<Link to="/people">
					<div className="card bg-dark text-white">
						<img src="https://starwars-visualguide.com/assets/img/categories/character.jpg" className="card-img" alt="..."/>
						<div className="card-img-overlay p-0 text-center">
							<h4 className="card-title bg-secondary bg-opacity-50" style={{color: "red", marginTop: 6+"em", fontWeight: "bolder"}}>CHARACTERS</h4>
						</div>
					</div>
				</Link>
			</div>

			<div className="col">
				<Link to="/films">
					<div className="card bg-dark text-white">
						<img src="https://starwars-visualguide.com/assets/img/categories/films.jpg" className="card-img" alt="..."/>
						<div className="card-img-overlay p-0 text-center">
							<h4 className="card-title bg-secondary bg-opacity-50" style={{color: "yellow", marginTop: 6+"em", fontWeight: "bolder"}}>FILMS</h4>
						</div>
					</div>
				</Link>
			</div>

			<div className="col">
				<Link to="/species">
					<div className="card bg-dark text-white">
						<img src="https://starwars-visualguide.com/assets/img/categories/species.jpg" className="card-img" alt="..."/>
						<div className="card-img-overlay p-0 text-center">
							<h4 className="card-title bg-secondary bg-opacity-50" style={{color: "orange", marginTop: 6+"em", fontWeight: "bolder"}}>SPECIES</h4>
						</div>
					</div>
				</Link>
			</div>
		</div>
		<div className="row mb-5">
			<div className="col-4">
				<Link to="/starships">
					<div className="card bg-dark text-white">
						<img src="https://starwars-visualguide.com/assets/img/categories/starships.jpg" className="card-img" alt="..."/>
						<div className="card-img-overlay p-0 text-center">
							<h4 className="card-title bg-secondary bg-opacity-50" style={{color: "white", marginTop: 6+"em", fontWeight: "bolder"}}>STARSHIPS</h4>
						</div>
					</div>
				</Link>
			</div>

			<div className="col-4">
				<Link to="/vehicles">
					<div className="card bg-dark text-white">
						<img src="https://starwars-visualguide.com/assets/img/categories/vehicles.jpg" className="card-img" alt="..."/>
						<div className="card-img-overlay p-0 text-center">
							<h4 className="card-title bg-secondary bg-opacity-50" style={{color: "lightblue", marginTop: 6+"em", fontWeight: "bolder"}}>VEHICLES</h4>
						</div>
					</div>
				</Link>
			</div>

			<div className="col-4">
				<Link to="/planets">
					<div className="card bg-dark text-white">
						<img src="https://starwars-visualguide.com/assets/img/categories/planets.jpg" className="card-img" alt="..."/>
						<div className="card-img-overlay p-0 text-center">
							<h4 className="card-title bg-secondary bg-opacity-50" style={{color: "yellow", marginTop: 6+"em", fontWeight: "bolder"}}>PLANETS</h4>
						</div>
					</div>
				</Link>
			</div>
		</div>
	</div>
);
