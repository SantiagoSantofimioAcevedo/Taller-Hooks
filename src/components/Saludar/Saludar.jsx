import React, { useState } from 'react';

export const Saludar= () => {
  const [name, setName] = useState('');

  return (
    <div>
      <input 
        type="text" 
        placeholder="Nombre completo" 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>Bienvenido {name}</h2>
    </div>
  );
};

