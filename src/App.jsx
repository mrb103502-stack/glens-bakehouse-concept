import { useState } from "react";
import "./App.css";

import glensHero from "./assets/glens-hero.png";
import glensExteriorDay from "./assets/glens-exterior-day.png";
import glensInteriorSeating from "./assets/glens-interior-seating.png";
import glensInteriorCounter from "./assets/glens-interior-counter.png";
import glensAddressSign from "./assets/glens-address-sign.png";

const menuHighlights = [
  {
    category: "BAKEHOUSE",
    title: "Blueberry Cheesecake",
    text: "Creamy, indulgent and made for those slow café moments.",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1400&q=90",
  },
  {
    category: "BREAKFAST",
    title: "Pancakes",
    text: "Soft, comforting and perfect alongside a fresh cup of coffee.",
    image:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=1400&q=90",
  },
  {
    category: "COFFEE",
    title: "Cappuccino",
    text: "A café classic made for mornings, meetings and long conversations.",
    image:
      "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=1400&q=90",
  },
  {
    category: "SAVOURY",
    title: "Freshly Baked Pizza",
    text: "Cheesy, comforting and ideal for sharing with friends.",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1400&q=90",
  },
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openDirections = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=Glens+Bakehouse+Film+Nagar+Hyderabad",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const callBranch = () => {
    window.location.href = "tel:08555804527";
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="glens-site">
      <div className="demo-ribbon">
        UNOFFICIAL WEBSITE CONCEPT • GLEN&apos;S BAKEHOUSE FILM NAGAR
      </div>

      <header className="topbar">
        <a href="#home" className="glens-logo" onClick={closeMobileMenu}>
          <strong>GLEN&apos;S</strong>
          <span>BAKEHOUSE</span>
        </a>

        <nav className="desktop-nav">
          <a href="#menu">Menu</a>
          <a href="#inside">Inside Glen&apos;s</a>
          <a href="#branch">Film Nagar</a>
        </nav>

        <div className="nav-actions">
          <button className="topbar-button" onClick={openDirections}>
            Visit Us
          </button>

          <button
            className={`mobile-menu-button ${
              mobileMenuOpen ? "active" : ""
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <nav className={`mobile-nav ${mobileMenuOpen ? "open" : ""}`}>
          <a href="#menu" onClick={closeMobileMenu}>
            Menu
          </a>

          <a href="#inside" onClick={closeMobileMenu}>
            Inside Glen&apos;s
          </a>

          <a href="#branch" onClick={closeMobileMenu}>
            Film Nagar
          </a>

          <button
            onClick={() => {
              closeMobileMenu();
              openDirections();
            }}
          >
            Get Directions ↗
          </button>
        </nav>
      </header>

      <main>
        <section className="new-hero" id="home">
          <div className="hero-left">
            <p className="tiny-label">FILM NAGAR • HYDERABAD</p>

            <h1>
              Fresh bakes.
              <br />
              Warm spaces.
              <br />
              <em>Good moments.</em>
            </h1>

            <p className="hero-intro">
              A neighbourhood bakehouse for cakes, coffee, comfort food and
              conversations that stay a little longer.
            </p>

            <div className="hero-buttons-new">
              <a href="#menu" className="filled-button">
                Explore the Menu
              </a>

              <button className="text-button" onClick={openDirections}>
                Find Film Nagar ↗
              </button>
            </div>

            <div className="hero-quick-info">
              <div>
                <small>LOCATION</small>
                <strong>Film Nagar</strong>
              </div>

              <div>
                <small>STYLE</small>
                <strong>Bakery • Café</strong>
              </div>

              <div>
                <small>CALL</small>
                <strong>085558 04527</strong>
              </div>
            </div>
          </div>

          <div className="hero-visual-new">
            <img
              src={glensHero}
              alt="Glen's Bakehouse Film Nagar exterior"
            />

            <div className="photo-stamp">
              <span>GLEN&apos;S BAKEHOUSE</span>
              <strong>FILM NAGAR</strong>
            </div>
          </div>
        </section>

        <section className="brand-ticker">
          <span>CAKES</span>
          <b>✦</b>
          <span>COFFEE</span>
          <b>✦</b>
          <span>BREAKFAST</span>
          <b>✦</b>
          <span>PIZZA</span>
          <b>✦</b>
          <span>DESSERTS</span>
        </section>

        <section className="eat-section" id="menu">
          <div className="eat-heading">
            <div>
              <p className="tiny-label red">
                SOMETHING FOR EVERY CRAVING
              </p>

              <h2>
                Sweet.
                <br />
                Savoury.
                <br />
                Everything between.
              </h2>
            </div>

            <p>
              From cakes and coffee to breakfast favourites and savoury
              comfort food, Glen&apos;s has a reason to visit at every hour.
            </p>
          </div>

          <div className="food-showcase">
            {menuHighlights.map((item, index) => (
              <article
                className={`food-tile food-tile-${index + 1}`}
                key={item.title}
              >
                <div className="food-photo-wrap">
                  <img src={item.image} alt={item.title} />
                  <span>0{index + 1}</span>
                </div>

                <div className="food-copy">
                  <small>{item.category}</small>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="menu-tags">
            <span>Cakes</span>
            <span>Pastries</span>
            <span>Breakfast</span>
            <span>Pizza</span>
            <span>Burgers</span>
            <span>Pasta</span>
            <span>Coffee</span>
            <span>Desserts</span>
          </div>
        </section>

        <section className="branch-story" id="inside">
          <div className="branch-photo-large">
            <img
              src={glensInteriorSeating}
              alt="Glen's Bakehouse Film Nagar seating area"
            />

            <div className="branch-photo-caption">
              INSIDE GLEN&apos;S • FILM NAGAR
            </div>
          </div>

          <div className="branch-story-copy">
            <p className="tiny-label red">THE GLEN&apos;S EXPERIENCE</p>

            <h2>
              Warm.
              <br />
              Familiar.
              <br />
              <em>Made to stay.</em>
            </h2>

            <p className="branch-description">
              Arched windows, warm wood, relaxed seating and a comfortable
              café atmosphere give the Film Nagar branch its own inviting
              personality.
            </p>

            <div className="moment-list">
              <div className="moment-item">
                <span>01</span>
                <div>
                  <h4>Relaxed seating</h4>
                  <p>
                    Designed for quick coffee stops and long conversations.
                  </p>
                </div>
              </div>

              <div className="moment-item">
                <span>02</span>
                <div>
                  <h4>Warm interiors</h4>
                  <p>
                    Natural wood, soft lighting and signature arched windows.
                  </p>
                </div>
              </div>

              <div className="moment-item">
                <span>03</span>
                <div>
                  <h4>Neighbourhood feel</h4>
                  <p>
                    A casual place for friends, families and everyday cravings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="night-feature">
          <img
            src={glensInteriorCounter}
            alt="Glen's Bakehouse counter"
          />

          <div className="night-copy">
            <p>FROM THE COUNTER</p>

            <h2>
              Baked,
              <br />
              brewed,
              <br />
              served fresh.
            </h2>

            <a href="#branch">Visit Film Nagar ↓</a>
          </div>
        </section>

        <section className="why-glens">
          <div className="why-title">
            <p className="tiny-label red">WHY PEOPLE STAY</p>

            <h2>
              More than
              <br />
              just a bakery.
            </h2>

            <p className="why-intro">
              From first coffee to late-night cravings, Glen&apos;s brings
              bakery favourites, comfort food and a warm café atmosphere
              together in one place.
            </p>
          </div>

          <div className="why-grid">
            <article>
              <span>01</span>
              <h3>Bakery favourites</h3>
              <p>
                Cakes, cheesecakes, pastries and desserts for both
                celebrations and everyday cravings.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Comfort food</h3>
              <p>
                Breakfast, pizza, pasta and café-style savouries make
                Glen&apos;s more than a dessert stop.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>A place to meet</h3>
              <p>
                A warm neighbourhood setting for coffee dates,
                conversations and casual catch-ups.
              </p>
            </article>
          </div>
        </section>

        <section className="branch-story branch-story-reverse">
          <div className="branch-story-copy">
            <p className="tiny-label red">FILM NAGAR</p>

            <h2>
              Recognizable
              <br />
              from the
              <br />
              <em>first glance.</em>
            </h2>

            <p className="branch-description">
              The cream façade, distinctive arches, illustrated details
              and illuminated Glen&apos;s signage make the Film Nagar
              outlet instantly memorable.
            </p>
          </div>

          <div className="branch-photo-large">
            <img
              src={glensExteriorDay}
              alt="Glen's Bakehouse Film Nagar exterior"
            />
          </div>
        </section>

        <section className="branch-contact" id="branch">
          <div className="contact-label">
            <span>COME SAY HELLO</span>
          </div>

          <div className="contact-main">
            <p className="tiny-label">GLEN&apos;S BAKEHOUSE</p>

            <h2>
              Film Nagar,
              <br />
              Hyderabad.
            </h2>

            <p className="address">
              8-1-299/A/98, Veterinary Colony Road,
              <br />
              Shaikpet, Hyderabad, Telangana 500096
            </p>

            <div className="contact-actions">
              <button
                className="location-primary"
                onClick={openDirections}
              >
                Get Directions
              </button>

              <button
                className="location-secondary"
                onClick={callBranch}
              >
                Call Glen&apos;s
              </button>
            </div>
          </div>

          <div className="contact-side">
            <img
              src={glensAddressSign}
              alt="Glen's Bakehouse Film Nagar address sign"
            />
          </div>
        </section>
      </main>

      <footer className="new-footer">
        <div>
          <strong>GLEN&apos;S</strong>
          <span>BAKEHOUSE</span>
        </div>

        <p>
          Independent redesign concept created for presentation purposes.
          Brand and imagery belong to their respective owners.
        </p>

        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;