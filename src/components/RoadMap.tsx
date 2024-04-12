"use client";
import React from "react";
import { FaCircleChevronDown } from "react-icons/fa6";

function RoadMap() {
  const [step, setStep] = React.useState(0);

  return (
    <div className="bg-white flex flex-col items-center justify-center px-[20px] overflow-hidden py-[50px] lg:py-[100px] relative">
      <p className="text-[#081428] mb-[40px] font-[600] font-syne text-[28px] lg:text-[36px] text-center z-20">
        Roadmap
      </p>
      <div className="w-full lg:w-[70%] text-black grid gap-[20px]">
        <div
          className={`${
            step === 1 ? "h-fit " : "h-[70px]"
          } rd1 rounded-[10px] lg:rounded-[12px] transition-all overflow-hidden`}
        >
          <div
            onClick={() => setStep((prev) => (prev === 1 ? 0 : 1))}
            className="h-[70px] p-[10px_20px] flex items-center justify-between cursor-pointer"
          >
            <p className="text-white font-syne text-[18px] leading-[20px] lg:leading-[35px] lg:text-[30px]">
              Phase 1: Development and Beta Testing (3 months)
            </p>
            <FaCircleChevronDown className="text-white text-[30px]" />
          </div>
          <div className="bg-white m-[10px_20px] p-[10px] rounded-[6px] flex flex-col space-y-[10px]">
            <div>
              <p className="font-syne text-[18px] font-[600] text-[#081428]">
                1. Platform Development
              </p>
              <ul className="font-syne list-disc px-[20px]">
                <li>
                  Develop the core features of AlphaXBot, including signal
                  generation, buy/sell options, and user interface.
                </li>
                <li>
                  Integrate onchain analysis and AI algorithms for accurate
                  signal generation.
                </li>
                <li>Ensure compatibility with multiple blockchain networks.</li>
              </ul>
            </div>
            <div>
              <p className="font-syne text-[18px] font-[600] text-[#081428]">
                2. Beta Testing
              </p>
              <ul className="font-syne list-disc px-[20px]">
                <li>
                  Conduct rigorous testing of the platform&apos;s functionality,
                  performance, and security.
                </li>
                <li>
                  Gather feedback from beta testers to identify bugs, usability
                  issues, and areas for improvement.
                </li>
                <li>Iterate on the platform based on beta test results.</li>
              </ul>
            </div>
            <div>
              <p className="font-syne text-[18px] font-[600] text-[#081428]">
                3. Community Building
              </p>
              <ul className="font-syne list-disc px-[20px]">
                <li>
                  Start building an online community through social media
                  channels, forums, and outreach efforts.
                </li>
                <li>
                  Engage with potential users to generate interest and gather
                  feedback on desired features.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className={`${
            step === 2 ? "h-fit " : "h-[70px]"
          } rd2 rounded-[10px] lg:rounded-[12px] transition-all overflow-hidden`}
        >
          <div
            onClick={() => setStep((prev) => (prev === 2 ? 0 : 2))}
            className="h-[70px] p-[10px_20px] flex items-center justify-between cursor-pointer"
          >
            <p className="text-white font-syne text-[18px] leading-[20px] lg:leading-[35px] lg:text-[30px]">
              Phase 2: Launch and Early Adoption (3 months)
            </p>
            <FaCircleChevronDown className="text-white text-[30px]" />
          </div>
          <div className="bg-white m-[10px_20px] p-[10px] rounded-[6px] flex flex-col space-y-[10px]">
            <div>
              <p className="font-syne text-[18px] font-[600] text-[#081428]">
                1. Platform Launch
              </p>
              <ul className="font-syne list-disc px-[20px]">
                <li>
                  Officially launch AlphaXBot to the public with a targeted
                  marketing campaign.
                </li>
                <li>
                  Highlight the platform&apos;s unique features, benefits, and
                  competitive advantages.
                </li>
              </ul>
            </div>
            <div>
              <p className="font-syne text-[18px] font-[600] text-[#081428]">
                2. User Acquisition
              </p>
              <ul className="font-syne list-disc px-[20px]">
                <li>
                  Implement user acquisition strategies to attract traders from
                  various backgrounds and experience levels.
                </li>
                <li>
                  Offer promotional deals or incentives to encourage early
                  adoption and user engagement.
                </li>
              </ul>
            </div>
            <div>
              <p className="font-syne text-[18px] font-[600] text-[#081428]">
                3. User Support and Feedback
              </p>
              <ul className="font-syne list-disc px-[20px]">
                <li>
                  Provide responsive customer support to address user inquiries,
                  issues, and feedback.
                </li>
                <li>
                  Continuously gather user feedback to identify areas for
                  improvement and feature enhancements.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className={`${
            step === 3 ? "h-fit " : "h-[70px]"
          } rd3 rounded-[10px] lg:rounded-[12px] transition-all overflow-hidden`}
        >
          <div
            onClick={() => setStep((prev) => (prev === 3 ? 0 : 3))}
            className="h-[70px] p-[10px_20px] flex items-center justify-between cursor-pointer"
          >
            <p className="text-white font-syne text-[18px] leading-[20px] lg:leading-[35px] lg:text-[30px]">
              Phase 3: Expansion and Optimization (6 months)
            </p>
            <FaCircleChevronDown className="text-white text-[30px]" />
          </div>
          <div className="bg-white m-[10px_20px] p-[10px] rounded-[6px] flex flex-col space-y-[10px]">
            <div>
              <p className="font-syne text-[18px] font-[600] text-[#081428]">
                1. Feature Expansion
              </p>
              <ul className="font-syne list-disc px-[20px]">
                <li>
                  Expand the platform&apos;s feature set based on user feedback
                  and market trends.
                </li>
                <li>
                  Introduce new functionalities such as advanced trading
                  options, portfolio management tools, and analytics.
                </li>
              </ul>
            </div>
            <div>
              <p className="font-syne text-[18px] font-[600] text-[#081428]">
                2. Community Growth
              </p>
              <ul className="font-syne list-disc px-[20px]">
                <li>
                  Scale up community-building efforts to grow the user base and
                  foster a vibrant trading community.
                </li>
                <li>
                  Organize webinars, workshops, and events to educate users and
                  facilitate knowledge sharing
                </li>
              </ul>
            </div>
            <div>
              <p className="font-syne text-[18px] font-[600] text-[#081428]">
                3. Partnerships and Integrations
              </p>
              <ul className="font-syne list-disc px-[20px]">
                <li>
                  Forge partnerships with exchanges, DeFi protocols, and other
                  blockchain projects to enhance interoperability and
                  functionality.
                </li>
                <li>
                  Explore integration opportunities with third-party tools and
                  services to provide added value to users.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className={`${
            step === 4 ? "h-fit " : "h-[70px]"
          } rd4 rounded-[10px] lg:rounded-[12px] transition-all overflow-hidden`}
        >
          <div
            onClick={() => setStep((prev) => (prev === 4 ? 0 : 4))}
            className="h-[70px] p-[10px_20px] flex items-center justify-between cursor-pointer"
          >
            <p className="text-white font-syne text-[18px] leading-[20px] lg:leading-[35px] lg:text-[30px]">
              Phase 4: Scaling and Sustainability (Ongoing)
            </p>
            <FaCircleChevronDown className="text-white text-[30px]" />
          </div>
          <div className="bg-white m-[10px_20px] p-[10px] rounded-[6px] flex flex-col space-y-[10px]">
            <div>
              <p className="font-syne text-[18px] font-[600] text-[#081428]">
                1. Scalability
              </p>
              <ul className="font-syne list-disc px-[20px]">
                <li>
                  Continuously optimize the platform&apos;s infrastructure to
                  handle increasing user traffic and activity.
                </li>
                <li>
                  Monitor performance metrics and implement scalability
                  solutions as needed.
                </li>
              </ul>
            </div>
            <div>
              <p className="font-syne text-[18px] font-[600] text-[#081428]">
                2. Monetization Strategies
              </p>
              <ul className="font-syne list-disc px-[20px]">
                <li>
                  Implement monetization strategies such as subscription plans,
                  premium features, and referral programs.
                </li>
                <li>
                  Explore additional revenue streams such as data licensing and
                  sponsored content.
                </li>
              </ul>
            </div>
            <div>
              <p className="font-syne text-[18px] font-[600] text-[#081428]">
                3. Regulatory Compliance
              </p>
              <ul className="font-syne list-disc px-[20px]">
                <li>
                  Stay updated on regulatory developments and ensure compliance
                  with relevant laws and regulations.
                </li>
                <li>
                  Implement robust security and data protection measures to
                  safeguard user assets and privacy.
                </li>
              </ul>
            </div>
            <div>
              <p className="font-syne text-[18px] font-[600] text-[#081428]">
                4. Continuous Improvement
              </p>
              <ul className="font-syne list-disc px-[20px]">
                <li>
                  Prioritize ongoing development, optimization, and innovation
                  to maintain AlphaXBot&apos;s competitive edge in the market.
                </li>
                <li>
                  Solicit user feedback and conduct market research to inform
                  product roadmap decisions and future iterations.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoadMap;
