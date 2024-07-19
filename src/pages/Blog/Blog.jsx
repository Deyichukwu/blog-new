import React, { useEffect, useState } from "react";
import "./Blog.css";
import { customerService } from "../../Utils/blogData";
import { growthCulture } from "../../Utils/blogData";
import { insideHelp, mostRecent } from "../../Utils/blogData";
import Loader from "../../components/Loader/Loader";
const Blog = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const { products } = await res.json();

        setProducts(products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, []);
  return (
    <>
      {/* <!-- Nav2 Section  -->  */}
      <section class="nav2_container">
        <div class="nav2_wrapper">
          <div class="Nav2_content">
            <a href="#">Latest Articles</a>
            <a href="#">Customer Service</a>
            <a href="#">Growth and Culture</a>
            <a href="#">Inside Help Scout</a>
            <a href="#">Support Toolkit</a>
          </div>
          <div>
            <img src="./assets/icons8-search-50 (2).png" alt="Search" />
          </div>
        </div>
      </section>

      {/* <!-- The Help Scout Blog Section  -->  */}
      <section class="BlogHero_container">
        <div class="blogHero_wrapper">
          <div class="blogHero_writeup">
            <h1>The Help Scout Blog</h1>
            <p>
              Get tips and advice on delivering exceptional customer service,
              engaging and delighting your customers, and building a
              customer-centric company.
            </p>
          </div>
          <div class="blogHero_anchor">
            <a href="#">Customer Service</a>
            <a href="#">Growth & Culture</a>
            <a href="#">Inside Help Scout</a>
            <a href="#">Support Toolkit</a>
          </div>
        </div>
      </section>

      {/* <!-- Most Recent Post Section  -->  */}
      <section class="mostRecent_container">
        <div class="mostRecent_Title">
          <div>
            <h2>Most Recent Posts</h2>
          </div>
          <div>
            <a href="#">View All Post</a>
            <img src="./assets/greaterBlue.png" alt="More" />
          </div>
        </div>
        <div class="mostRecentGrid_wrapper">
          <div class="mostRecentCard_1">
            <img src={mostRecent[0].image} alt="image" />
            <span>Inside Help Scout</span>
            <h3>{mostRecent[0].title}</h3>
            <p>{mostRecent[0].description}</p>
            {/* <img
              src="https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2F5HX9oWC5gaZYnD1UFqBNAu%2F7d9d98f0682e5b66a7b693af17599a45%2FHSL__an_intuitive_way_to_represent_color_in_CSS.png?ixlib=gatsbySourceUrl-2.1.3&auto=format%2C%20compress&q=75&w=1247&h=702&s=e06088d80409894025d978da31b235ba"
              alt="image"
            />
            <span>Inside Help Scout</span>
            <h3>HSL: An Intuitive Way to Represent Color in CSS</h3>
            <p>
              When writing CSS, the most common formats we use for expressing a
              color are either a hex code or an RGB value. But are they the best
              way? Learn to see color as an artist with HSL.
            </p> */}
          </div>
          <div class="mostRecent_row">
            <div class="mostRecentCard_2">
              <img src={mostRecent[1].image} alt="" />
              <h5>{mostRecent[1].title}</h5>
              <h3>{mostRecent[1].description}</h3>
              {/* <img
                src="https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2F3XZTq0TnRIOkjx816MitfQ%2Fb3dd4193525f05c9cbd5a7179260c44c%2FHow_To_Use_Generative_AI_in_Customer_Support-c.png?ixlib=gatsbySourceUrl-2.1.3&auto=format%2C%20compress&q=75&w=1247&h=702&s=0613bcf2378bf853971061affc405d9d"
                alt="image"
              />
              <h5>Customer Service</h5>
              <h3>How To Use Generative AI in Customer Support</h3>*/}
            </div>
            <br />
            <div class="mostRecentCard_2">
              <img
                src="https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2F2P6MRk8t8h8RPZnoh30IWE%2F489f4e8ea20079b47e877fd5f931a6cf%2FChatbot_vs_Conversational_AI.jpg?ixlib=gatsbySourceUrl-2.1.3&auto=format%2C%20compress&q=75&w=1247&h=702&s=0cc0f79d72f785b73f20c5c5297a2691"
                alt="image"
              />
              <h5>Customer Service</h5>
              <h3>
                Chatbots vs. Conversational AI: Understanding the Difference
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Our Best Content Section  -->  */}
      <section class="bestContent_section">
        <div class="bestContent_Wrapper">
          <div class="bestContent_left">
            <h1>Get our best content in your inbox</h1>
            <p>
              All the tips, stories, and resources you could ever need or want —
              straight to your email!
            </p>
          </div>
          <div class="bestContent_rightWrapper">
            <div class="bestContent_input">
              <div class="bestContent_checkbox">
                <input type="checkbox" name="supportive_week" id="select" />
                <h3>The Supportive Weekly</h3>
              </div>
              <p>For the customer service obsessed</p>
              <div class="bestContent_checkbox">
                <input type="checkbox" name="in_the_Works" id="select" />
                <h3>In the Works</h3>
              </div>
              <p>For founders and growing companies</p>
            </div>
            <div class="bestContent_subscribe">
              <input
                type="email"
                name="Email"
                id="Email"
                placeholder="Email Address"
              />
              <br />
              <button>Subscribe</button>
              <h6>
                Your privacy matters! Help Scout only uses this info to send
                content and updates. You may unsubscribe anytime. View our
                <a href="#">privacy policy</a> for more.
              </h6>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Discover the Latest Section  -->  */}
      <section class="discoverLatest_section">
        <h1>Discover the latest in...</h1>
        <div class="discoverSection_Title">
          <div>
            <h2>Customer Service</h2>
          </div>
          <div className="rightDiscover">
            <a href="#">View All Post</a>
            <img src="/rightBlue.png" alt="More" />
          </div>
        </div>
        <div class="discoverSection_wrapper">
          {customerService.map((blogItem) => {
            return (
              <div key={blogItem.id}>
                <img src={blogItem.image} alt="img" />
                <p>{blogItem.title}</p>
                <h3>{blogItem.description}</h3>
              </div>
            );
          })}
          {/* <div>
            <img
              src="https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2F4xgzdCWVyDYlm8EFtPWRNX%2F4815cd57bd3c422058c389cf14b40571%2FCustomer_Service_Automation.png?ixlib=gatsbySourceUrl-2.1.3&auto=format%2C%20compress&q=75&w=1247&h=702&s=94c81df4c4a55f4a99322c3c7c6cf9d9"
              alt="img"
            />
            <p>Customer Service</p>
            <h3>Improve Experience with Customer Service Automation</h3>
          </div>
           */}
        </div>
        {/* <!-- Growth & Culture  --> */}
        <div class="discoverSection_Title">
          <div>
            <h2>Growth & Culture</h2>
          </div>
          <div className="rightDiscover">
            <a href="#">View All Post</a>
            <img src="/rightBlue.png" alt="More" />
          </div>
        </div>
        <div class="discoverSection_wrapper">
          {growthCulture.map((blogItem) => {
            return (
              <div key={blogItem.id}>
                <img src={blogItem.image} alt="img" />
                <p>{blogItem.title}</p>
                <h3>{blogItem.description}</h3>
              </div>
            );
          })}
          {/* <div>
            <img
              src="https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2F1F1iv6LycTKHbeyXufsqrn%2Fe428e7b3d3a93f91c11ef7c225c60369%2FAI_as_a_Service_-_Ariel_Davis.jpg?ixlib=gatsbySourceUrl-2.1.3&auto=format%2C%20compress&q=75&w=1247&h=702&s=7310eeee4de05fada65e6f90df9de3a3"
              alt="img"
            />
            <p>Growth & Culture</p>
            <h3>
              A Beginner’s Guide to Unlocking the Power of AI as a Service
              (AIaaS)
            </h3>
          </div> */}
          {/* <div>
            <img
              src="https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2F5TTxmUP3lnKQ0OJERl9sBS%2Fefa5a48b4b787d12eb8274da3147a5e1%2FCustomer_Driven__The_Meaning_Behind_Customer-Centric_Strategies.png?ixlib=gatsbySourceUrl-2.1.3&auto=format%2C%20compress&q=75&w=1247&h=702&s=99fda2f33705dda29feb4f18c536811f"
              alt="img"
            />
            <p>Growth & Culture</p>
            <h3>
              Customer Driven: The Meaning Behind Customer-Centric Strategies
            </h3>
          </div>
          <div>
            <img
              src="https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2F6UuJJzQkHk3zvBsJYk1Ebh%2F6422ec42fdee5646287029b9cc2934bf%2FCS_Survey_Qs.png?ixlib=gatsbySourceUrl-2.1.3&auto=format%2C%20compress&q=75&w=1247&h=702&s=a89c6b1870728043d8ed36543577521f"
              alt="img"
            />
            <p>Growth & Culture</p>
            <h3>
              22 Impactful Customer Service Survey Questions to Ask in 2024
            </h3>
          </div> */}
        </div>
        {/* <!-- Inside Help Scout  -->  */}
        <div class="discoverSection_Title">
          <div>
            <h2>Inside Help Scout</h2>
          </div>
          <div className="rightDiscover">
            <a href="#">View Product</a>
            <img src="/rightBlue.png" alt="More" />
          </div>
        </div>
        <div class="discoverSection_wrapper">
          {insideHelp.map((blogItem) => {
            return (
              <div key={blogItem.id}>
                <img src={blogItem.image} alt="img" />
                <p>{blogItem.title}</p>
                <h3>{blogItem.description}</h3>
              </div>
            );
          })}
          {/* <div>
            <img
              src="https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2F5HX9oWC5gaZYnD1UFqBNAu%2F7d9d98f0682e5b66a7b693af17599a45%2FHSL__an_intuitive_way_to_represent_color_in_CSS.png?ixlib=gatsbySourceUrl-2.1.3&auto=format%2C%20compress&q=75&w=1247&h=702&s=e06088d80409894025d978da31b235ba"
              alt="img"
            />
            <p>Inside Help Scout</p>
            <h3>HSL: An Intuitive Way to Represent Color in CSS</h3>
          </div>
          <div>
            <img
              src="https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2F76xsa7vpqneXKlQmd7kinB%2F0e43662230f54342dcc68d65c2900860%2FHelp_Scout_Works_Best_When.png?ixlib=gatsbySourceUrl-2.1.3&auto=format%2C%20compress&q=75&w=1247&h=702&s=499ab7f7208c02318e19daadb8bd9054"
              alt="img"
            />
            <p>Inside Help Scout</p>
            <h3>Help Scout Works Best When</h3>
          </div>
          <div>
            <img
              src="https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2F2r9KpsoGVpryiNY4jNcR0S%2F61cfddec27d5f52896af746b41126e0e%2FAI_Thought_Leadership_-_Blog.png?ixlib=gatsbySourceUrl-2.1.3&auto=format%2C%20compress&q=75&w=1247&h=702&s=ea590f0b777e0c5227ec7607485d3901"
              alt="img"
            />
            <p>Inside Help Scout</p>
            <h3>Delivering More Customer Delight, Not More AI Hype</h3>
          </div> */}
        </div>

        {/* Ali Express Cart   */}
        <div class="discoverSection_Title">
          <div>
            <h2>Shop Now..</h2>
          </div>
          <div className="rightDiscover">
            <a href="#">View All Post</a>
            <img src="/rightBlue.png" alt="More" />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {products.length <= 0 && <Loader />}
        </div>
        <div class="discoverSection_wrapper">
          {products?.slice(0, 3)?.map((productItem) => {
            return (
              <div>
                <img src={productItem?.images} alt="img" />
                <p>{productItem?.title}</p>
                <h3>${productItem?.price}</h3>
                <span style={{ fontSize: "13px" }}>
                  {productItem?.description?.slice(0, 40)}
                </span>
                <button>Buy</button>
              </div>
            );
          })}
          {/* <div>
            <img
              src="https://th.bing.com/th/id/OIP.ef2M5mFJjgPqS4a87ggx3QAAAA?rs=1&pid=ImgDetMain"
              alt="img"
            />
            <p>Aliexpress - Clothes</p>
            <h3>
              4 Tips for Reinventing Your Personal Style as You Get Older,
              Stylists Say
            </h3>
            <button className="addCart">Add to cart+</button>
          </div>
          <div>
            <img
              src="https://th.bing.com/th/id/OIP.svpzoZmkPt0CtczTd3kQ2QHaHa?rs=1&pid=ImgDetMain"
              alt="img"
            />
            <p>Aliexpress - Duvets</p>
            <h3>Premier Inn Luxury Duvets - Premier Inn at home</h3>
            <button className="addCart">Add to cart+</button>
          </div>
          <div>
            <img
              src="https://i.pinimg.com/736x/33/3e/27/333e2783a809be439fa02f2bc95caf61.jpg"
              alt="img"
            />
            <p>Aliexpress - Handbags</p>
            <h3>Best Luxury Handbag Brands In Indianapolis | semashow.com</h3>
            <button className="addCart">Add to cart+</button>
          </div> */}
        </div>
      </section>

      {/* <!-- Support Toolkit Section  -->  */}
      <section class="toolKit_section">
        <div class="toolKit_wrapper">
          <h1>Explore the Support Toolkit</h1>
          <p>
            Grow your skills and teams with our collection of free resources,
            guides and courses.
          </p>
          <button>Check it out</button>
        </div>
      </section>

      {/* <!-- Get started with Help Scout Section  -->  */}
      <section class="getStarted_section">
        <div class="getStarted_wrapper">
          <h1>Get started with Help Scout</h1>
          <p>
            Want to learn what Help Scout can do for you? See for yourself with
            a free trial — we'll happily extend you if you need more time.
          </p>
          <button>Free 15-day Trial</button>
        </div>
      </section>
    </>
  );
};

export default Blog;
