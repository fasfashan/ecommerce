export default function Navigation() {
  return (
    <>
      <div className="flex max-w-6xl py-6 border-t border-neutral-300 m-auto px-5 justify-between items-center">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-5">
            <h2 className="font-extrabold uppercase">ECOMMERCE</h2>
            <div className="border px-5 flex items-center border-neutral-300 rounded-full ">
              <input
                className="py-2 focus:outline-none  rounded-full"
                placeholder="Search"
                type="search"
                name=""
                id=""
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g opacity="0.5">
                  <path
                    d="M15.5641 16.3391L10.8016 11.5758C8.683 13.082 5.76364 12.7136 4.08567 10.7282C2.4077 8.7429 2.53091 5.80297 4.36911 3.96498C6.20683 2.12618 9.14705 2.00244 11.1328 3.68032C13.1185 5.3582 13.4871 8.27785 11.9808 10.3966L16.7433 15.16L15.5649 16.3383L15.5641 16.3391ZM7.90411 4.16663C6.32386 4.16628 4.96052 5.27554 4.6395 6.82284C4.31849 8.37014 5.12804 9.9302 6.57801 10.5585C8.02798 11.1868 9.71986 10.7107 10.6293 9.41835C11.5388 8.12604 11.4158 6.37274 10.3349 5.21998L10.8391 5.71998L10.2708 5.15331L10.2608 5.14331C9.63727 4.51596 8.7886 4.16425 7.90411 4.16663Z"
                    fill="#2E3A59"
                  />
                </g>
              </svg>
            </div>
          </div>
          <ul
            className="flex text-sm font-medium gap-10
          "
          >
            <li>All Category</li>
            <li>Gift Cards</li>
            <li>Special Event</li>
          </ul>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:opacity-70">
            <img src="/heart_outline.svg" alt="" />
          </a>
          <a href="#" className="hover:opacity-70">
            <img src="/user.svg" alt="" />
          </a>
          <a href="#" className="hover:opacity-70">
            <img src="/shopping.svg" alt="" />
          </a>
        </div>
      </div>
    </>
  );
}
