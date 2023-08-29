import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import { useTranslation } from "react-i18next";
import ReactQuill from "react-quill";
import axios from "axios";

export function MarkdownPage() {
  const [content, setContent] = useState("");
  const [language, setLanguage] = useState("kz");
  const [page, setPage] = useState<number>(0);

  const handleAddTranslation = async () => {
    const data = {
      content,
		key: "content",
      language,
      page,
    };

    try {
      const response = await axios.post(
        "http://localhost:3001/add-translation",
        data
      );

      if ((response.status = 201)) {
        console.log("Translation added successfully!");
        // Сбросить состояние после успешного добавления
        setContent("");
        setLanguage("kz");
        setPage(0);
      } else {
        console.error("Error adding translation");
      }
    } catch (error) {
      console.error("Error adding translation:", error);
    }
  };

  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"], // Опции форматирования текста
      [{ list: "ordered" }, { list: "bullet" }], // Опции списков
      [{ indent: "-1" }, { indent: "+1" }], // Опции отступов
      ["link"], // Опция вставки ссылок
      [{ size: ["small", false, "large", "huge"] }], // Опция изменения размера текста
      ["clean"], // Очистка форматирования
      [{ header: [1, 2, 3, 4, 5, 6, false] }], // Опции заголовков разных уровней
      ["blockquote"], // Опция вставки цитат
    ],
  };

  return (
    <div>
      <input
        type="string"
        value={page}
        onChange={(e) => setPage(Number(e.target.value))}
        placeholder="Key"
      />
      <ReactQuill
        value={content}
        onChange={setContent}
        placeholder="Content"
        modules={modules}
      />
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="kz">Казахский</option>
        <option value="ru">Русский</option>
      </select>
      <button onClick={handleAddTranslation}>Add Translation</button>
    </div>
  );
}
