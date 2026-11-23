import { useState } from "react";

const TicketForm = () => {

	const ticketDefault = {
		name: "",
		language: "HTML",
		urgency: "",
		updates: false,
		description: "",
	};

	const [ticketData, setTicketData] = useState(ticketDefault);

	function handleForm(event) {
		const { name, type, value, checked } = event.target;

		setTicketData((prev) => ({
			...prev,
			[name]: type === "checkbox" ? checked : value,
		}));
	}

	function handleSubmit(event) {
		event.preventDefault();
		console.log(ticketData);
	}

	return (
		<div className="container mt-4">
			<h2>Richiesta apertura Ticket</h2>
			<form onSubmit={handleSubmit} className="p-4 border rounded bg-light">
				{/* Nome */}
				<div className="mb-3">
					<label className="form-label">Nome</label>
					<input
						type="text"
						name="name"
						value={ticketData.name}
						onChange={handleForm}
						className="form-control"
						required
					/>
				</div>

				{/* Selezione linguaggio */}
				<div className="mb-3">
					<label className="form-label">Linguaggio di programmazione</label>
					<select
						name="language"
						value={ticketData.language}
						onChange={handleForm}
						className="form-select"
					>
						<option value="HTML">HTML</option>
						<option value="CSS">CSS</option>
						<option value="JS">JavaScript</option>
						<option value="React">React</option>
						<option value="Express">Express</option>
						<option value="SQL">SQL</option>
					</select>
				</div>

				{/* Radio Urgenza */}
				<div className="mb-3">
					<label className="form-label">Livello di urgenza</label>
					<div>
						<div className="form-check">
							<input
								type="radio"
								name="urgency"
								value="low"
								id="urgencyLow"
								checked={ticketData.urgency === "low"}
								onChange={handleForm}
								className="form-check-input"
							/>
							<label className="form-check-label" htmlFor="urgencyLow">Bassa</label>
						</div>
						<div className="form-check">
							<input
								type="radio"
								name="urgency"
								value="medium"
								id="urgencyMedium"
								checked={ticketData.urgency === "medium"}
								onChange={handleForm}
								className="form-check-input"
							/>
							<label className="form-check-label" htmlFor="urgencyMedium">Media</label>
						</div>
						<div className="form-check">
							<input
								type="radio"
								name="urgency"
								value="high"
								id="urgencyHigh"
								checked={ticketData.urgency === "high"}
								onChange={handleForm}
								className="form-check-input"
							/>
							<label className="form-check-label" htmlFor="urgencyHigh">Alta</label>
						</div>
					</div>
				</div>

				{/* Checkbox aggiornamenti */}
				<div className="mb-3 form-check">
					<input
						type="checkbox"
						name="updates"
						id="updates"
						checked={ticketData.updates}
						onChange={handleForm}
						className="form-check-input"
					/>
					<label className="form-check-label" htmlFor="updates">Ricevi aggiornamenti sulla richiesta</label>
				</div>

				{/* Descrizione problema */}
				<div className="mb-3">
					<label className="form-label">Descrizione del problema</label>
					<textarea
						name="description"
						value={ticketData.description}
						onChange={handleForm}
						className="form-control"
						rows="4"
						required
					/>
				</div>

				{/* Pulsante di invio */}
				<button type="submit" className="btn btn-primary">Invia richiesta</button>
			</form>
		</div>
	);
};

export default TicketForm;