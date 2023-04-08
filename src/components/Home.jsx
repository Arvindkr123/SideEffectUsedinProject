import React from "react";
import vg from "../assests/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Tech Star</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
            optio voluptate, totam quis tempore at aliquam molestiae quaerat
            aliquid quidem hic iusto similique odit dicta id magnam minus
            dolores non provident dolor nostrum ratione reprehenderit saepe!
            Vero veniam commodi nemo laudantium asperiores culpa perspiciatis
            nihil sunt quo dolorum minima omnis laborum quidem quos illum ullam,
            voluptatem aperiam odit velit ea. Accusamus doloremque, recusandae
            eveniet quas, voluptate animi ab iste obcaecati et aspernatur
            repellendus adipisci vel ipsum dolorem necessitatibus nisi
            temporibus ea beatae explicabo? A quas eaque voluptates repellendus,
            ducimus animi libero neque necessitatibus ut eveniet voluptatibus
            nesciunt. Odit officiis enim placeat labore et voluptatibus ab
            explicabo id magni cupiditate repellat vitae veritatis consequuntur
            consequatur cumque, quas quis dolores eum saepe animi at! Deserunt
            ipsam consectetur eius nobis ratione doloremque, ullam aut!
            Doloribus, commodi! Quis impedit saepe, excepturi perspiciatis in
            sint. Rem error dolore beatae, neque reprehenderit ratione.
            Laboriosam, voluptas cupiditate?
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
