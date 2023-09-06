import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { serverPath } from "../../shared/consts/consts";
import { Container } from '../../shared/ui/Container/Container';
export const AuthPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${serverPath}/auth`, formData);

      if (response.status == 200) {
        navigate("/admin");
      } else {
      }
    } catch (error) {
      console.error("Ошибка авторизации:", error);
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Логин:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="password">Пароль:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />	

        <button type="submit">Войти</button>
      </form>
    </Container>
  );
};
