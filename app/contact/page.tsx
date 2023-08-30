"use client";

import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import axios from "axios";
import PageHead from "../components/PageHead";

const Contact = () => {
	const [modifiedData, setModifiedData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [errorContact, setErrorContact] = useState<Error | null>(null);

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

		try {
			const response = await axios.post(`${process.env.API_URL}/contacts`, {
				data: modifiedData,
			});
			// Handle successful response if needed
			// console.log(response);
		} catch (error: unknown) {
			if (error instanceof Error) {
				setErrorContact(error);
			}
		}
	};

	return (
		<>
			<PageHead subtitle="Get in touch" title="Contact me" />
			<section className="max-w-screen-2xl m-auto contact-sec px-10 md:px-16 lg:px-32 xl:px-72 text-center">
				<div className=" py-20 md:py-32">
					<form id="contact-form" onSubmit={handleSubmit}>
						<div className="flex flex-col md:flex-row md:flex-wrap">
							<div className="w-full md:w-6/12 md:pr-4 ">
								<label className="form-group ">
									<input placeholder="Name" className="border-b border-[#0d2c32] dark:border-[#E7E6E2] text-#0d2c32 dark:text-white" type="text" name="name" value={modifiedData.name} onChange={handleChange} required />
								</label>
							</div>
							<div className="w-full pt-6 md:pt-0 md:w-6/12 md:pl-4">
								<div className="form-group">
									<input placeholder="Email" className="border-b border-[#0d2c32] dark:border-[#E7E6E2] text-#0d2c32 dark:text-white" type="email" name="email" value={modifiedData.email} onChange={handleChange} required />
								</div>
							</div>
							<div className="w-full md:pt-10">
								<div className="form-group">
									<textarea
										placeholder="Message"
										className="border-b border-[#0d2c32] dark:border-[#E7E6E2] text-#0d2c32 dark:text-white"
										name="message"
										value={modifiedData.message}
										onChange={handleMessageChange}
										rows={4} // Vous pouvez ajuster ce nombre en fonction du nombre de lignes souhaité
										required
									/>{" "}
								</div>
							</div>
							<div className="w-full">
								<div className="text-center mt-6">
									<button type="submit" className="button dark:dark-button cursor-pointer">
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
