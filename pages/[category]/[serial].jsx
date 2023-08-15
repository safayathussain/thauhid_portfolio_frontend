import Image from "next/image";
import PulseLoader from "react-spinners/PulseLoader";
import { BsArrowRight, BsArrowLeft, BsStarFill } from "react-icons/bs";
import { IoStarSharp } from "react-icons/io5";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import MainLayout from "../../layouts/MainLayout";
export default function Home() {
  const router = useRouter();
  const category = router.query.category;
  const serial = router.query.serial;
  const [design, setDesign] = useState({});
  const [otherDesign, setOtherDesign] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (category) {
      axios
        .get(`http://localhost:5000/designs/${category}/${serial}`)
        .then((res) => {
          setDesign(res.data);
          axios
            .get(`http://localhost:5000/designs/category/${category}`)
            .then((res) => {
              const designs = [];
              res.data.map((item) => {
                if (design.serial && parseInt(item.serial) !== parseInt(design.serial)) {
                  if (designs.length < 4) {
                    designs.push(item);
                  }
                }
              });
              setOtherDesign(designs);
              setLoading(false);
            });
        });
    }
}, [router.isReady, serial, category, design.serial]);
  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <PulseLoader color="#FBAD3F" />
      </div>
    );
  }
  return (
    <MainLayout>
      {!design ? (
        <div className="flex h-screen w-screen bg-white items-center justify-center">
          <p className="text-3xl text-black text-center">Design not found</p>
        </div>
      ) : (
        <div className="bg-white pt-12">
          <div className="container">
            <div className="mt-12 flex justify-center items-center w-full">
              {/* <button> */}
              {serial !== "1" ? (
                <Link
                  onClick={() => setLoading(true)}
                  href={`/designs/${category}/${parseInt(serial) - 1}`}
                >
                  <BsArrowLeft size={35} />
                </Link>
              ) : (
                <button disabled className="text-gray-400">
                  <BsArrowLeft size={35} />
                </button>
              )}
              {/* </button> */}
              <Image
                src={process.env.NEXT_PUBLIC_IMAGE_URL + design.thumbnail}
                width={700}
                height={700}
                className="h-full px-5 w-[70%] sm:w-[90%] max-w-[700px]"
              />
              {otherDesign.length > parseInt(serial)-1 ? (
                <Link
                  onClick={() => setLoading(true)}
                  href={`/designs/${category}/${parseInt(serial) + 1}`}
                >
                  <BsArrowRight size={35} />
                </Link>
              ) : (
                <button disabled className="text-gray-400">
                  <BsArrowRight size={35} />
                </button>
              )}
            </div>
            <div className="max-w-[740px] mx-auto px-5">
              <p className="font-bold text-[28px] sm:text-[32px] text-black my-4">
                {design.title}
              </p>
              <p className="text-lightGray">{design.description}</p>
              <div className="p-8 small-shadow my-6">
                <p className="font-bold text-xl text-black">Client's Review</p>
                <p className="text-black my-3.5">{design.client_review}</p>
                <div className="flex items-center gap-0.5">
                  <IoStarSharp color="#FFB33E" size={37} />
                  <IoStarSharp color="#FFB33E" size={37} />
                  <IoStarSharp color="#FFB33E" size={37} />
                  <IoStarSharp color="#FFB33E" size={37} />
                  <IoStarSharp color="#FFB33E" size={37} />
                </div>
              </div>
              <div className="flex items-center mt-32">
                <div className="h-[0.1px] bg-[#AFAFAF] w-full"></div>
                <p className="text-2xl font-bold text-center px-5 text-black whitespace-nowrap">
                  Full View
                </p>
                <div className="h-[0.1px] bg-[#AFAFAF] w-full"></div>
              </div>
              <Image
                src={process.env.NEXT_PUBLIC_IMAGE_URL + design.full_image}
                width={740}
                height={740}
                className="h-full mb-24 mt-10"
              />
              {/* view more */}
              {otherDesign.length > 0 && (
                <div className="mb-24">
                  <p className="text-xl font-bold  text-black">View More</p>
                  <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 items-center gap-5 mt-4 max-w-[740px]">
                    {
                        otherDesign.length > 2 ?
                        otherDesign.slice(3).map((item) => (
                            <Link
                            onClick={() => setLoading(true)}
                            href={`/designs/${category}/${item.serial}`}
                            >
                            <Image
                            src={
                                process.env.NEXT_PUBLIC_IMAGE_URL + item.thumbnail
                            }
                            width={234}
                            height={178}
                            className="h-full "
                            />
                            </Link>
                            )): 
                        otherDesign.map((item) => (
                            <Link
                            onClick={() => setLoading(true)}
                            href={`/designs/${category}/${item.serial}`}
                            >
                            <Image
                            src={
                                process.env.NEXT_PUBLIC_IMAGE_URL + item.thumbnail
                            }
                            width={234}
                            height={178}
                            className="h-full "
                            />
                            </Link>
                            ))
                        }
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
}
