import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useState } from "react";

function ProfileBody() {
  return (
    <>
      <section className="mt-82">
        <div className="flex gap-8 justify-center pt-8">
          <p className="p-4 rounded-md">User Info</p>
          <p className="p-4 rounded-md">Favourite Cards</p>
          <p className="p-4 rounded-md">Wishlist</p>
        </div>
        <div className="text-black mt-9">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
            iste ratione totam, earum ducimus temporibus nihil inventore
            provident velit dicta facilis tempora explicabo sit veniam eveniet
            ut consectetur magnam quisquam atque minus cum excepturi dolores.
            Tempora, ut doloribus. Incidunt, laborum.
          </p>
        </div>
      </section>
    </>
  );
}

export default ProfileBody;
