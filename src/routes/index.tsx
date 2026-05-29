import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: DieSasieLanding,
})

const SVG_TRAIN = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="3" width="16" height="13" rx="2"/>
    <path d="M4 11h16M12 3v8M8 19l-2 2M16 19l2 2M8 19h8"/>
    <circle cx="8" cy="19" r="1" fill="currentColor" stroke="none"/>
    <circle cx="16" cy="19" r="1" fill="currentColor" stroke="none"/>
  </svg>
)

const SVG_CLOCK = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9"/>
    <polyline points="12 7 12 12 15 15"/>
  </svg>
)

const SVG_MAP = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
    <circle cx="12" cy="9" r="2.5"/>
  </svg>
)

const SVG_PHONE = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.92 1.18 2 2 0 012.92 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
  </svg>
)

const SVG_MAIL = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22 6 12 13 2 6"/>
  </svg>
)

type MenuEntry = {
  name: string
  desc: string
  price: string
  isHeading?: boolean
}

const menuData: Record<string, MenuEntry[]> = {
  breakfast: [
    { name: 'Arrivals Breakfast', desc: '', price: '', isHeading: true },
    { name: 'Pap Breakfast', desc: 'Mieliepap with milk & condensed milk', price: 'R40' },
    { name: 'Budget Breakfast', desc: '1 Egg, 1 bacon, tomato, roosterkoek', price: 'R35' },
    { name: 'Light Breakfast', desc: '1 Egg, 2 bacon, tomato, roosterkoek with chips', price: 'R50' },
    { name: 'Full Breakfast', desc: '2 Eggs, 2 bacon, tomato, mushrooms, cheese griller, roosterkoek with chips', price: 'R105' },
    { name: 'Waiting Area Roosterkoek', desc: '(Add Chips R19.90)', price: '', isHeading: true },
    { name: 'Cheese', desc: 'Melted cheese', price: 'R40' },
    { name: 'Cheese & Tomato', desc: 'Melted cheese & fresh tomato', price: 'R45' },
    { name: 'Ham, Cheese & Tomato', desc: 'Ham, melted cheese & tomato', price: 'R50' },
    { name: 'Chicken Mayo', desc: 'Shredded chicken & mayo', price: 'R55' },
  ],
  starters: [
    { name: 'Lighter Side Starters', desc: '', price: '', isHeading: true },
    { name: 'Jalapeno Poppers', desc: 'Cream cheese filled, fried until crispy, with sweet chili sauce', price: 'R90' },
    { name: 'Peri-Peri Chicken Livers', desc: 'Pan-fried livers, with a slice of toast', price: 'R70' },
    { name: 'Pot Pie with Chips', desc: 'Pie, chips & gravy — ask your waiter for pie of the day', price: 'R80' },
    { name: 'Chicken Strips with Chips', desc: 'Chicken strips, chips with creamy garlic mayo', price: 'R90' },
    { name: 'Crumbed Mushrooms', desc: 'Crumbed mushrooms with creamy garlic mayo', price: 'R80' },
    { name: 'The Snack Car Baskets', desc: '', price: '', isHeading: true },
    { name: 'Meaty Basket', desc: 'Ribs, russians, boerewors, steak strips with chips', price: 'R140' },
    { name: 'Vegetarian Basket', desc: 'Crumbed mushrooms, vegetable spring rolls, cheese & corn samoosa with chips', price: 'R120' },
    { name: 'Chicken Basket', desc: 'Chicken strips, crumbed mozzarella sticks, spring rolls with chips', price: 'R120' },
    { name: 'Fresh & Grilled Salads', desc: '', price: '', isHeading: true },
    { name: 'Greek Salad', desc: 'Feta, olives, tomato, cucumber, onion, mixed greens with salad dressing', price: 'R90' },
    { name: 'Chicken Salad', desc: 'Grilled chicken, mixed greens, tomato, cucumber, feta with salad dressing', price: 'R100' },
    { name: 'Steak Salad', desc: 'Grilled steak strips, mixed greens, tomato, feta, cucumber with salad dressing', price: 'R110' },
  ],
  mains: [
    { name: 'All Aboard Mains', desc: 'Served with choice of chips, salad or veg', price: '', isHeading: true },
    { name: 'Chicken Schnitzel', desc: 'Crumbed, fried, with choice of side', price: 'R120' },
    { name: 'Chicken Burger', desc: 'Grilled or fried chicken breast, lettuce, tomato, mayo with choice of side', price: 'R125' },
    { name: 'Beef Burger', desc: 'Beef patty, lettuce, tomato, onion, mayo with choice of side', price: 'R125' },
    { name: 'Ribs', desc: 'BBQ slow-cooked 500g pork ribs with coleslaw and chips', price: 'R160' },
    { name: 'Steak (200g)', desc: 'Grilled rump with choice of side — add sauce (cheese/peppercorn/mushroom) R25', price: 'R170' },
    { name: 'Steak (300g)', desc: 'Grilled rump with choice of side — add sauce (cheese/peppercorn/mushroom) R25', price: 'R200' },
    { name: 'Beef Curry', desc: 'Beef curry, served with rice or bread bowl', price: 'R180' },
    { name: 'Butter Chicken Curry', desc: 'Butter chicken, served with rice or bread bowl', price: 'R135' },
    { name: 'Tiny Travellers Kiddies', desc: '', price: '', isHeading: true },
    { name: 'Toasted Sandwich', desc: 'Cheese and ham, with chips', price: 'R35' },
    { name: 'Chicken Strips', desc: 'Crumbed, fried, with chips and tomato sauce', price: 'R60' },
    { name: 'Mini Pizza', desc: 'Cheese & tomato or ham cheese', price: 'R50' },
    { name: 'Departures Dessert', desc: '', price: '', isHeading: true },
    { name: 'Chocolate Brownie', desc: 'Warm, fudgy, with whipped cream or ice cream', price: 'R70' },
    { name: 'Malva Pudding', desc: 'Traditional SA classic, with custard & whipped cream or ice cream', price: 'R70' },
    { name: 'Peppermint Crisp Tart', desc: 'Layers of peppermint chocolate heaven, with cream', price: 'R65' },
    { name: 'Koeksisters', desc: '3 koeksisters baked with cream', price: 'R55' },
  ],
  pizza: [
    { name: 'Wood Fired Pizzas', desc: '', price: '', isHeading: true },
    { name: 'Focaccia', desc: 'Garlic and feta', price: 'R65' },
    { name: 'Margherita', desc: 'Tomato base, mozzarella', price: 'R85' },
    { name: 'Cream Cheese', desc: 'Cream cheese, caramelised onion, bacon, mozzarella', price: 'R100' },
    { name: 'Sweet Chili Chicken Mayo', desc: 'Grilled chicken, sweet chili mayo, peppers, mozzarella', price: 'R120' },
    { name: 'Hawaiian', desc: 'Ham, pineapple, mozzarella', price: 'R120' },
    { name: 'Vegetarian Special', desc: 'Mushrooms, feta, peppers, olives, mozzarella', price: 'R130' },
    { name: 'Bacon, Avo & Feta', desc: 'Bacon, fresh avo, crumbled feta, mozzarella', price: 'R140' },
    { name: 'Meat Lovers', desc: 'Ham, bacon, steak, mozzarella', price: 'R160' },
  ],
  drinks: [
    { name: 'Steam Station Hot Drinks', desc: '', price: '', isHeading: true },
    { name: 'Stasie Coffee', desc: 'Traditional filter coffee, with condensed milk', price: 'R35' },
    { name: 'Filter Coffee', desc: 'Filter coffee', price: 'R30' },
    { name: 'Cappuccino', desc: 'Rich, frothy', price: 'R35' },
    { name: 'Café Latté', desc: 'Smooth & creamy', price: 'R38' },
    { name: 'Five Roses Tea', desc: 'Classic South African tea', price: 'R25' },
    { name: 'Rooibos Tea', desc: 'Caffeine-free, naturally sweet', price: 'R25' },
    { name: 'Hot Chocolate', desc: 'Rich & creamy, with marshmallows', price: 'R40' },
    { name: 'Ice Coffee', desc: 'Cubed ice, espresso with milk', price: 'R45' },
    { name: 'Creamy Milkshakes', desc: '', price: '', isHeading: true },
    { name: 'Milo', desc: '', price: 'R45' },
    { name: 'Bar One', desc: '', price: 'R45' },
    { name: 'Chocolate', desc: '', price: 'R40' },
    { name: 'Strawberry', desc: '', price: 'R40' },
    { name: 'Lime', desc: '', price: 'R40' },
    { name: 'Banana', desc: '', price: 'R40' },
    { name: 'Bubblegum', desc: '', price: 'R40' },
    { name: 'Cold Car Cold Drinks', desc: '', price: '', isHeading: true },
    { name: 'Coke / Coke Zero', desc: '', price: 'R25' },
    { name: 'Sprite / Sprite Zero', desc: '', price: 'R25' },
    { name: 'Cream Soda / Fanta Orange / Sparberry', desc: '', price: 'R25' },
    { name: 'Pink Tonic / Indian Tonic / Dry Lemon', desc: '', price: 'R20' },
    { name: 'Still Water / Sparkling Water', desc: '', price: 'R20' },
    { name: 'Appletiser / Grapetiser', desc: '', price: 'R35' },
    { name: 'Tomato Cocktail', desc: '', price: 'R30' },
    { name: 'Red Bull', desc: '', price: 'R40' },
    { name: 'Red Bull Zero Sugar', desc: '', price: 'R40' },
  ],
  bar: [
    { name: 'On Tap', desc: '', price: '', isHeading: true },
    { name: 'Glenhoff Lager', desc: '350ml / 500ml', price: 'R40 / R50' },
    { name: 'Loxtonia Cider', desc: '350ml / 500ml', price: 'R45 / R60' },
    { name: 'Glenhoff Gin', desc: '350ml / 500ml', price: 'R50 / R70' },
    { name: 'R&R', desc: '350ml / 500ml', price: 'R50 / R70' },
    { name: 'Bergie Brannewyn', desc: '350ml / 500ml', price: 'R50 / R70' },
    { name: 'Bottles — Beers', desc: '', price: '', isHeading: true },
    { name: 'Castle Lite / Black Label', desc: '', price: 'R35' },
    { name: 'Amstel / Corona / Corona 0.0 / Guinness', desc: '', price: 'R40' },
    { name: 'Windhoek Draught / Windhoek Lager', desc: '', price: 'R45' },
    { name: 'Bottles — Ciders', desc: '', price: '', isHeading: true },
    { name: 'Savanna Dry / Light / 0.0 / Neat', desc: '', price: 'R40' },
    { name: 'Carribbean Twist / Flying Fish Lemon / Hunters Gold', desc: '', price: 'R40' },
    { name: 'Amstel Radler / Belgravia Gin', desc: '', price: 'R40' },
    { name: 'Red Square Silver', desc: '', price: 'R45' },
    { name: 'The Wagon Wines', desc: '', price: '', isHeading: true },
    { name: '1412 Railway Reserve Red Blend', desc: 'Glass / Bottle', price: 'R55 / R160' },
    { name: 'Breeland Pinotage / Cabernet Sauvignon', desc: 'Bottle', price: 'R190' },
    { name: 'Alto Rouge', desc: 'Bottle', price: 'R210' },
    { name: '1412 Railway Reserve Sauvignon Blanc', desc: 'Glass / Bottle', price: 'R55 / R160' },
    { name: 'Breeland Sauvignon Blanc / Chenin Blanc', desc: 'Bottle', price: 'R180' },
    { name: 'Breeland Chardonnay', desc: 'Bottle', price: 'R190' },
    { name: 'Breeland Perle Moscato', desc: 'Glass / Bottle', price: 'R60 / R170' },
    { name: 'Durbanville Hills Merlot Rosé', desc: 'Bottle', price: 'R190' },
    { name: 'JC Le Roux', desc: 'Sparkling — Can', price: 'R35' },
    { name: 'Cocktails', desc: '', price: '', isHeading: true },
    { name: 'Strawberry Daiquiri / Margarita / Cosmopolitan', desc: '', price: 'R70' },
    { name: 'Piña Colada', desc: '', price: 'R70' },
    { name: 'Sex on the Beach', desc: '', price: 'R75' },
    { name: 'Long Island Iced Tea', desc: '', price: 'R80' },
    { name: 'Spirits Station', desc: '', price: '', isHeading: true },
    { name: 'Whiskey', desc: 'VAT 69 R20 · Bells/J&B R22 · Johnny Walker Red R25 · Jameson/Jack Daniels R30 · JW Black R40', price: '' },
    { name: 'Brandy', desc: 'Olof Bergh/Buffelsfontein R20 · Richelieu R25 · Klipdrift Premium R30', price: '' },
    { name: 'Rum', desc: 'Spiced Gold/Captain Morgan/Malibu/Bacardi R25', price: '' },
    { name: 'Vodka', desc: 'Red Square/Smirnoff 1818 R20', price: '' },
    { name: 'Gin', desc: "Stretton's Gin R20", price: '' },
    { name: 'Cordials', desc: 'Lime/Passion Fruit/Kola Tonic R20', price: '' },
    { name: 'Shooters', desc: 'Libido/Apple Sour/Cactus Jack/Sambuca/Caramel Vodka/Amarula R20 · Tequila Gold/Silver/Jägermeister R25', price: '' },
  ],
}

const specials = [
  {
    day: 'Monday',
    name: 'Pizza Monday',
    desc: 'Buy one pizza and get the second one at half price.',
    price: 'BOGO ½ Off',
  },
  {
    day: 'Tuesday',
    name: 'Rib Tuesday',
    desc: '500g Ribs served with chips, coleslaw, and a Glenhoff Draught or glass of wine.',
    price: 'R180',
  },
  {
    day: 'Wednesday',
    name: 'Schnitzel Wednesday',
    desc: 'Chicken Schnitzel with sauce and a side of your choice, served with a glass of wine.',
    price: 'R140',
  },
  {
    day: "Thursday — Pensioners'",
    name: "Pensioners' Special",
    desc: 'Light breakfast with a cappuccino.',
    price: 'R50',
  },
  {
    day: 'Thursday',
    name: 'Double Burger Thursday',
    desc: 'Any two burgers.',
    price: 'R210',
  },
  {
    day: 'Friday',
    name: 'Steak Friday',
    desc: '200g Steak with a glass of wine or Glenhoff Draught on tap.',
    price: 'R190',
  },
]

const hours = [
  { day: 'Monday', time: '09:00 – 22:00' },
  { day: 'Tuesday', time: '09:00 – 22:00' },
  { day: 'Wednesday', time: '09:00 – 22:00' },
  { day: 'Thursday', time: '09:00 – 22:00' },
  { day: 'Friday', time: '09:00 – 22:00' },
  { day: 'Saturday', time: '09:00 – 22:00' },
  { day: 'Sunday', time: 'Closed' },
]

type MenuTab = 'breakfast' | 'starters' | 'mains' | 'pizza' | 'drinks' | 'bar'

const TAB_LABELS: Record<MenuTab, string> = {
  breakfast: 'Breakfast',
  starters: 'Starters',
  mains: 'Mains',
  pizza: 'Pizza',
  drinks: 'Drinks',
  bar: 'Bar',
}

export default function DieSasieLanding() {
  const [activeTab, setActiveTab] = useState<MenuTab>('mains')

  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div className="nav-logo">
          <img src="/assets/logo.png" alt="Die Stasie Logo" />
          <div>
            <div className="nav-logo-text">Die Stasie</div>
            <div className="nav-logo-sub">Hartenbos</div>
          </div>
        </div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#specials">Specials</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#hours">Hours</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a className="nav-reserve" href="#contact">Find Us</a>
        <button className="nav-hamburger" aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-tag">Established in Hartenbos</div>
          <h1 className="hero-title">Die <span>Stasie</span></h1>
          <div className="hero-subtitle">Hartenbos</div>
          <p className="hero-desc">
            Where the rails meet good food and cold drinks. A railway-inspired gathering place for locals and travellers — great meals, craft beers on tap, and a warm South African welcome.
          </p>
          <div className="hero-actions">
            <a href="#menu" className="btn-primary">View Menu</a>
            <a href="#specials" className="btn-secondary">Weekly Specials</a>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="hero-scroll-line" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about">
        <div className="about-inner">
          <div className="about-images">
            <img
              className="about-img-main"
              src="/assets/bar-interior.jpg"
              alt="Die Stasie bar interior with golden pendant lights"
            />
          </div>
          <div className="about-content">
            <div className="section-tag">Our Story</div>
            <h2 className="section-title">
              Where the <em>Journey</em> Begins
            </h2>
            <p className="about-text">
              Inspired by the golden age of steam and the spirit of South African railway travel, Die Stasie is more than a restaurant — it's a destination. Nestled at the Old Railway Station in Hartenbos on the Garden Route, we've created a space that celebrates the warmth, community, and character of a classic station stop.
            </p>
            <p className="about-text">
              From the timber-topped bar wrapped in glowing green light, to the vintage railway lanterns and the iconic locomotive art, every corner of Die Stasie tells a story. Come for the food, stay for the atmosphere.
            </p>
            <div className="about-stats">
              <div className="stat">
                <div className="stat-number">6</div>
                <div className="stat-label">Drinks on Tap</div>
              </div>
              <div className="stat">
                <div className="stat-number">50+</div>
                <div className="stat-label">Menu Items</div>
              </div>
              <div className="stat">
                <div className="stat-number">100%</div>
                <div className="stat-label">South African Soul</div>
              </div>
              <div className="stat">
                <div className="stat-number">Mon–Sat</div>
                <div className="stat-label">Days Open</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIALS */}
      <section id="specials" className="specials">
        <div className="specials-header">
          <div className="section-tag" style={{ color: 'var(--gold)' }}>Weekly</div>
          <h2 className="section-title" style={{ color: 'var(--cream)' }}>
            Station <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Specials</em>
          </h2>
        </div>
        <div className="specials-grid">
          {specials.map((s) => (
            <div key={s.day} className="special-card">
              <div className="special-day">{s.day}</div>
              <div className="special-name">{s.name}</div>
              <div className="special-desc">{s.desc}</div>
              <div className="special-price">{s.price}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="menu">
        <div className="menu-header">
          <div className="section-tag">From the Kitchen</div>
          <h2 className="section-title">
            The <em>Menu</em>
          </h2>
        </div>
        <div className="menu-tabs">
          {(Object.keys(TAB_LABELS) as MenuTab[]).map((tab) => (
            <button
              key={tab}
              className={`menu-tab${activeTab === tab ? ' active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {TAB_LABELS[tab]}
            </button>
          ))}
        </div>
        {(Object.keys(TAB_LABELS) as MenuTab[]).map((tab) => (
          <div key={tab} className={`menu-category${activeTab === tab ? ' active' : ''}`}>
            <div className="menu-items">
              {menuData[tab].map((item, i) =>
                item.isHeading ? (
                  <div key={i} className="menu-section-heading">{item.name}{item.desc ? ` — ${item.desc}` : ''}</div>
                ) : (
                  <div key={item.name + i} className="menu-item">
                    <div className="menu-item-info">
                      <div className="menu-item-name">{item.name}</div>
                      {item.desc && <div className="menu-item-desc">{item.desc}</div>}
                    </div>
                    {item.price && <div className="menu-item-price">{item.price}</div>}
                  </div>
                )
              )}
            </div>
          </div>
        ))}
      </section>

      {/* HOURS */}
      <section id="hours" className="hours">
        <div className="hours-inner">
          <div className="hours-content">
            <div className="section-tag">We're Open</div>
            <h2 className="section-title">Trading Hours</h2>
            <div className="hours-table">
              {hours.map((h) => (
                <div key={h.day} className="hours-row">
                  <span className="hours-day">{h.day}</span>
                  <span className="hours-time">{h.time}</span>
                </div>
              ))}
            </div>
            <div className="hours-note">
              <p>
                Kitchen closes 45 minutes before closing time. Hours may vary on public holidays — check our Facebook page for updates. Walk-ins welcome; reservations recommended for groups of 8 or more.
              </p>
            </div>
          </div>
          <div className="hours-image">
            <img src="/assets/bar-taps.jpg" alt="Die Stasie bar with craft beer taps" />
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <div className="gallery" aria-label="Restaurant photos">
        <div className="gallery-item">
          <img src="/assets/bar-full.jpg" alt="Die Stasie full bar view" />
        </div>
        <div className="gallery-item">
          <img src="/assets/food-schnitzel.jpg" alt="Chicken schnitzel with mushroom sauce and chips" />
        </div>
        <div className="gallery-item">
          <img src="/assets/bar-taps.jpg" alt="Craft beer taps at the bar" />
        </div>
        <div className="gallery-item">
          <img src="/assets/food-steak.jpg" alt="Grilled steak with chips and Glenhoff craft beer" />
        </div>
        <div className="gallery-item">
          <img src="/assets/food-breakfast.jpg" alt="Full breakfast with coffee" />
        </div>
      </div>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <div className="contact-inner">
          <div className="contact-info">
            <div className="section-tag">Get in Touch</div>
            <h2 className="section-title">Find the Station</h2>
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">{SVG_MAP}</div>
                <div className="contact-item-content">
                  <div className="contact-item-label">Address</div>
                  <div className="contact-item-value">
                    Old Railway Station<br />
                    Port Natal Avenue, Hartenbos<br />
                    6520, South Africa
                  </div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">{SVG_PHONE}</div>
                <div className="contact-item-content">
                  <div className="contact-item-label">Phone</div>
                  <div className="contact-item-value">
                    <a href="tel:+27723950146">+27 72 395 0146</a>
                  </div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">{SVG_MAIL}</div>
                <div className="contact-item-content">
                  <div className="contact-item-label">Email</div>
                  <div className="contact-item-value">
                    <a href="mailto:admin@diestasiehartenbos.co.za">admin@diestasiehartenbos.co.za</a>
                  </div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">{SVG_CLOCK}</div>
                <div className="contact-item-content">
                  <div className="contact-item-label">Trading Hours</div>
                  <div className="contact-item-value">
                    Mon – Saturday: 09:00 – 22:00<br />
                    Sunday: Closed
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-social">
              <a href="https://www.facebook.com/diestasiehartenbos" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Facebook">FB</a>
              <a href="https://www.instagram.com/diestasiehartenbos/" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Instagram">IG</a>
              <a href="https://wa.me/27723950146" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="WhatsApp">WA</a>
            </div>
          </div>
          <div className="contact-map">
            <div className="map-placeholder">
              <iframe
                title="Die Stasie Hartenbos location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6605.224487822245!2d22.106022982998784!3d-34.13067533552635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dd66995c8ce0e5f%3A0xe008f4af2eb49df2!2sDie%20Stasie%20Hartenbos!5e0!3m2!1sen!2sza!4v1779967842924!5m2!1sen!2sza"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-logo">
          <img src="/assets/logo.png" alt="Die Stasie logo" />
          <div className="footer-brand">
            Die Stasie
            <span>Hartenbos</span>
          </div>
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} Die Stasie Hartenbos. All rights reserved.
          <span className="footer-credit"> | Website designed by <a href="https://minocreative.co.za/" target="_blank" rel="noopener noreferrer">Mino Creative</a></span>
        </p>
        <ul className="footer-links">
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#specials">Specials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </footer>
    </>
  )
}
