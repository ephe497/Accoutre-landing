import React, { useEffect } from "react";

export default function Map() {
  return (
    <>
      <div className="map">
        {/* nsjsns */}
        <div className="grid grid-cols-2 bg-[url(/map.png)]  h-[1250px] bg-contain bg-no-repeat bg-center ">
          <div className="flex flex-col-reverse pb-[40%]">
            <div className="w-3/4 mx-auto font-PlusJakataSan">
              Accoutre Africa is a skills marketplace with a social impact
              mission. Our distinctive ecosystem nurtures connections,
              stimulates growth, and empowers MSMEs and skilled professionals.
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </>
  );
}
