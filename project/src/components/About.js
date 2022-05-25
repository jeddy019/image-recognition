import { useGlobalContext } from "../hooks/context";

export default function About() {
  const { onRouteChange } = useGlobalContext();

  return (
    <section className="section about-section">
      <h1 className="section-title">about this app</h1>
      <p>
        Hi, thanks for checking out this App. My name is Jedidiah Akinboyowa and
        I am a Full-Stack Javascript Developer. This Application analyzes your
        images and tells you what's inside of them. When you submit an image
        either by pasting an 'image address' or by uploading an image file, the
        API will return a list of predicted concepts (tags/keywords) with
        corresponding probabilities of how likely it is these predictions are
        contained within the image
      </p>
      <p>
        User Authentication is not yet implemented in this App so{" "}
        <strong>
          you can simply click on "Sign in" without filling any fields and the
          App will route to the Home Page where you can place 'image address' or
          upload any image of your choice (not more than 2MB)
        </strong>
        . Remember to submit your image for analysis by clicking the "ANALYZE"
        button. I also recommend that you use the Navbar and routing buttons for
        navigation and routing to different pages in this app.
      </p>
      <p>
        I created this Application using HTML5, CSS3, Javacript and ReactJS, it
        uses an image recognition API called Clarifai (Clarifai is an artificial
        intelligence company that specializes in computer vision and uses
        machine learning and deep neural networks to identify and analyze images
        and videos), and it's own server using Node-JS and Express-JS
      </p>
      <p>
        Thanks again for checking out this App and I hope you enjoy it! If you
        are looking to get ahold of me, you can send me an email at{" "}
        <a href="mailto:jeddy019@gmail.com">jeddy019@gmail.com</a>
        {"."} You can also find me on my Github page at{" "}
        <a href="https://github.com/jeddy019" target="_blank" rel="noreferrer">
          github.com/jeddy019
        </a>
        {"."}
      </p>
      <button
        onClick={() => onRouteChange("signin")}
        className="start-btn btn btn-primary"
      >
        Get Started!
      </button>
    </section>
  );
}
