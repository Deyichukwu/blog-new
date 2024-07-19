import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <>
      {/* <!-- Hero Section  -->  */}
      <section class="hero_section">
        <div class="heroText1">
          <span class="Text1">Every customer conversation</span> <br />
          <span class="Text2">
            <strong> One unified platform</strong>
          </span>
        </div>
        <a href="./explore.html">Explore the Platform</a>
      </section>

      {/* <!-- Image section  -->  */}
      <section class="imageContainer">
        <div class="background1">
          <img
            src="https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2F7m7261i7Il5EAVQmdlDlWb%2F225a2c92689d1d43d37be653fcd131c4%2Fhome--hero-inbox.png?ixlib=gatsbySourceUrl-2.1.3&auto=format%2C%20compress&q=75&dpr=2&w=1946&h=1095&s=6ebf853ceaa69f9c2c6ce6f814695357"
            alt="img1"
          />
        </div>
        <div class="background2">
          <img
            src="https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2F7lIUKJuY5ScOolyJVZsMNc%2F489b3be807ba5dd1019bafdd9559133e%2Fhome--hero-knowledge-base.png?ixlib=gatsbySourceUrl-2.1.3&auto=format%2C%20compress&q=75&dpr=2&w=927&h=522&s=732817b41ac85d6f57960a9e8160b253"
            alt="img2"
          />
        </div>
        <div class="background3">
          <img
            src="https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2F1YP9b1POpVTOhUKkXhVFIv%2F88846d0b64d55aa571bb17b3a44b1153%2Fhome--hero-beacon.png?ixlib=gatsbySourceUrl-2.1.3&auto=format%2C%20compress&q=75&dpr=2&w=512&h=684&s=8687a880a7080fee23d9eec6765339a0"
            alt="img3"
          />
        </div>
      </section>

      {/* <!-- Work Happens Section  -->  */}
      <section class="happensSection">
        <h1>Your best work happens in Help Scout</h1>
        <div class="workHappensWrapper">
          <div class="card1">
            <h5>Delightful</h5>
            <div class="cardHeader">
              <h1>Customer Support</h1>
              <img
                class="customerImage1"
                src="./assets/iconsBlue-right-arrow-32.png"
                alt="right arrow"
              />
            </div>
            <img
              class="card1Image"
              src="https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2F7CHYNMRkAyL8byWw5okrpN%2Fecd9f8bd4513ee159a238aade3aa73ec%2Fhome--use-case-shared-inbox.png?ixlib=gatsbySourceUrl-2.1.3&auto=format%2C%20compress&q=75&w=1570&h=785&s=d5511c1a1546086b175e4592d522de78"
              alt="frontImage"
            />
          </div>
          <div class="card1">
            <h5>Supercharged</h5>
            <div class="cardHeader">
              <h1>Email Management</h1>
              <img
                class="customerImage2"
                src="./assets/iconsgreen-right-arrow-32.png"
                alt="right arrow"
              />
            </div>
            <img
              class="card2Image"
              src="https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2F5MlESOfOeIRup5gi8z2xgW%2F3a8b15cf0a98845088f77e56d900e614%2Fhome--use-case-customer-support.png?ixlib=gatsbySourceUrl-2.1.3&auto=format%2C%20compress&q=75&w=1570&h=785&s=def3df46a77b67d6c22202c71b8ec847"
              alt="frontImage"
            />
          </div>
        </div>
      </section>

      {/* <!-- The Numbers Section  -->  */}
      <section class="numbersSection">
        <h5>The numbers are lookin’ good</h5>
        <div class="numbersWrapper">
          <div class="numberCard">
            <div class="numbersTop">
              <h2>56</h2> <span>%</span>
              <img src="./assets/icons8-arrow-up-50.png" alt="arrow up" />
            </div>
            <p>Respond to 56% more customer messages in the first year.</p>
          </div>
          <div class="numberCard">
            <div class="numbersTop">
              <h2>30</h2> <span>min</span>
              <img src="./assets/icons8-arrow-down-50.png" alt="arrow down" />
            </div>
            <p>
              Decrease your team's response times by an average of 30 minutes.
            </p>
          </div>
          <div class="numberCard">
            <div class="numbersTop">
              <h2>92</h2> <span>%</span>
              <img src="./assets/icons8-arrow-up-50.png" alt="arrow up" />
            </div>
            <p>
              Businesses report increased loyalty by focusing on customer
              service.
            </p>
          </div>
          <div class="numberCard">
            <div class="numbersTop">
              <h2>30</h2> <span>%</span>
              <img src="./assets/icons8-arrow-down-50.png" alt="arrow down" />
            </div>
            <p>Reduce email volume by 30% with self-serve support.</p>
          </div>
        </div>
      </section>

      {/* <!-- Brianne Henderlong Section  -->  */}
      <section class="brianneSection">
        <div class="brianne_wrapper">
          <img
            class="threadless"
            src="https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2F4BSAWqQAulmbgmgBQjiUl1%2Ff55263c42331be8a82f6ba3c137f8367%2Fhome--testimonial-threadless.png?ixlib=gatsbySourceUrl-2.1.3&auto=format%2C%20compress&q=75&w=927&h=927&s=b5b3836928d1b9f380ee1d532c71f248"
            alt="threadless"
          />
          <div class="brianneRight">
            <p>
              "Our team was able to teach themselves Help Scout in a day. It’s
              like using a shared email inbox — just way more robust and better
              looking."
            </p>
            <div class="brianneBottom">
              <img
                class="brianneImage"
                src="https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2F1OrS7a9DIoYZBEeyjvr45c%2Fbb7be6faa499ce76df8a40e669831a9e%2Fhome--testimonial-threadless-brianne.png?ixlib=gatsbySourceUrl-2.1.3&auto=format%2C%20compress&q=75&w=100&h=100&s=7229cfec52d39886bcc79edb99c5591f"
                alt="Brianne"
              />
              <div>
                <h4>Brianne Henderlong</h4>
                <h5>VP of Brand Experience</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Happy to help section  -->  */}
      <section class="happyContainer">
        <h1>Happy to help, every step of the way</h1>
        <div class="happyWrapper1">
          <div class="happyCard1">
            <div class="happytopper">
              <h3>Our people are your people</h3>
              <div class="happyTop1">
                <p>
                  These friendly and knowledgeable folks are here to help answer
                  your questions 24/6 via chat or email.
                </p>
                <a href="#">Meet the team</a>
              </div>
            </div>
            <img
              src="https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2F26nn95AIcRSgIZDZgIL6sf%2F2e7cff954de986d8b309371d777f45cf%2Fhome--our-people.png?ixlib=gatsbySourceUrl-2.1.3&auto=format%2C%20compress&q=75&w=1678&h=930&s=024c19fe29d028b40c4139c132da0122"
              alt="people"
            />
          </div>
          <div class="happyCard2">
            <div class="happyTop2">
              <h3>Support trends, delivered weekly</h3>
              <p>A dose of weekly support news you'll actually want to read.</p>
            </div>
            <img
              src="https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2F3eNdiYtUfcx2ZFjtIlSzKH%2F08d7a102ce51924e1e5dde49af723483%2Fhome--the-supportive.png?ixlib=gatsbySourceUrl-2.1.3&auto=format%2C%20compress&q=75&w=1075&h=1075&s=455bf3dc49b20256c46e0fc374255a99"
              alt="image"
            />
          </div>
        </div>
        <div class="happyWrapper2">
          <div class="happyCard3">
            <div class="happyTop3">
              <h3>Guides, courses, and content (for free)</h3>
              <p>
                Level up your skills with free resources, created for teams just
                like yours.
              </p>
            </div>
            <img
              src="https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2F4SDt5wjjhKgZ7lodJlikrt%2F737972e6f6d5ff55204f915a621de556%2Fhome--resources-guides.png?ixlib=gatsbySourceUrl-2.1.3&auto=format%2C%20compress&q=75&w=1570&h=525&s=249bf4c7015e1c29f1fc781a11daf29e"
              alt="logo"
            />
          </div>
          <div class="happyCard4">
            <div class="happyTop4">
              <h3>Customer-centric inspiration</h3>
              <p>
                A quarterly publication for curious people who want to lead with
                values and grow with grit.
              </p>
            </div>
            <img
              src="https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2F1C6k0zzFltX3y1xt0XMkia%2F0cdb3ee63386fceec7e5041dd526e076%2Fhome--founder-inspiration.png?ixlib=gatsbySourceUrl-2.1.3&auto=format%2C%20compress&q=75&w=1570&h=525&s=a638a7eab19a3b2c15aebecadc7d634b"
              alt="image"
            />
          </div>
        </div>
      </section>

      {/* <!-- businesses delight their customers  -->  */}
      <section class="delightSection">
        <p>
          More than 12,000 businesses delight their customers with Help Scout
        </p>
        <div class="delightImage">
          <img
            src="https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2F370hH5fiu3QhXFwL4BXbui%2F45774fe77cb61f88f638c1c5a9375c20%2FMixmax.svg?ixlib=gatsbySourceUrl-2.1.3&auto=format%2C%20compress&q=75&s=ac5d603e96d1da251804b4665330b641"
            alt="image"
          />
          <img
            src="https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2F76wOHdCdJMz8Qvt564VKVl%2Fe52ae6acbede290c735bd7216eaaaf42%2FSpikeball.svg?ixlib=gatsbySourceUrl-2.1.3&auto=format%2C%20compress&q=75&s=acbabdc355010065253c5f12ccfacbcb"
            alt="iamge"
          />
          <img
            src="https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2Fx4H3NFq73M6QB29akrTrM%2F820049d08a1f09576fad8efa9d2501c9%2FBuffer.svg?ixlib=gatsbySourceUrl-2.1.3&auto=format%2C%20compress&q=75&s=78913ab6ae568e976fb14744e95e7147"
            alt="image"
          />
          <img
            src="https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2F2KnC2IFLTB7RISfZMyKqSF%2Fca60a3e22f99aec529d4c33dfe53385c%2FHoney.svg?ixlib=gatsbySourceUrl-2.1.3&auto=format%2C%20compress&q=75&s=f95a4ec32cdbf1410a8f54dc51b0b1f5"
            alt="image"
          />
          <img
            src="https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2F2XG8uk4leSy8QNoyCbl7yw%2F62082ef4d27ba2551a61608a4a09e347%2FSpindrift.svg?ixlib=gatsbySourceUrl-2.1.3&auto=format%2C%20compress&q=75&s=a2c7459b8ef09d40f357da6c6a19dd1c"
            alt="image"
          />
          <img
            src="https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2F239x4UcKCVhrOCva7GeWEj%2F8c1170aa99d506da87133055728a9e1e%2FCompass.svg?ixlib=gatsbySourceUrl-2.1.3&auto=format%2C%20compress&q=75&s=ec2ae623e9b3027577a91df8bc75e424"
            alt="image"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
