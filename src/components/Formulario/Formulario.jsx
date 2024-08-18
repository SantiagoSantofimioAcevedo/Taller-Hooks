
import React, { useState } from 'react';

export const Formulario = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    usuario: '',
    correo: '',
    teléfono: '',
    id: '',
    correo: ''
  });

  const [registrations, setRegistrations] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const exists = registrations.some((registration) => registration.id === formData.id);

    if (exists) {
      alert('El usuario ya existe.');
    } else {
      setRegistrations([...registrations, formData]);
      setFormData({
        nombre: '',
        usuario: '',
        correo: '',
        teléfono: '',
        id: '',
        correo: ''
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} />
        <input type="text" name="usuario" placeholder="Usuario" value={formData.usuario} onChange={handleChange} />
        <input type="email" name="correo" placeholder="Correo" value={formData.correo} onChange={handleChange} />
        <input type="text" name="teléfono" placeholder="Teléfono" value={formData.teléfono} onChange={handleChange} />
        <input type="text" name="id" placeholder="ID" value={formData.id} onChange={handleChange} />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};
