import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";

import axios from "axios";
import rehypeRaw from "rehype-raw";

import { serverPath } from "../../shared/consts/consts";

import { Container } from "@mui/material";
import { Dna } from "react-loader-spinner";

import styles from "./FactPage.module.scss";

type TranslationContentType = {
  id: number;
  key: string;
  content: string;
  language: string;
  image: string;
  page: number;
};

export const FactPage = () => {
  const { i18n } = useTranslation();
  const [translations, setTranslations] = useState<TranslationContentType>();
  const [loading, setLoading] = useState<boolean>(false);
  const { page } = useParams();

  const fetchTranslations = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get<TranslationContentType>(
        `${serverPath}/api/translations/content?lang=${i18n.language}&page=${page}`
      );
      setTranslations(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching translations", error);
    }
  };

  useEffect(() => {
    fetchTranslations();
  }, [i18n.language, page]);

  return (
    <div className={styles.root}>
      {!loading ? (
        <Container>
          <LazyLoadImage
            src={`${serverPath}/uploads/${translations?.image}`}
            alt=""
            width="100%"
            effect="blur"
            style={{ marginBottom: 30, maxHeight: "450px", objectFit: "cover" }}
          />
          <ReactMarkdown
            children={translations?.content || ""}
            rehypePlugins={[rehypeRaw as any]}
            skipHtml={false}
          />
        </Container>
      ) : (
        <div className={styles.loader_wrapper}>
          <Dna
            visible={true}
            height="180"
            width="180"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      )}
    </div>
  );
};
