import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="bg-[#7671DE] py-3 md:py-14 md:h-screen">
      <h1 className="font-extrabold text-4xl mx-10 my-5">
        About Me & Project Inspiration
      </h1>
      <div className=" px-10 py-5 my-3 mx-5 md:mx-14 md:p-6 rounded-2xl md:flex md:flex-row bg-[#ebeafb]">
        <div className="Content md:mx-24">
          <h2 className="font-extrabold my-5 md:my-5">
            📚 Hello, Fellow Book Enthusiasts! Welcome to Glimpse! 📚
          </h2>
          <h2>
            Hello! I'm Sandeep Yadav, a fervent web developer with a deep love
            for books. Ever lost a captivating book recommendation in the chaos
            of screenshots? I did too! That's why I crafted this digital haven
            for fellow book lovers like you and me.
          </h2>
          <br />
          <h2 className="font-extrabold my-5 md:my-5">About Glimpse:</h2>

          <h2>
            As a bookworm, I've snapped countless book recommendations only to
            forget them later. That's why I built a sanctuary—a space for
            enthusiasts like us. Capture, organize, and discover in this
            enchanting literary world!
          </h2>
          <br />
          <h1 className="font-extrabold">Project Highlights:</h1>

          <h1 className="my-2">
            <span className="font-semibold">📖 Digital Bookshelf: </span>
            Create your virtual bookshelf to showcase your reading journey.
          </h1>

          <h1 className="my-2">
            <span className="font-semibold">🔍 Effortless Search: </span>
            Easily search and discover new books to add to your collection.
          </h1>
          <h1 className="my-2">
            <span className="font-semibold">📣 Personal Recommendations:</span>
            Share and receive recommendations from fellow bookworms.
          </h1>

          <h1 className="my-2">
            <span className="font-semibold">🌈 Visual Delight: </span>
            Enjoy a visually appealing and user-friendly interface designed for
            book lovers.
          </h1>
          <br />

          <h1>
            Let's build a community celebrating the joy of reading! Transform
            your digital bookshelf into a portal of endless literary adventures
            with us!
          </h1>
          <h1 className="font-extrabold my-3">Connect with Me:</h1>
          <div className="flex flex-row">
            <h1 className="text-blue-600 font-bold ">
              <Link to="https://linkedin.com/in/sandeep-yadav-027500219">
                LinkedIn
              </Link>
            </h1>
            <h1 className="text-red-600 font-bold mx-10">
              <Link to="sandeepyadav004343@gmail.com">Email</Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
