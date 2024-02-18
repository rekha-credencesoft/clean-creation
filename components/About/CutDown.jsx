import React from "react";
// import styles from "../../styles/component-styles/About/CrunchClean.module.css";
import Link from "next/link";

const CutDown = () => {
  return (
    <div className="flex flex-wrap  px-5 ">
        <div className="lg:w-1/4">
          <img src="/small.jpg" alt=""  className="h-64 w-80" />
        </div>
        <div className="lg:w-3/4">
          <p className="text-4xl font-bold text-gray-700">Cut Down on Grocery Shopping and Order À La Carte</p>
          <p>
            We do all of the shopping, preparation, and washing-up so you don’t
            have to, and the journey from our kitchen to your table starts with
            our high-quality ingredients. We know the grocery store can be a
            headache, so we do all the shopping for you, taking the time to
            source fresh ingredients. With Food Creation, Baton Rouge, you never
            have to worry about accidentally buying an overripe avocado or
            letting your berries go bad in the fridge. We hand-select the best
            ingredients available, then we prepare them for you so all you have
            to do is enjoy! À La Carte and save yourself some time!
          </p>
          <Link href="/alacarte">
            <button className=" px-3 py-2 text-xl text-white font-semibold rounded-md" style={{backgroundColor:"#43b3ae"}}>VIEW À LA CARTE MENU</button>
          </Link>
      </div>
    </div>
  );
};

export default CutDown;
