import React from "react";
import Header from "../common/Header";
import { Input } from "../ui/input";
import MainButton from "../common/MainButton";

function NewsletterSection() {
  return (
    <section className="mt-[9rem]">
      <Header title="Our newsletter" subtitle="Subscribe Our Newsleter" />
      <div className="flex flex-col md:flex-row  items-center mt-8 md:mt-[3.31rem]">
        <div>
          <img
            src="/images/newsletter_large_icon.png"
            alt="large envelop image"
            className="w-[10rem] md:w-full"
          />
        </div>
        <div>
          <p className="mb-[1.44rem] text-normal font-semibold">
          Join our community to receive exclusive updates, industry news, and tips to maximize your productivity with our software. Don’t miss out on our latest features and resources designed to help you succeed!
          </p>

          <Input
            type="email"
            placeholder="Your E-mail here..."
            className="h-[3.8125rem] rounded-[3.0625rem] newsletter-box-shadow"
          />
          <div className="mt-[3.12rem]">
            <MainButton text="Subscribe Our Newsletter" width="full_width" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
