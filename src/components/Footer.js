import React, { useState } from "react";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleScrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubscribe = async () => {
    if (!email) {
      alert("Please enter a valid email address");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(process.env.REACT_APP_GOOGLE_SHEET_UR, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json(); // Parse JSON response
      console.log(email);

      if (data.success) {
        console.log(data);
        alert("Subscription successful!");
      } else {
        alert("Subscription failed. Please try again later.");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      alert("Failed to subscribe. Please try again.");
    } finally {
      setLoading(false);
      setEmail("");
    }
  };
  return (
    <div className="w-full bg-[#0d4e6e]">
      <div className="max-w-[1440px] mx-auto">
        <div className="p-6 md:p-20 flex flex-col gap-8 md:gap-16">
          {/* Main Content */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-32">
            {/* Subscribe Section */}
            <div className="w-full md:w-[500px] flex flex-col gap-6">
              <div className="w-[267px]">
                <div className="flex items-center gap-[13.37px]">
                  <svg
                    width="20"
                    height="22"
                    viewBox="0 0 20 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/*SVG Path */}
                  </svg>
                  <div className="text-white text-xl font-normal font-['Alice']">
                    Somerville Dental
                  </div>
                </div>
              </div>
              <div className="text-white text-base font-normal font-nunito">
                Join our newsletter to stay up to date on features and releases.
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="grow h-12 p-3 rounded-[5px] border border-white text-white text-base font-normal font-nunito bg-transparent"
                  />
                  <div
                    className="h-12 px-6 py-3 bg-white rounded-[5px] border border-white flex justify-center items-center"
                    onClick={handleSubscribe}
                  >
                    <button
                      className="text-[#005963] text-base font-normal font-nunito"
                      disabled={loading}
                    >
                      {loading ? "Subscribing..." : "Subscribe"}
                    </button>
                  </div>
                </div>
                <div className="text-white text-base font-normal font-nunito">
                  By subscribing you agree to our Privacy Policy and consent to
                  receive updates from our company.
                </div>
              </div>
            </div>

            {/* Links and Social Section */}
            <div className="flex flex-col sm:flex-row gap-10 flex-grow">
              {/* Links */}
              <div className="w-full sm:w-[322px] flex flex-col gap-4">
                <div className="text-white text-base font-bold font-nunito">
                  Links
                </div>
                <div className="flex flex-col">
                  {["Home", "About", "Services", "Doctors", "Testimonials"].map(
                    (link) => (
                      <div key={link} className="py-2">
                        <a
                          href={`#${link.toLowerCase()}`}
                          onClick={(e) =>
                            handleScrollToSection(e, link.toLowerCase())
                          }
                          className="text-white text-base font-normal font-nunito"
                        >
                          {link}
                        </a>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex-grow flex flex-col gap-4">
                <div className="text-white text-base font-bold font-nunito">
                  Follow Us
                </div>
                <div className="flex flex-col">
                  {[
                    { name: "Facebook", icon: "bi-facebook" },
                    { name: "Instagram", icon: "bi-instagram" },
                    { name: "X", icon: "bi-twitter-x" },
                    { name: "LinkedIn", icon: "bi-linkedin" },
                  ].map((social) => (
                    <div
                      key={social.name}
                      className="py-2 flex items-center gap-3"
                    >
                      <div className="w-6 h-6 relative">
                        <i className={`bi ${social.icon} text-white`}></i>
                      </div>
                      <a
                        href="/"
                        className="text-white text-base font-normal font-nunito"
                      >
                        {social.name}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="flex flex-col gap-8">
            <div className="h-[0.20px] bg-white" />
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <div className="text-white text-base font-normal font-nunito">
                © Somerville Dental Associates, All rights reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};