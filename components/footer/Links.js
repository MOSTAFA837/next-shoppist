import Link from "next/link";
import styles from "./styles.module.scss";

export default function Links() {
  return (
    <div className={styles.footer__links}>
      {links.map((item, i) => (
        <ul>
          {i === 0 ? (
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSwzn5nQKm9l4lRY5FrGztQf5EcdBB7HRK3g&usqp=CAU"
              alt=""
            />
          ) : (
            <b>{item.heading}</b>
          )}

          {item.links.map((item) => (
            <li>
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}

const links = [
  {
    links: [
      {
        name: "About us",
        link: "",
      },
      {
        name: "Contact us",
        link: "",
      },
      {
        name: "Social Responability",
        link: "",
      },
      {
        name: "Social Responability",
        link: "",
      },
    ],
  },
  {
    heading: "HELP & SUPPORT",
    links: [
      {
        name: "Shopping info",
        link: "",
      },
      {
        name: "Returns",
        link: "",
      },
      {
        name: "How to order",
        link: "",
      },
      {
        name: "How to track",
        link: "",
      },
      {
        name: "Size guide",
        link: "",
      },
    ],
  },
  {
    heading: "Customer Service",
    links: [
      {
        name: "Customer service",
        link: "",
      },
      {
        name: "Terms and Conditions",
        link: "",
      },
      {
        name: "Consumers (Transactions)",
        link: "",
      },
      {
        name: "Take our feedback survey",
        link: "",
      },
    ],
  },
];
