import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import data from './data';

export const ModalForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
	const [nameError, setNameError] = useState('');
	const [emailError, setEmailError] = useState('');

  const handleCountry = (e) => {
    setCountry(e.target.value);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

	const handleNameChange = (e) => {
		setName(e.target.value);
		if (!/^[a-zA-Z\s]*$/.test(e.target.value)) {
			setNameError('El nombre solo debe contener letras y espacios');
		} else {
			setNameError('');
		}
	};
	
	const handleEmailChange = (e) => {
		setEmail(e.target.value);
		if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value)) {
			setEmailError('Por favor, introduce un correo electrónico válido');
		} else {
			setEmailError('');
		}
	};

	const countries = data.reduce((acumulador, el) => {
		return acumulador.includes(el.country) ? acumulador : [...acumulador, el.country];
	}, []);

	const cities = data.filter((el) => el.country === country).map((el) => el.city);

  return (
    <div className="modal show" style={{ display: 'block', position: 'initial' }}>
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Formulario de Registro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                className={`form-control ${nameError ? 'is-invalid' : ''}`}
                id="name"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Correo</label>
              <input
                type="email"
                className={`form-control ${emailError ? 'is-invalid' : ''}`}
                id="email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">País</label>
              <select
							className="form-select"
							id="country"
							value={country}
							onChange={handleCountry}
						>
							<option value="">Selecciona un país</option>
							{countries.map((country, index) => (
								<option key={index} value={country}>
									{country}
								</option>
							))}
						</select>
            </div>
            <div className="mb-3">
              <label className="form-label">Ciudad</label>
              <select
							className="form-select"
							id="city"
							value={city}
							onChange={handleCity}
						>
							<option value="">Selecciona una ciudad</option>
							{cities.map((city, index) => (
								<option key={index} value={city}>
									{city}
								</option>
							))}
						</select>
            </div>
            <button type="submit" data-bs-dismiss="modal" className="btn btn-warning">
              Submit
            </button>
          </form>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
};
