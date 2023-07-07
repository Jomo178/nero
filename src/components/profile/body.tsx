import {
  forwardRef,
  MouseEventHandler,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";

function ProfileBody() {
  const divRef = useRef<HTMLDivElement>(null);
  const firstItemRefs = useRef<
    Array<MutableRefObject<HTMLParagraphElement | null>>
  >([]);
  const [selectedItem, setSelectedItem] = useState<number>(1);

  let initialPosition: DOMRect | null = null;

  useEffect(() => {
    const element = firstItemRefs.current[0];

    if (element) {
      //@ts-ignore
      initialPosition = element.getBoundingClientRect();
      //@ts-ignore
      const { left, top, width } = initialPosition;

      if (divRef.current) {
        divRef.current.style.left = `${left - 20}px`;
        divRef.current.style.width = `${width - 20}px`;
      }

      console.log("Initial position:", initialPosition);
    }
  }, []);

  const handleMouseEnter: MouseEventHandler<HTMLParagraphElement> = (event) => {
    const element = event.target as HTMLParagraphElement;
    const rect = element.getBoundingClientRect();
    const { left, top, width } = rect;

    if (divRef.current) {
      divRef.current.style.transform = `translateX(${width}px)`;
      divRef.current.style.width = `${width}px`;
    }

    console.log("Element position:", { rect });
  };

  const handleClick: MouseEventHandler<HTMLParagraphElement> = (event) => {
    const element = event.target as HTMLParagraphElement;
    const index = parseInt(element.dataset.index || "");

    setSelectedItem(index);
  };

  return (
    <>
      <section className="mt-82">
        <div className="flex gap-8 mx-8 justify-stretch relative cursor-pointer">
          <ProfileTitle
            text="User Info"
            onMouseEnter={handleMouseEnter}
            onClick={handleClick}
            index={1}
            selected={selectedItem}
            ref={firstItemRefs.current[0]}
          ></ProfileTitle>
          <ProfileTitle
            text="Favourite Cards"
            onMouseEnter={handleMouseEnter}
            onClick={handleClick}
            index={2}
            selected={selectedItem}
            ref={(el) => (el != null ? el : firstItemRefs.current[0])}
          ></ProfileTitle>
          <ProfileTitle
            text="Wishlist"
            onMouseEnter={handleMouseEnter}
            onClick={handleClick}
            index={3}
            selected={selectedItem}
            ref={firstItemRefs.current[2]}
          ></ProfileTitle>

          {/* <div
            ref={divRef}
            style={{ width: "118px", transform: "translateX(0px)" }}
            className="absolute h-1 bottom-0 bg-black transition-all duration-500"
          ></div> */}
        </div>

        <div className="text-black mt-9">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
            iste ratione totam, earum ducimus temporibus nihil inventore
            provident velit dicta facilis tempora explicabo sit veniam eveniet
            ut consectetur magnam quisquam atque minus cum excepturi dolores.
            Tempora
          </p>
        </div>
      </section>
    </>
  );
}

const ProfileTitle = forwardRef<
  HTMLParagraphElement,
  {
    text: string;
    onMouseEnter: MouseEventHandler<HTMLParagraphElement>;
    onClick: MouseEventHandler<HTMLParagraphElement>;
    index: number;
    selected: number;
  }
>(({ text, onMouseEnter, onClick, index, selected }, ref) => {
  return (
    <p
      className={`p-4 ${
        selected === index ? "text-red-500" : ""
      } after:content-[""] after:border-b-4 after:transition-transform after:scale-x-0 after:ease-in-out hover:after:scale-x-100`}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      data-index={index}
      ref={ref}
    >
      {text}
    </p>
  );
});

export default ProfileBody;
