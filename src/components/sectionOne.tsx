function SectionOne() {
  return (
    <>
      <section className="flex gap-2 justify-between mx-4 items-center min-h-screen">
        <Cards></Cards>
        <div>
          <h3>Nero</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <div>
            <button>Invite</button>
            <button>Join Server</button>
          </div>
        </div>
        <Cards></Cards>
      </section>
    </>
  );
}

function Cards({ image }: { image?: string }) {
  return <div className="bg-white rounded-lg shadow-md p-4 w-44 h-72"></div>;
}

export default SectionOne;
