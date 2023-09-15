import React, { useState, useEffect } from "react";

const generateUniqueKey = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";

  let key = "";

  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * letters.length);
    key += letters[randomIndex];
  }

  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    key += numbers[randomIndex];
  }

  return key;
};

const ClienteForm = () => {
  const [formData, setFormData] = useState({});
  const [uniqueKey, setUniqueKey] = useState("");

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem(uniqueKey)) || {};
    setFormData(savedData);
  }, [uniqueKey]);

  const handleSubmit = () => {
    const newKey = generateUniqueKey();
    setUniqueKey(newKey);

    const dataToSave = {
      name: formData.name,
      email: formData.email,
    };

    localStorage.setItem(newKey, JSON.stringify(dataToSave));
    sessionStorage.setItem(newKey, JSON.stringify(dataToSave));

    alert(`Seja bem vindo ${formData.name}`);
    formData.name = "";
    formData.email = "";
  };

  return (
    <form action="#">
      <div className="form-group">
        <label for="nome">Nome:</label>
        <input
          type="text"
          name="name"
          value={formData.name || ""}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label for="email">Email:</label>
        <input
          type="text"
          name="email"
          value={formData.email || ""}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Enviar
      </button>
    </form>
    // <div>
    //   <input
    //     type="text"
    //     name="name"
    //     value={formData.name || ''}
    //     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
    //   />
    //   <input
    //     type="text"
    //     name="email"
    //     value={formData.email || ''}
    //     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
    //   />
    //   <button onClick={handleSubmit}>Salvar</button>
    // </div>
  );
};

export default ClienteForm;
