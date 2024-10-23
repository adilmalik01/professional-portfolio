import { NextSeo } from "next-seo";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Contact() {
  return (
    <>
      <NextSeo title="Contact Adil Malik - MERN and FullStack Developer" />
      <section className="mx-auto mb-40 mt-12 w-full gap-20 px-6 sm:mt-16 sm:px-14 md:px-24 lg:px-36 xl:px-48">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-bold text-foreground md:text-5xl text-center">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 text-center mt-4">
            I'd love to hear from you! Whether it's a project inquiry or just to say hello.
          </p>
          <div className="mt-12 max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <form action="#" method="POST">
              <div className="grid grid-cols-1 gap-8">
                <div>
                  <label className="block text-lg font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="mt-2 block w-full p-4 rounded-lg border-gray-300 shadow-sm focus:border-accent focus:ring-accent sm:text-lg"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="mt-2 block w-full p-4 rounded-lg border-gray-300 shadow-sm focus:border-accent focus:ring-accent sm:text-lg"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    className="mt-2 block w-full p-4 rounded-lg border-gray-300 shadow-sm focus:border-accent focus:ring-accent sm:text-lg"
                    placeholder="Write your message"
                    required
                  ></textarea>
                </div>
              </div>

              <div className="mt-10">
                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/80 transition-all text-white font-bold py-4 px-6 rounded-lg shadow-lg text-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="mx-auto mt-20 max-w-5xl text-center text-foreground">
            <p className="text-xl md:text-2xl">
              You can also reach me at{" "}
              <a
                href="mailto:your-email@example.com"
                className="font-semibold text-accent underline underline-offset-4 hover:text-accent/70"
              >
                your-email@example.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
