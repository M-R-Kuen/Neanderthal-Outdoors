"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useAuth } from "@/context/AuthContext";
import Cookies from "js-cookie";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { Navbar, Collapse, Button, IconButton } from "@material-tailwind/react";
import { useCart } from "@/context/CartContext";
import { fetchProducts } from "@/lib/server/fetchProducts";
import { ProductCardProps } from "@/types/products/productTypes";

export function StickyNavbar() {
  const [openNav, setOpenNav] = useState(false);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { token, setToken, user, getEmail, isLogged } = useAuth();
  const pathname = usePathname();
  const { cart, saveCartForUser, clearCart } = useCart();
  const [initial, setInitial] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  useEffect(() => {
    if (user && user.name) {
      const username = user.name;
      setInitial(username.charAt(0).toUpperCase());
    }
  }, [user]);

  const navItems = [
    { href: "/home", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/store", label: "Store" },
    { href: "/contact", label: "Contact" },
  ];

  const logOutHandler = () => {
    saveCartForUser(getEmail());
    localStorage.removeItem("userToken");
    setToken("");
    localStorage.removeItem("userData");
    Cookies.remove("cookieToken");
    clearCart();
    onClose();
    window.location.href = "/login";
  };

  const handleClickSearchInput = () => {
    setIsSearchOpen(true);
  };

  const handleCloseSearchInput = () => {
    setIsSearchOpen(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  };

  console.log(searchTerm);
  const handleSearchSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const products = await fetchProducts();
    console.log(products);
    const filteredProduct = products.find((product: ProductCardProps) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (!filteredProduct) {
      alert("No product found");
    } else {
      router.push(`/store/${filteredProduct.id}`);
    }
  };

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {navItems.map((item) => (
        <li
          key={item.href}
          className={`p-1 text-white font-suisse uppercase ${
            pathname === item.href
              ? "border-b-2 border-yellow-500 rounded-md"
              : ""
          }`}
        >
          <a href={item.href} className="flex items-center decoration-none">
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <Navbar className="sticky top-0 h-max max-w-full rounded-b-3xl px-4 py-2 lg:px-8 lg:py-4 shadow-lg z-50 bg-black bg-opacity-40 border-none">
        <div className="flex items-center justify-between">
          <div className="flex items-center ">
            <Link href="/">
              <Image
                src="/images/sapienscircle.png"
                width={128}
                height={128}
                alt="logo"
                className="w-[3rem] h-[3rem] md:w-1/2 md:h-auto"
              />
            </Link>
          </div>
          <div className="hidden lg:flex items-center gap-8">
            <div className="mr-4">{navList}</div>
            {isSearchOpen ? (
              <div className="flex">
                <form
                  className="flex items-center"
                  onSubmit={handleSearchSubmit}
                >
                  <input
                    type="search"
                    placeholder="Search"
                    className="bg-transparent border-2 border-white rounded-lg p-2 font-suisse"
                    onChange={handleInputChange}
                  ></input>
                </form>
                <button onClick={handleCloseSearchInput}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="20"
                    height="20"
                    viewBox="0,0,256,256"
                    className=" "
                  >
                    <g
                      fill="#ffffff"
                      fillRule="nonzero"
                      stroke="none"
                      strokeWidth="1"
                      strokeLinecap="butt"
                      strokeLinejoin="miter"
                      strokeMiterlimit="10"
                      strokeDasharray=""
                      strokeDashoffset="0"
                    >
                      <g transform="scale(8.53333,8.53333)">
                        <path d="M7,4c-0.25587,0 -0.51203,0.09747 -0.70703,0.29297l-2,2c-0.391,0.391 -0.391,1.02406 0,1.41406l7.29297,7.29297l-7.29297,7.29297c-0.391,0.391 -0.391,1.02406 0,1.41406l2,2c0.391,0.391 1.02406,0.391 1.41406,0l7.29297,-7.29297l7.29297,7.29297c0.39,0.391 1.02406,0.391 1.41406,0l2,-2c0.391,-0.391 0.391,-1.02406 0,-1.41406l-7.29297,-7.29297l7.29297,-7.29297c0.391,-0.39 0.391,-1.02406 0,-1.41406l-2,-2c-0.391,-0.391 -1.02406,-0.391 -1.41406,0l-7.29297,7.29297l-7.29297,-7.29297c-0.1955,-0.1955 -0.45116,-0.29297 -0.70703,-0.29297z"></path>
                      </g>
                    </g>
                  </svg>
                </button>
              </div>
            ) : (
              <>
                <button type="button" onClick={handleClickSearchInput}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0,0,256,256"
                  >
                    <g
                      fill="#ffffff"
                      fillRule="nonzero"
                      stroke="none"
                      strokeWidth="1"
                      strokeLinecap="butt"
                      strokeLinejoin="miter"
                      strokeMiterlimit="10"
                      strokeDasharray=""
                      strokeDashoffset="0"
                    >
                      <g transform="scale(5.12,5.12)">
                        <path d="M21,3c-9.39844,0 -17,7.60156 -17,17c0,9.39844 7.60156,17 17,17c3.35547,0 6.46094,-0.98437 9.09375,-2.65625l12.28125,12.28125l4.25,-4.25l-12.125,-12.09375c2.17969,-2.85937 3.5,-6.40234 3.5,-10.28125c0,-9.39844 -7.60156,-17 -17,-17zM21,7c7.19922,0 13,5.80078 13,13c0,7.19922 -5.80078,13 -13,13c-7.19922,0 -13,-5.80078 -13,-13c0,-7.19922 5.80078,-13 13,-13z"></path>
                      </g>
                    </g>
                  </svg>
                </button>
              </>
            )}

            <div className="flex items-center gap-x-2">
              {isLogged ? (
                <>
                  <Link href="/cart">
                    <div className="relative">
                      <FaCartShopping className="w-6 h-6" />
                      {cart.length > 0 && (
                        <span className="absolute top-5 right-0 bg-red-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                          {cart.length}
                        </span>
                      )}
                    </div>
                  </Link>
                  <Link href="/profile-dashboard">
                    <span className="bg-transparent border-2 border-white text-white rounded-full p-2 text-md w-10 h-10 flex items-center justify-center">
                      {initial}
                    </span>
                  </Link>
                  <Button
                    variant="gradient"
                    size="md"
                    className="hidden lg:inline-block whitespace-nowrap font-suisse"
                    onClick={onOpen}
                  >
                    <span>Logout</span>
                  </Button>
                </>
              ) : (
                <>
                  <Link href="/cart">
                    <FaCartShopping className="w-6 h-6" />
                  </Link>
                  <Link href="/login">
                    <Button
                      variant="text"
                      size="lg"
                      color="white"
                      className="hidden lg:inline-block whitespace-nowrap uppercase font-suisse"
                    >
                      <span>Login</span>
                    </Button>
                  </Link>
                  <Link href="/login/register">
                    <Button
                      variant="gradient"
                      size="md"
                      className="hidden lg:inline-block whitespace-nowrap font-suisse"
                    >
                      <span>Sign up</span>
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                width={6}
                height={6}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                width={6}
                height={6}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <div className="flex flex-col items-center justify-center gap-4 mt-4">
            {navList}
            <div className="flex w-full flex-col items-center gap-x-1 mt-4">
              {!isLogged ? (
                <>
                  <Link href="/login">
                    <Button fullWidth={false} variant="text" size="md">
                      <span>Log In</span>
                    </Button>
                  </Link>
                  <Link href="/login/register">
                    <Button fullWidth={false} variant="gradient" size="md">
                      <span>Sign Up</span>
                    </Button>
                  </Link>
                </>
              ) : (
                <div className="flex flex-row justtify-between gap-x-6">
                  <Link href="/cart">
                    <div className="relative">
                      <FaCartShopping className="w-6 h-6" />
                      {cart.length > 0 && (
                        <span className="absolute top-5 right-0 bg-red-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs ">
                          {cart.length}
                        </span>
                      )}
                    </div>
                  </Link>
                  <Link href="/profile-dashboard">
                    <span className="bg-transparent border-2 border-white text-white rounded-full   text-md w-10 h-10 flex items-center justify-center">
                      {initial}
                    </span>
                  </Link>
                  <Button
                    variant="gradient"
                    size="md"
                    className="lg:inline-block whitespace-nowrap font-SFUIDisplay-Heavy"
                    onClick={onOpen}
                  >
                    <span>Logout</span>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </Collapse>
      </Navbar>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        placement="center"
        className="glass-background"
      >
        <ModalContent className="bg-white p-4 rounded-md shadow-md w-1/2 m-auto">
          <ModalHeader>Confirm Logout</ModalHeader>
          <ModalBody>Are you sure you want to logout?</ModalBody>
          <ModalFooter>
            <Button color="red" onClick={logOutHandler}>
              Confirm
            </Button>
            <Button color="green" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default StickyNavbar;
