"use client";

import * as z from "zod";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const validationSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters"),
  email: z.string().trim().email("Invalid email address"),
  subject: z.string().trim().min(2, "Subject must be at least 2 characters"),
  message: z.string().trim().min(5, "Message must be at least 5 characters"),
});

type FormData = z.infer<typeof validationSchema>;

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch(`/api/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to send email");
      }
      reset();
      alert("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email");
    }
  };

  return (
    <div className="min-h-screen grayBackground sm:pt-20">
      <div className="flex justify-center items-center">
        <h2 className="pageTitle mb-12">Contact</h2>
      </div>
      <div className="flex justify-center items-center h-full">
        <form
          className="flex flex-col items-center space-y-3.5 w-full max-w-xs md:max-w-md"
          onSubmit={handleSubmit(onSubmit)}
        >
          <p className="textColor">Let&apos;s get in touch !</p>
          <input
            className="inputs w-full"
            placeholder="Name"
            {...register("name")}
          />
          {errors.name && <p>{errors.name.message}</p>}
          <input
            className="inputs w-full"
            type="email"
            placeholder="Email"
            {...register("email")}
          />
          {errors.email && <p>{errors.email.message}</p>}
          <input
            className="inputs w-full"
            type="text"
            placeholder="Subject"
            {...register("subject")}
          />
          {errors.subject && <p>{errors.subject.message}</p>}
          <textarea
            className="inputs w-full"
            placeholder="Message"
            rows={8}
            {...register("message")}
          ></textarea>
          {errors.message && <p>{errors.message.message}</p>}
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded"
            disabled={isSubmitting}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
