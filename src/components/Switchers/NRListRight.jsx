import React, { act, useState } from "react";
import MyButton from "/Users/mac/Downloads/free-nextjs-admin-dashboard-main/src/components/MyButton.jsx";
import Passport from "/Users/mac/Downloads/free-nextjs-admin-dashboard-main/src/components/Passport.jsx";

export default function NRListRight({ results, selectedIndex }) {
  const [active, setActive] = useState("false");
  const [activeInverse, setActiveInverse] = useState("true");
  const [ct, setCt] = useState(0);

  return (
    <div>
      <div
        className={`${active == true ? "hidden" : ""} f mt-[10px] h-[498px]
    w-[600px] p-5 `}
      >
        <div className="flex w-[400px] gap-4 rounded-xl bg-white p-3">
          <div>
            <div>Nom:</div>
            <div>Prenom:</div>
            <div>CNI ID:</div>
            <div>Expiration date</div>
          </div>

          <div>
            <div className="flex flex-col">
              {`${results[selectedIndex].firstName}`}
            </div>
            <div className="flex flex-col">
              {`${results[selectedIndex].lastName}`}
            </div>
            <div className="flex flex-col">
              {`${results[selectedIndex].cniID}`}
            </div>
            <div className="flex flex-col">
              {`${results[selectedIndex].cniExpirationDate}`}
            </div>
          </div>
        </div>

        <MyButton
          text={"Verify"}
          Oncliked={() => {
            setCt((c) => c + 1);
            console.log("----button is clicked and ct=" + ct);
            if (ct == 0) {
              setActive(true);
              setActiveInverse(false);
              console.log("it is active and ct=" + ct + active);
            } else if (ct == 1) {
              setActive("false");
              setActiveInverse("true");
              setCt(0);
              console.log("it is not active and ct=" + ct + active);
            }
          }}
        />
      </div>

      {/* passport ui */}

      <div
        className={`${activeInverse == true ? "hidden" : ""}  f mt-[10px] h-[498px]
    w-[600px] p-5 `}
      >
        <Passport results={results} selectedIndex={selectedIndex} />

        <div>
          <form className="mt-3 flex max-w-[400px] flex-col gap-2">
            <input
              type="text"
              placeholder="CNI ID Number"
              className="rounded-md px-2 py-1 text-sm
outline-none placeholder:text-sm"
            />

            <input
              type="text"
              placeholder="Expiration date"
              className="rounded-md px-2 py-1 text-sm
outline-none placeholder:text-sm"
            />
          </form>
        </div>

        <div className="flex max-w-[400px] justify-center gap-10 ">
          <MyButton
            text={"back"}
            Oncliked={() => {
              setActive("false");
              setActiveInverse("true");
              setCt(0);
            }}
          />
          <MyButton text={"Continue"} Oncliked={() => {}} />
        </div>
      </div>
    </div>
  );
}
