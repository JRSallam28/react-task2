import { CiHeart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
import { createRoot } from "react-dom/client";
import { IoIosArrowBack } from "react-icons/io";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import "./index.css";
import img1 from "./assets/Logo.svg";

createRoot(document.getElementById("root")).render(
  <div className="w-full h-dvh overflow-auto flex flex-col" data-theme="light">
    <header className="w-full border-b flex  justify-center">
      <div className="container justify-between flex items-center py-4 px-4 lg:px-0 ">
        <img className="w-16.25" src={img1} />
        <div className="relative hidden lg:flex">
          <input
            type="text"
            placeholder="search"
            className="input pl-12 bg-[#F5F5F5]"
          />
          <CiSearch className="absolute top-3 left-5 " />
        </div>
        <nav className="hidden lg:flex gap-[52px]  ">
          <a className="font-roboto font-medium ">Home</a>
          <a className="font-roboto font-medium ">About</a>
          <a className="font-roboto font-medium ">contact US</a>
          <a className="font-roboto font-medium ">Blog</a>
        </nav>
        <div className="flex gap-7.5 hidden lg:flex">
          <CiHeart />
          <FaShoppingCart />
          <IoPerson />
        </div>
        <CiMenuBurger className="flex lg:hidden" />
      </div>
    </header>
    <section className="w-full flex  justify-center ">
      <div className="container flex flex-col lg:flex-row px-4 lg:px-0 pt-6 lg:pt-10">
        <div className="w-[256px]  pr-8 hidden lg:flex">
          <div className="collapse collapse-arrow bg-white rounded-none">
            <input type="checkbox" defaultChecked />
            <div className="collapse-title font-roboto font-medium border-b-[0.5px] border-[#B5B5B5]">
              Categories
            </div>

            <div className="collapse-content px-0">
              <div className="relative mt-4">
                <input
                  type="text"
                  placeholder="Search"
                  className="input w-full pl-12 bg-[#F5F5F5] border-none rounded-lg"
                />
                <CiSearch className="absolute top-3 left-4 text-[22px] text-[#A7A7A7]" />
              </div>

              <div className="flex flex-col gap-4 mt-5">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span className="font-roboto font-medium text-[14px]">
                    smartphones
                  </span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="checkbox checkbox-sm " />
                  <span className="font-roboto font-medium text-[14px]">
                    laptops
                  </span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="checkbox checkbox-sm " />
                  <span className="font-roboto font-medium text-[14px]">
                    skincare
                  </span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="checkbox checkbox-sm " />
                  <span className="font-roboto font-medium text-[14px]">
                    sunglasses
                  </span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="checkbox checkbox-sm " />
                  <span className="font-roboto font-medium text-[14px]">
                    motorcycle
                  </span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="checkbox checkbox-sm " />
                  <span className="font-roboto font-medium text-[14px]">
                    lighting
                  </span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="checkbox checkbox-sm " />
                  <span className="font-roboto font-medium text-[14px]">
                    furniture
                  </span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="checkbox checkbox-sm " />
                  <span className="font-roboto font-medium text-[14px]">
                    men shirts
                  </span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="checkbox checkbox-sm  " />
                  <span className="font-roboto font-medium text-[14px]">
                    women bags
                  </span>
                </label>
              </div>

              <button className="btn bg-black text-white w-full mt-7 rounded-lg hover:bg-[#333]">
                Apply
              </button>
            </div>
          </div>
        </div>

        <div className="drawer lg:hidden">
          <input
            id="mobile-filters"
            type="checkbox"
            className="drawer-toggle"
          />

          <div className="drawer-content">
            <label
              htmlFor="mobile-filters"
              className="flex h-[56px] w-full cursor-pointer items-center justify-between border border-[#D4D4D4] px-4"
            >
              <span className="font-roboto text-[14px]">Filters</span>
              <HiOutlineAdjustmentsHorizontal className="text-[20px]" />
            </label>
          </div>

          <div className="drawer-side ">
            <label htmlFor="mobile-filters" className="drawer-overlay"></label>

            <div className="flex h-full w-full flex-col bg-white px-4 pt-6 pb-5">
              <div className="flex shrink-0 items-center gap-4">
                <label htmlFor="mobile-filters" className="cursor-pointer">
                  <IoIosArrowBack className="text-[22px]" />
                </label>

                <h2 className="font-roboto text-[24px] font-medium">Filters</h2>
              </div>

              <div className="flex min-h-0 flex-1 flex-col pt-10">
                <div className="collapse collapse-arrow flex min-h-0 flex-1 flex-col rounded-none bg-white">
                  <input type="checkbox" defaultChecked />

                  <div className="collapse-title border-b border-[#B5B5B5] px-0 font-roboto font-medium">
                    Categories
                  </div>

                  <div className="collapse-content min-h-0 flex-1 overflow-y-auto px-0">
                    <div className="relative pt-4">
                      <input
                        type="text"
                        placeholder="Search"
                        className="input w-full rounded-lg border-none bg-[#F5F5F5] pl-12"
                      />
                      <CiSearch className="absolute top-7 left-4 text-[22px] text-[#A7A7A7]" />
                    </div>

                    <div className="flex flex-col gap-4 pt-5">
                      <label className="flex cursor-pointer items-center gap-2">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-xs rounded"
                        />
                        <span className="font-roboto text-[14px] font-medium">
                          smartphones
                        </span>
                      </label>

                      <label className="flex cursor-pointer items-center gap-2">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-xs rounded"
                        />
                        <span className="font-roboto text-[14px] font-medium">
                          smartphones
                        </span>
                      </label>

                      <label className="flex cursor-pointer items-center gap-2">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-xs rounded"
                        />
                        <span className="font-roboto text-[14px] font-medium">
                          smartphones
                        </span>
                      </label>

                      <label className="flex cursor-pointer items-center gap-2">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-xs rounded"
                        />
                        <span className="font-roboto text-[14px] font-medium">
                          smartphones
                        </span>
                      </label>

                      <label className="flex cursor-pointer items-center gap-2">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-xs rounded"
                        />
                        <span className="font-roboto text-[14px] font-medium">
                          smartphones
                        </span>
                      </label>

                      <label className="flex cursor-pointer items-center gap-2">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-xs rounded"
                        />
                        <span className="font-roboto text-[14px] font-medium">
                          smartphones
                        </span>
                      </label>

                      <label className="flex cursor-pointer items-center gap-2">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-xs rounded"
                        />
                        <span className="font-roboto text-[14px] font-medium">
                          smartphones
                        </span>
                      </label>

                      <label className="flex cursor-pointer items-center gap-2">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-xs rounded"
                        />
                        <span className="font-roboto text-[14px] font-medium">
                          smartphones
                        </span>
                      </label>

                      <label className="flex cursor-pointer items-center gap-2">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-xs rounded"
                        />
                        <span className="font-roboto text-[14px] font-medium">
                          smartphones
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" pt-4">
                <label
                  htmlFor="mobile-filters"
                  className="btn h-[48px] w-full cursor-pointer rounded-lg border-black bg-black text-white hover:bg-black"
                >
                  Apply
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full min-w-0 flex-col lg:w-[1024px]">
          <h1 className="font-roboto text-[16px] text-[#6C6C6C]">
            Available Products: <b className="text-black">85</b>
          </h1>

          <div className="grid w-full grid-cols-2 gap-3 pt-4 lg:grid-cols-3 lg:p-3">
            <div className="flex min-w-0 h-[260px] lg:h-[370px] flex-col rounded-xl bg-[#F6F6F6] p-2 lg:p-4">
              <img
                src="Iphone 14 pro 1.png"
                alt="iPhone 14 Pro"
                className="h-[105px] lg:h-[180px] w-full shrink-0 rounded-lg object-cover"
              />

              <div className="flex min-h-0 flex-1 flex-col justify-between pt-2 lg:pt-4">
                <div className="flex flex-col gap-2">
                  <p className="font-roboto text-[12px] lg:text-[16px] font-medium leading-4 lg:leading-6">
                    Apple iPhone 14 Pro 512GB Gold (MQ233)
                  </p>

                  <p className="font-roboto text-[14px] lg:text-[18px] font-semibold">
                    $1437
                  </p>
                </div>

                <button className="btn h-[40px] min-h-0 lg:h-[48px] w-full rounded-lg border-none bg-black text-[12px] lg:text-[14px] font-medium text-white hover:bg-[#333]">
                  Add To Cart
                </button>
              </div>
            </div>
            <div className="flex min-w-0 h-[260px] lg:h-[370px] flex-col rounded-xl bg-[#F6F6F6] p-2 lg:p-4">
              <img
                src="Iphone 14 pro 1.png"
                alt="iPhone 14 Pro"
                className="h-[105px] lg:h-[180px] w-full shrink-0 rounded-lg object-cover"
              />

              <div className="flex min-h-0 flex-1 flex-col justify-between pt-2 lg:pt-4">
                <div className="flex flex-col gap-2">
                  <p className="font-roboto text-[12px] lg:text-[16px] font-medium leading-4 lg:leading-6">
                    Apple iPhone 14 Pro 512GB Gold (MQ233)
                  </p>

                  <p className="font-roboto text-[14px] lg:text-[18px] font-semibold">
                    $1437
                  </p>
                </div>

                <button className="btn h-[40px] min-h-0 lg:h-[48px] w-full rounded-lg border-none bg-black text-[12px] lg:text-[14px] font-medium text-white hover:bg-[#333]">
                  Add To Cart
                </button>
              </div>
            </div>
            <div className="flex min-w-0 h-[260px] lg:h-[370px] flex-col rounded-xl bg-[#F6F6F6] p-2 lg:p-4">
              <img
                src="Iphone 14 pro 1.png"
                alt="iPhone 14 Pro"
                className="h-[105px] lg:h-[180px] w-full shrink-0 rounded-lg object-cover"
              />

              <div className="flex min-h-0 flex-1 flex-col justify-between pt-2 lg:pt-4">
                <div className="flex flex-col gap-2">
                  <p className="font-roboto text-[12px] lg:text-[16px] font-medium leading-4 lg:leading-6">
                    Apple iPhone 14 Pro 512GB Gold (MQ233)
                  </p>

                  <p className="font-roboto text-[14px] lg:text-[18px] font-semibold">
                    $1437
                  </p>
                </div>

                <button className="btn h-[40px] min-h-0 lg:h-[48px] w-full rounded-lg border-none bg-black text-[12px] lg:text-[14px] font-medium text-white hover:bg-[#333]">
                  Add To Cart
                </button>
              </div>
            </div>
            <div className="flex min-w-0 h-[260px] lg:h-[370px] flex-col rounded-xl bg-[#F6F6F6] p-2 lg:p-4">
              <img
                src="Iphone 14 pro 1.png"
                alt="iPhone 14 Pro"
                className="h-[105px] lg:h-[180px] w-full shrink-0 rounded-lg object-cover"
              />

              <div className="flex min-h-0 flex-1 flex-col justify-between pt-2 lg:pt-4">
                <div className="flex flex-col gap-2">
                  <p className="font-roboto text-[12px] lg:text-[16px] font-medium leading-4 lg:leading-6">
                    Apple iPhone 14 Pro 512GB Gold (MQ233)
                  </p>

                  <p className="font-roboto text-[14px] lg:text-[18px] font-semibold">
                    $1437
                  </p>
                </div>

                <button className="btn h-[40px] min-h-0 lg:h-[48px] w-full rounded-lg border-none bg-black text-[12px] lg:text-[14px] font-medium text-white hover:bg-[#333]">
                  Add To Cart
                </button>
              </div>
            </div>
            <div className="flex min-w-0 h-[260px] lg:h-[370px] flex-col rounded-xl bg-[#F6F6F6] p-2 lg:p-4">
              <img
                src="Iphone 14 pro 1.png"
                alt="iPhone 14 Pro"
                className="h-[105px] lg:h-[180px] w-full shrink-0 rounded-lg object-cover"
              />

              <div className="flex min-h-0 flex-1 flex-col justify-between pt-2 lg:pt-4">
                <div className="flex flex-col gap-2">
                  <p className="font-roboto text-[12px] lg:text-[16px] font-medium leading-4 lg:leading-6">
                    Apple iPhone 14 Pro 512GB Gold (MQ233)
                  </p>

                  <p className="font-roboto text-[14px] lg:text-[18px] font-semibold">
                    $1437
                  </p>
                </div>

                <button className="btn h-[40px] min-h-0 lg:h-[48px] w-full rounded-lg border-none bg-black text-[12px] lg:text-[14px] font-medium text-white hover:bg-[#333]">
                  Add To Cart
                </button>
              </div>
            </div>
            <div className="flex min-w-0 h-[260px] lg:h-[370px] flex-col rounded-xl bg-[#F6F6F6] p-2 lg:p-4">
              <img
                src="Iphone 14 pro 1.png"
                alt="iPhone 14 Pro"
                className="h-[105px] lg:h-[180px] w-full shrink-0 rounded-lg object-cover"
              />

              <div className="flex min-h-0 flex-1 flex-col justify-between pt-2 lg:pt-4">
                <div className="flex flex-col gap-2">
                  <p className="font-roboto text-[12px] lg:text-[16px] font-medium leading-4 lg:leading-6">
                    Apple iPhone 14 Pro 512GB Gold (MQ233)
                  </p>

                  <p className="font-roboto text-[14px] lg:text-[18px] font-semibold">
                    $1437
                  </p>
                </div>

                <button className="btn h-[40px] min-h-0 lg:h-[48px] w-full rounded-lg border-none bg-black text-[12px] lg:text-[14px] font-medium text-white hover:bg-[#333]">
                  Add To Cart
                </button>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  </div>,
);
