"use client";

import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import axios from "axios";
import PageHead from "../components/PageHead";
import ReCAPTCHA from "react-google-recaptcha";


const Contact = () => {
	const [modifiedData, setModifiedData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [errorContact, setErrorContact] = useState<Error | null>(null);
	const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);


	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setModifiedData((prev) => ({
			...prev,
			[name]: value,
		}));
	};
	const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setModifiedData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	  
		if (recaptchaValue === null) {
		  // Si recaptchaValue est null, l'utilisateur n'a pas réussi le reCAPTCHA.
		  // Vous pouvez afficher un message d'erreur ou prendre d'autres mesures nécessaires.
		  console.error("Please complete the reCAPTCHA.");
		  return;
		}
	  
		try {
		  const response = await axios.post(`${process.env.API_URL}/contacts`, {
			data: modifiedData,
			recaptcha: recaptchaValue, // Incluez la valeur du reCAPTCHA dans la requête
		  });
		  // Handle successful response if needed
		  // console.log(response);
		} catch (error: unknown) {
		  if (error instanceof Error) {
			setErrorContact(error);
		  }
		}
	  };
	  
	const handleRecaptchaChange = (value: string | null) => {
		setRecaptchaValue(value);
	  };

	return (
		<>
			<PageHead subtitle="Get in touch" title="Contact me" />
			<section className="max-w-screen-2xl m-auto contact-sec px-10 md:px-16 lg:px-32 xl:px-72 text-center">
				<div className=" py-20 md:py-32">
					<form id="contact-form" onSubmit={handleSubmit}>
						<div className="flex flex-col md:flex-row md:flex-wrap">
							<div className="w-full md:w-6/12 md:pr-4 ">
								<label className="form-group hidden" htmlFor="name">Name</label>
								<input placeholder="Name" className="border-b border-[#0d2c32] dark:border-[#E7E6E2] text-#0d2c32 dark:text-white" type="text" id="name" name="name" value={modifiedData.name} onChange={handleChange} required />
							</div>
							<div className="w-full pt-6 md:pt-0 md:w-6/12 md:pl-4">
								<label className="form-group hidden" htmlFor="email">Email</label>
								<input placeholder="Email" className="form-group border-b border-[#0d2c32] dark:border-[#E7E6E2] text-#0d2c32 dark:text-white" type="email" id="email" name="email" value={modifiedData.email} onChange={handleChange} required />
							</div>
							<div className="w-full md:pt-10">
								<div className="form-group">
								<label className="form-group hidden" htmlFor="message">Message</label>
									<textarea
										placeholder="Message"
										className="border-b border-[#0d2c32] dark:border-[#E7E6E2] text-#0d2c32 dark:text-white"
										id="message" name="message"
										value={modifiedData.message}
										onChange={handleMessageChange}
										rows={4} // Vous pouvez ajuster ce nombre en fonction du nombre de lignes souhaité
										required
									/>{" "}
								</div>
							</div>
							
							<div className="w-full">
							<div className="text-center mx-auto">
									<ReCAPTCHA
										className="text-center mx-auto"
										sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
    onChange={handleRecaptchaChange}
									/>
									
</div>
								<div className="text-center mt-6">
									
									<button type="submit" className="button dark:dark-button cursor-pointer" disabled={!recaptchaValue}>
										Send Message
									</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</section>
		</>
	);
};

export default Contact;
