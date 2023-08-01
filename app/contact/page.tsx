"use client";
import React from "react";
import Split from "../components/Split";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import { Yeseva_One } from "next/font/google";
import PageHead from "../components/PageHead";

export const yeseva = Yeseva_One({
	weight: ["400"],
	style: ["normal"],
	subsets: ["latin"],
});

export default function Contact() {
	const messageRef = React.useRef(null);
	function validateEmail(value) {
		let error;
		if (!value) {
			error = "Required";
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
			error = "Invalid email address";
		}
		return error;
	}
	const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));

	return (
		<>
			<PageHead subtitle="Get in touch" title="Contact me" />
			<section className="contact-sec">
				<div className="row px-32 py-16 justify-center">
					<div className="w-10/12">
						<div className="form wow fadeInUp" data-wow-delay=".5s">
							<Formik
								initialValues={{
									name: "",
									email: "",
									message: "",
								}}
								onSubmit={async (values) => {
									await sendMessage(500);
									// alert(JSON.stringify(values, null, 2));
									// show message
									const formData = new FormData();

									formData.append("name", values.name);
									formData.append("email", values.email);
									formData.append("message", values.message);
									const res = await "".post("/contact.php", formData);

									if (!res) return;

									messageRef.current.innerText = "Your Message has been successfully sent. I will contact you soon.";
									// Reset the values
									values.name = "";
									values.email = "";
									values.message = "";
									// clear message
									setTimeout(() => {
										messageRef.current.innerText = "";
									}, 2000);
								}}
							>
								{({ errors, touched }) => (
									<Form id="contact-form">
										<div className="messages" ref={messageRef}></div>

										<div className="controls">
											<div className="row">
												<div className="w-6/12 px-4">
													<div className="form-group ">
														<Field className="border-b border-[#0d2c32] dark:border-[#E7E6E2]"id="form_name" type="text" name="name" placeholder="Name" required="required" />
													</div>
												</div>
												<div className="w-6/12 px-4">
													<div className="form-group">
														<Field className="border-b border-[#0d2c32] dark:border-[#E7E6E2]"id="form_email" type="email" name="email" validate={validateEmail} placeholder="Email" required="required" />
														{errors.email && touched.email && <div>{errors.email}</div>}
													</div>
												</div>
												<div className="w-full px-4">
													<div className="form-group">
														<Field className="border-b border-[#0d2c32] dark:border-[#E7E6E2]" as="textarea" id="form_message" name="message" placeholder="Message" rows="4" required="required" />
													</div>
												</div>
												<div className="w-full">
													<div className="text-center">
														<button type="submit" className="text-[#0d2c32] dark:text-[#e7e6e2] hover:text-[#c0ccbb] dark:hover:text-[#c0ccbb]  cursor-pointer">
															<span>Send Message</span>
														</button>
													</div>
												</div>
											</div>
										</div>
									</Form>
								)}
							</Formik>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
