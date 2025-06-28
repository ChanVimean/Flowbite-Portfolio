import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa";

const resources = [
  { text: "React JS", link: "#" },
  { text: "Tailwindcss", link: "#" },
  { text: "Flowbite", link: "#" },
  { text: "React Icons", link: "#" },
];

const follows = [
  { title: "Github", link: "#" },
  { title: "Discord", link: "#" },
];

const others = [
  { title: "Privacy Policy", link: "#" },
  { title: "Terms & Conditions", link: "#" },
];

const socialMedia = [
  { icon: <FaFacebook />, link: "" },
  { icon: <FaGithub />, link: "" },
  { icon: <FaInstagram />, link: "" },
  { icon: <FaTelegram />, link: "" },
  { icon: <FaLinkedin />, link: "" },
];

const Footer = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        {/* Top */}
        <section className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 me-3"
                alt="FlowBite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Portfolio
              </span>
            </a>
          </div>

          <article className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <aside>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                {resources.map((resource, index) => (
                  <li key={index} className="mb-4">
                    <a href={resource.link} className="hover:underline">
                      {resource.text}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
            <aside>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                {follows.map((follow, index) => (
                  <li key={index} className="mb-4">
                    <a href={follow.link} className="hover:underline ">
                      {follow.title}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
            <aside>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                {others.map((other, index) => (
                  <li key={index} className="mb-4">
                    <a href={other.link} className="hover:underline">
                      {other.title}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
          </article>
        </section>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        {/* Bottom */}
        <section className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025{" "}
            <a
              href="https://flowbite.com/"
              className="hover:underline font-semibold text-blue-400"
            >
              Rok Rak™
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex mt-4 sm:justify-center sm:mt-0 space-x-2">
            {socialMedia.map((social, index) => (
              <li
                key={index}
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <span className="text-2xl">{social.icon}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Footer;
