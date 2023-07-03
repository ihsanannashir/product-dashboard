import Link from "next/link";
import { useRouter } from "next/router";

export default function Sidebar() {
  const router = useRouter();
  const SIDEBAR_MENU = [
    { name: "Products", label: "/" },
    { name: "Carts", label: "/carts" },
  ];

  return (
    <>
      <section className="bg-white border w-full md:w-72 px-4">
        <nav>
          <ul>
            {SIDEBAR_MENU.map((item, idx) => {
              return (
                <li className="m-2" key={idx}>
                  <Link
                    href={item.label}
                    className={`flex p-2 border rounded hover:bg-gray-100 cursor-pointer ${
                      router.asPath === item.label && "bg-gray-100"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </section>
    </>
  );
}
