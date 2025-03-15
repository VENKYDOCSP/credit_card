"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import toast from "react-hot-toast";

const Form = () => {
    // State to store form values
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        pincode: "",
        monthlyIncome: "",
        status: "",
    });

    // State to store errors
    const [errors, setErrors] = useState({});

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    // Handle input change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle form validation
    const validateForm = () => {
        let newErrors = {};

        if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
        if (!formData.cardType) newErrors.cardType = "Please select a card";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (validateForm()) {
            try {
                const response = await axios.post(
                    "https://locate.equitasbank.com/campaign_form",
                    formData
                );

                console.log(response.data);

                if (response.data.status === "success") {
                    setFormData({
                        fullName: "",
                        email: "",
                        phone: "",
                        cardType: "",
                    });
                    toast.success("Form submitted successfully!");
                } else {
                    toast.error("Form submission failed!");
                }
            } catch (error) {
                console.error("Error submitting form:", error);
                toast.error("Something went wrong. Please try again later.");
            }
        }
    };


    return (
        <div className="md:mx-auto" id="apply-now">
            <form onSubmit={handleFormSubmit} className="max-w-lg mx-auto px-7">
                <p className="text-center form-title py-8">Request a Call Back</p>

                {/* Full Name */}
                <div className="mb-5">
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="rounded-full border border-gray-500 block w-full p-2"
                        placeholder="Customer Name"
                    />
                    {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}
                </div>

                <div className="flex mb-5">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-none border border-e-0 rounded-s-full border-gray-500">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
                            style={{ width: "20px" }}
                            alt="India Flag"
                        />
                    </span>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-none rounded-s-none border-s-0 rounded-full border border-gray-500 text-black text-sm block w-full p-2"
                        placeholder="+91 913378738"
                    />
                </div>
                {errors.phone && <p className="text-red-500">{errors.phone}</p>}

                {/* Email */}
                <div className="mb-5">
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="rounded-full border border-gray-500 block w-full p-2"
                        placeholder="Email Id"
                    />
                    {errors.email && <p className="text-red-500">{errors.email}</p>}
                </div>


                <div className="mb-5">
                    <input
                        type="text"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        className="rounded-full border border-gray-500 block w-full p-2"
                        placeholder="pincode"
                    />
                    {errors.pincode && <p className="text-red-500">{errors.pincode}</p>}
                </div>


                {/* Phone Number */}



                <div className="mb-5">
                    <select
                        name="monthlyIncome"
                        value={formData.monthlyIncome}
                        onChange={handleChange}
                        className="bg-none rounded-full border border-gray-500 text-black text-sm block w-full p-2.5"
                    >
                        <option value="" disabled>
                            Monthly Income
                        </option>
                        <option value="<35K">&lt; 35K</option>
                        <option value="35-50K">35-50K</option>
                        <option value="50K-75K">50K-75K</option>
                        <option value="75K-1.5L">75K-1.5L</option>
                        <option value="1.5L+">1.5L and above</option>
                    </select>
                </div>

                {errors.monthlyIncome && <p className="text-red-500">{errors.monthlyIncome}</p>}

                <div className="mb-5">
                    {/* <p className="text-sm mb-2">Employment Status</p> */}
                    <div className="flex items-center">
                        <label className="mr-4">
                            <input
                                type="radio"
                                name="employmentStatus"
                                value="Salaried"
                                checked={formData.employmentStatus === "Salaried"}
                                onChange={handleChange}
                                className="mr-2"
                            />
                            Salaried
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="employmentStatus"
                                value="Self Employed"
                                checked={formData.employmentStatus === "Self Employed"}
                                onChange={handleChange}
                                className="mr-2"
                            />
                            Self Employed
                        </label>
                    </div>
                </div>


                {/* ReCaptcha Placeholder 
                <div className="flex ms-1">
                    <div className="g-recaptcha" data-sitekey="YOUR_SITE_KEY"></div>
                </div>*/}

                {/* Submit Button */}
                <div className="text-center" data-aos="fade-left">
                    <button type="submit" className="form_sumbit_btn rounded-full">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
