"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import PageHead from "../components/PageHead";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
	// Initialiser les données du formulaire
	const initialFormData = {
		name: "",
		email: "",
		message: "",
	};
	// État pour stocker les données du formulaire
	const [modifiedData, setModifiedData] = useState(initialFormData);
	// État pour gérer les erreurs
	const [errors, setErrors] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [errorContact, setErrorContact] = useState<Error | null>(null);
	// État pour indiquer si le formulaire est en cours d'envoi
	const [isSending, setIsSending] = useState(false);
	// État pour indiquer si l'e-mail a été envoyé avec succès
	const [isMailSent, setIsMailSent] = useState(false);
	// État pour stocker la valeur du reCAPTCHA
	const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
	
	// Fonction de gestion du changement d'input
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setModifiedData((prev) => ({
			...prev,
			[name]: value,
		}));
	};
	
	// Fonction de gestion du changement du textarea
	const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setModifiedData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	// Fonction de validation du formulaire
	const validateForm = () => {
		const { name, email, message } = modifiedData;
		const newErrors = {
			name: name.trim() === "" ? "Name is required" : "",
			email: email.trim() === "" ? "Email is required" : "",
			message: message.trim() === "" ? "Message is required" : "",
		};
		setErrors(newErrors);
		return !Object.values(newErrors).some((error) => error !== "");
	};

	// Fonction de soumission du formulaire
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!validateForm()) {
			// Form is not valid, do not submit
			return;
		}
		if (recaptchaValue === null) {
			// Si recaptchaValue est null, l'utilisateur n'a pas réussi le reCAPTCHA.
			console.error("Please complete the reCAPTCHA.");
			return;
		}
		setIsSending(true); // Set isSending to true to show the loader
		try {
			const response = await axios.post(`${process.env.API_URL}/contacts`, {
				data: modifiedData,
				recaptcha: recaptchaValue, // Incluez la valeur du reCAPTCHA dans la requête
			});
			// Handle successful response if needed
			// console.log(response);

			setIsMailSent(true); // Set mail sent state to true
			setModifiedData(initialFormData); // Reset the form data
		} catch (error: unknown) {
			if (error instanceof Error) {
				setErrorContact(error);
			}
		} finally {
			setIsSending(false); // Hide the loader after the request is completed
		}
	};

	// Fonction de gestion du changement de reCAPTCHA
	const handleRecaptchaChange = (value: string | null) => {
		setRecaptchaValue(value);
	};

	return (
		<>
			<PageHead subtitle="Get in touch" title="Contact me" />
			<section className="max-w-screen-2xl m-auto contact-sec px-10 md:px-16 lg:px-32 xl:px-72 text-center">
				
				<div className="py-20 md:py-32">
					{isMailSent ? (
						<p className="text-[#17515c] dark:text-[#c0ccbb] pb-20">
							Your message has been sent successfully, <br /> I'll get back to you shortly!
						</p>) : ("")}
						<form id="contact-form" onSubmit={handleSubmit}>
							<div className="flex flex-col md:flex-row md:flex-wrap">
								<div className="w-full md:w-6/12 md:pr-4 ">
									<label className="form-group">
										<input placeholder="Name" className={`border-b border-[#0d2c32] dark:border-[#E7E6E2] text-#0d2c32 dark:text-white ${errors.name ? "border-red-500" : ""}`} type="text" name="name" value={modifiedData.name} onChange={handleChange} />
										{errors.name && <p className="text-red-500">{errors.name}</p>}
									</label>
								</div>
								<div className="w-full pt-6 md:pt-0 md:w-6/12 md:pl-4">
									<div className="form-group">
										<input placeholder="Email" className={`border-b border-[#0d2c32] dark:border-[#E7E6E2] text-#0d2c32 dark:text-white ${errors.email ? "border-red-500" : ""}`} type="email" name="email" value={modifiedData.email} onChange={handleChange} />
										{errors.email && <p className="text-red-500">{errors.email}</p>}
									</div>
								</div>
								<div className="w-full md:pt-10">
									<div className="form-group">
										<textarea placeholder="Message" className={`border-b border-[#0d2c32] dark:border-[#E7E6E2] text-#0d2c32 dark:text-white ${errors.message ? "border-red-500" : ""}`} name="message" value={modifiedData.message} onChange={handleMessageChange} rows={4} />
										{errors.message && <p className="text-red-500">{errors.message}</p>}
									</div>
								</div>
								<div className="w-full flex justify-center m-auto">
									<div className="text-center mt-6">
										{isSending ? (
											<div className="loader dark:text-[#c0ccbb]">Sending...</div>
										) : (
											<>
												<ReCAPTCHA className="mb-6" sitekey={process.env.RECAPTCHA_SITE_KEY || ""} onChange={handleRecaptchaChange} />
												<button type="submit" className="button dark:dark-button cursor-pointer">
													Send message
												</button>
												{errorContact && <p className="text-red-500">{errorContact.message}</p>}
											</>
										)}
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
