export default function Navbar() {
  return (
    <>
      <nav className="max-w-6xl px-5 m-auto py-6 md:flex hidden justify-between">
        <ul className="flex gap-9 font-medium ">
          <li className="opacity-50 hover:opacity-100 text-sm cursor-pointer">
            English
          </li>
          <li className="opacity-50 hover:opacity-100 text-sm cursor-pointer">
            Dollar
          </li>
        </ul>
        <ul className="flex gap-10 font-medium">
          <li className="opacity-50 hover:opacity-100 text-sm cursor-pointer">
            Tracking Package
          </li>
          <li className="opacity-50 hover:opacity-100 text-sm cursor-pointer">
            FAQ
          </li>
          <li className="opacity-50 hover:opacity-100 text-sm cursor-pointer">
            About Us
          </li>
          <li className="opacity-50 hover:opacity-100 text-sm cursor-pointer">
            Contact Us
          </li>
        </ul>
      </nav>
    </>
  );
}
