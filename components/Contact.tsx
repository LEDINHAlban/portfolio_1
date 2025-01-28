import React from "react";

function Contact() {
  return (
    <div className="h-screen grayBackground ">
      <div className="flex justify-center items-center">
        <h2 className="pageTitle mt-12">Contact</h2>
      </div>
      <div className="flex justify-center items-center h-full -mt-12">
        <div className="flex flex-col items-center space-y-3.5 w-full max-w-xs md:max-w-md ">
          <p>Let&apos;s get in touch !</p>
          <input className="inputs w-full" placeholder="Name" />
          <input className="inputs w-full" type="email" placeholder="Email" />
          <input className="inputs w-full" type="text" placeholder="Subject" />
          <textarea
            className="inputs w-full"
            placeholder="Message"
            rows={8}
          ></textarea>
          <button
            type="submit"
            className="w-full  bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
