const Banner2 = () => {
  return (
    <div className="mx-10 md:mx-28 my-5 flex flex-col">
      <div className="flex flex-col md:flex-row my-3">
        <div className="md:w-1/2 ">
          <img
            src="https://clickup.com/blog/wp-content/uploads/2020/01/note-taking.png"
            className="rounded-lg"
          ></img>
        </div>
        <div className="md:w-1/2">
          <h1 className="font-bold text-5xl mx-10 md:px-20 py-20 my-3">
            Clipper & <span className="text-[#7671DE] ">New</span> Rich notes
          </h1>
        </div>
      </div>
      <div className="flex flex-col md:flex-row my-3">
        <div className="md:w-1/2 md:px-20 py-10 md:py-20">
          <h1 className="font-bold text-5xl my-3">
            Plan <span className="text-[#7671DE]">your</span> everyday tasks
          </h1>
          <h1 className="font-bold text-2xl">
            Effortlessly organise your daily life and stay on top of tasks
          </h1>
        </div>
        <div className="md:w-1/2 ">
          <img
            src="https://clickup.com/blog/wp-content/uploads/2020/01/note-taking.png"
            className="rounded-lg"
          ></img>
        </div>
      </div>
      <div className="flex flex-col md:flex-row my-3">
        <div className="md:w-1/2">
          <img
            src="https://clickup.com/blog/wp-content/uploads/2020/01/note-taking.png"
            className="rounded-lg"
          ></img>
        </div>
        <div className="md:w-1/2 md:px-20 py-10 md:py-20">
          <h1 className="font-bold text-5xl my-3">
            Capture & <span className="text-[#7671DE]">Organise</span> notes in
            seamless way
          </h1>
          <h1 className="font-bold text-xl">
            Manage your productivity by effortlessly and organizing your ideas
          </h1>
        </div>
      </div>
      <div className="flex flex-col md:flex-row my-3 ">
        <div className="md:w-1/2 md:px-10 py-10 md:py-20 ">
          <h1 className="font-bold text-5xl my-3">
            Turn Notes <span className="text-[#7671DE]">into</span> Action
          </h1>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://clickup.com/blog/wp-content/uploads/2020/01/note-taking.png"
            className="rounded-lg"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
