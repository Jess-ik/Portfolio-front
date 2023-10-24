"use client";

import { BsArrowLeft } from "react-icons/bs";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Link from "next/link";
import useSWR from "swr";
import React, { useEffect, useState } from "react";
import ProjectSlug from "../../components/ProjectSlug";



interface Params {
	params: {
		slug: string;
	};
	lang: string;
};

export default function ProjectDetails({ params, lang }: Params) {
	const { slug } = params;
	const apiUrl =
	  lang === "en"
		? `${process.env.API_URL}/projects/${slug}`
		: `${process.env.API_URL}/projects/${slug}-fr`;
  
	const fetcher = async (url: string) => {
	  const response = await fetch(url);
	  return response.json();
	};
  
	const { data, error } = useSWR(apiUrl, fetcher);
  
	if (error) {
	  return <div>Erreur lors du chargement des données</div>;
	}
  
	if (!data) {
	  return <div>Chargement...</div>;
	}
  

	return (
		<>
			<ProjectSlug lang={lang} slug={slug} />
		</>
	);
}
