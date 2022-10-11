import React from "react";
import styles from "../../styles/component-styles/GrabAndGo/BatonGretna.module.css";
import Image from "next/image";
import Link from "next/link";

const BatonGretna = () => {
  const blogInfo = [
    {
      link: "/batonRouge",
      image: "/Baton.jpg",
      heading: "Baton Rouge",
      descOne: "18303 Old Perkins Rd E #409, Baton Rouge, LA 70810",
      descTwo: "See Whats In Our Coolers",
    },
    {
      link: "/gretna",
      image: "/Gretna.jpg",
      heading: "Gretna",
      descOne: "1105 Lafayette St, Gretna, LA 70053",
      descTwo: "See Whats In Our Coolers",
    },
  ];

  return (
    <div className={styles.bigContainer}>
      <div className="flex justify-center py-5">
        <div className="flex flex-wrap justify-center gap-5">
          {blogInfo.map((val, i) => (
            <div
              className="bg-slate-100 text-center p-2 w-80"
              key={i}
              // style={{  }}
            >
                <Link href={val.link}>
                  <img alt="" className="h-80 w-80" src={val.image} />
                </Link>
                <p className="text-xl font-bold">{val.heading}</p>
                <p className="font-semibold">{val.descOne}</p>
                <Link href="/batonRouge">
                  <h5
                    style={{
                      marginTop: "-4px",
                      color: "blue",
                      cursor: "pointer",
                    }}
                    className={styles.subHeading}
                  >
                    {val.descTwo}
                  </h5>
                </Link>
            </div>
          ))}
        </div>

        {/* /////// */}
      </div>
    </div>
  );
};

export default BatonGretna;
