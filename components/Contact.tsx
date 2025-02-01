"use client";

import * as z from "zod";

import React from "react";
import sendEmail from "@/app/lib/send-mail";
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
    await sendEmail(
      data.email,
      data.subject,
      `Name: ${data.name} <br>
      Email: ${data.email} <br><br>
      Message: <br>
      ${data.message}`
    );
    reset();
    alert("Email sent successfully");
  };

  return (
    <div className="h-screen grayBackground ">
      <div className="flex justify-center items-center mb-12">
        <h2 className="pageTitle mt-12">Contact</h2>
      </div>
      <div className="flex justify-center items-center h-full -mt-24">
        <form
          className="flex flex-col items-center space-y-3.5 w-full max-w-xs md:max-w-md"
          onSubmit={handleSubmit(onSubmit)}
        >
          <p>Let&apos;s get in touch !</p>
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
