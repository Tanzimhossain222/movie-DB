import Image from "next/image";
import Link from "next/link";

const Sidebar = async ({ dictionary }) => {
  return (
    <>
      <aside>
        <ul className="space-y-2">
          <li>
            <Link
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
              href="#"
            >
              <Image src="/icons/trending.svg" width="24" height="24" alt="" />
              <span>{dictionary.trending} </span>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <Image
                src="/icons/newRelease.svg"
                width="24"
                height="24"
                alt=""
              />
              <span> {dictionary.new_Release} </span>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <Image
                src="/icons/commingSoon.svg"
                width="24"
                height="24"
                alt=""
              />
              <span> {dictionary.coming_Soon} </span>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <Image src="/icons/favourite.svg" width="24" height="24" alt="" />
              <span> {dictionary.favourites} </span>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <Image
                src="/icons/watchLater.svg"
                width="24"
                height="24"
                alt=""
              />
              <span> {dictionary.watch_Later} </span>
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
