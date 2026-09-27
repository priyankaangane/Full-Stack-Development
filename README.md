<div align="center">

# 🌐 Full-Stack Web Development
### My Learning Journey — From First `<h1>` to Interactive Games

A structured, project-based record of learning full-stack web development — one day, one concept, one project at a time.

![Days](https://img.shields.io/badge/Days-30-4C9F70?style=for-the-badge)
![Projects](https://img.shields.io/badge/Projects-14-4C9F70?style=for-the-badge)
![Stage](https://img.shields.io/badge/Stage-Frontend%20Complete-C8862F?style=for-the-badge)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=flat-square&logo=bootstrap&logoColor=white)
![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=flat-square&logo=jquery&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=flat-square&logo=github&logoColor=white)

</div>

---

### 📖 About This Repository

This repo tracks my path through a structured, project-based full-stack course — covering how the web works under the hood, frontend fundamentals (HTML, CSS, JavaScript, jQuery), and eventually backend development, databases, APIs, authentication, and deployment. Every phase below ends in something built and shipped, not just notes.

<br>

## 🧭 Table of Contents

- [📊 Progress at a Glance](#progress-at-a-glance)
- [🎨 Featured Projects](#featured-projects)
- [🗓️ Learning Timeline](#learning-timeline)
  - [Day 1–3 · Internet Fundamentals & HTML Basics](#day-1-3)
  - [Day 4–14 · CSS: Styling, Layout & Bootstrap](#day-4-14)
  - [Day 15–23 · JavaScript Fundamentals](#day-15-23)
  - [Day 24–28 · DOM Manipulation & Advanced JavaScript](#day-24-28)
  - [Day 29–30 · jQuery](#day-29-30)
- [🛠️ All Projects](#all-projects)
- [🧭 What's Next](#whats-next)

<br>

<a name="progress-at-a-glance"></a>
## 📊 Progress at a Glance

<div align="center">

| 🗓️ Days | 🛠️ Projects | 🎯 Core Focus | 📍 Current Stage |
|:---:|:---:|:---:|:---:|
| **30** | **14** | HTML · CSS · JavaScript · jQuery | Frontend complete → moving into Backend |

</div>

<br>

<a name="featured-projects"></a>
## 🎨 Featured Projects

The two most complete builds so far — where earlier fundamentals come together into something genuinely interactive.

<table>
<tr>
<td width="50%" valign="top">

### 🎲 Dice Game
**Showcase — DOM Manipulation & Intermediate JavaScript**

A two-player dice-rolling game. Every click generates two fresh random rolls, updates both dice images live, and declares a winner on the spot.

**Built with:**
- `Math.random()` + `Math.floor()` for valid random rolls
- `document.querySelector()` for targeted DOM selection
- `setAttribute()` to swap dice images dynamically
- Conditional logic to compare rolls & declare a winner
- `window.onload` to auto-run on page load

🔗 *Live demo — add your link here*

</td>
<td width="50%" valign="top">

### 🎮 Simon Game
**Showcase — Advanced JavaScript & jQuery**

A full memory/pattern game: the sequence grows each round, sound and colour confirm every step, and one wrong move ends it — with a restart ready to go.

**Built with:**
- jQuery for DOM manipulation & event handling
- Arrays to build and extend the growing sequence
- Real-time comparison of user input vs. sequence
- Sound + CSS animation feedback on every interaction
- Full game-state management: start → play → game over → restart

🔗 *Live demo — add your link here*

</td>
</tr>
</table>

<br>

<a name="learning-timeline"></a>
## 🗓️ Learning Timeline

Each phase below is collapsed by default — click any one to expand the full breakdown of topics, exercises, and projects.

<br>

<a name="day-1-3"></a>
<details>
<summary><strong>📅 Day 1 – 3 &nbsp;·&nbsp; Internet Fundamentals & HTML Basics</strong> &nbsp; ✅</summary>

<br>

⏱️ **Duration:** ~11 hours &nbsp;·&nbsp; 🛠️ **Projects:** Movie Ranking, Birthday Invitation, Personal Portfolio

#### 📘 Topics Covered

| Category | Concepts Learned |
|-----------|-------------------|
| Internet Basics | How the internet works, client–server communication |
| Web Fundamentals | How websites load and render in a browser |
| HTML Introduction | Purpose of HTML, how browsers parse markup |
| Document Structure | Anatomy of an HTML document |
| Text Elements | Headings, paragraphs, self-closing tags |
| Lists | Ordered, unordered, and nested lists |
| Media | Embedding images, working with file paths |
| Links | Anchor elements, internal & external navigation |
| Boilerplate | Standard HTML skeleton for every project |
| Deployment | Hosting static websites with GitHub Pages |

#### 🏋️ Exercises

`🟢` Headings & paragraphs &nbsp;·&nbsp; `🟢` Ordered/unordered lists &nbsp;·&nbsp; `🟡` Nested lists &nbsp;·&nbsp; `🟡` Movie Ranking &nbsp;·&nbsp; `🟡` Birthday Invitation &nbsp;·&nbsp; `🔴` Personal Portfolio

#### 🛠️ Projects Built

| Project | Description | Skills Used |
|---------|-------------|--------------|
| Movie Ranking | First structured HTML page ranking favourite movies | Headings, Paragraphs, Ordered Lists |
| Birthday Invitation | Invitation page combining lists, images, and links | Media Embedding, Anchor Elements |
| Personal Portfolio | Multi-page personal portfolio site | Boilerplate, Navigation, File Paths |

#### 💡 Key Takeaways
- How data travels between clients and servers
- Core structure & syntax of an HTML document
- Relative vs. absolute file paths for linking assets and pages
- Deploying a static site live with GitHub Pages

</details>

<br>

<a name="day-4-14"></a>
<details>
<summary><strong>📅 Day 4 – 14 &nbsp;·&nbsp; CSS: Styling, Layout & Bootstrap</strong> &nbsp; ✅</summary>

<br>

🛠️ **Projects:** Online Resume, Colour Vocab Website, Motivational Poster, CSS Flag, Web Design Agency Website, Pricing Table, Mondrian Painting, TinDog Startup Website

#### 📘 Topics Covered

| Category | Concepts Learned |
|-----------|-------------------|
| Adding CSS | Inline, internal, and external stylesheets |
| Selectors | Element, class, ID, attribute, and universal selectors |
| The Cascade | Specificity, inheritance, rule priority |
| Colour & Typography | Hex colours, `px`/`pt`/`em`/`rem`, `font-weight`, font fallbacks |
| Box Model | `border`, `padding`, `margin`, `border-radius` |
| Combining Selectors | Group, child (`>`), descendant, chaining selectors |
| Positioning | `static`, `relative`, `absolute`, `fixed`, `z-index` |
| Display & Float | `block`, `inline`, `inline-block`, `float`, `clear` |
| Responsive Design | Media queries, breakpoints |
| Flexbox | `flex-direction`, `justify-content`, `align-items`, `grow`/`shrink`/`basis`, `order`, `wrap` |
| CSS Grid | `grid-template-columns/rows`, `fr`, `repeat()`, `gap`, spanning cells |
| Bootstrap | CDN setup, 12-column grid, breakpoint classes, components |
| Web Design | Colour theory, typography, UI attention, UX fundamentals |

#### 🏋️ Exercises

`🟢` CSS selectors quiz &nbsp;·&nbsp; `🟡` Colour Vocab Website &nbsp;·&nbsp; `🟡` Motivational Poster &nbsp;·&nbsp; `🟡` CSS Flag &nbsp;·&nbsp; `🟡` Pricing Table &nbsp;·&nbsp; `🔴` Mondrian Painting &nbsp;·&nbsp; `🔴` Web Design Agency Website &nbsp;·&nbsp; `🔴` TinDog Startup Website

#### 🛠️ Projects Built

| Project | Description | Skills Used |
|---------|-------------|--------------|
| Online Resume *(Capstone 1)* | First styled, structured resume page | HTML + CSS fundamentals |
| Colour Vocab Website | Word–colour association site | CSS Selectors |
| Motivational Poster | Styled poster layout | Box Model, Typography |
| CSS Flag | Recreated a national flag in pure CSS | Positioning, Box Model |
| Web Design Agency Website | Fully responsive agency landing page | Media Queries, Responsive Design |
| Pricing Table | Three-tier pricing layout | Flexbox Sizing & Direction |
| Mondrian Painting | Recreated Piet Mondrian's grid artwork | CSS Grid Placement |
| TinDog Startup Website | Full startup landing page | Bootstrap Grid & Components |

#### 💡 Key Takeaways
- Why external stylesheets win at scale over inline/internal CSS
- How the cascade resolves conflicting styles
- Flexbox (1D) vs. Grid (2D) — and when to reach for each
- Rapid prototyping with Bootstrap's grid and components

</details>

<br>

<a name="day-15-23"></a>
<details>
<summary><strong>📅 Day 15 – 23 &nbsp;·&nbsp; JavaScript Fundamentals</strong> &nbsp; ✅</summary>

<br>

🛠️ **Projects:** *None yet — every concept here feeds straight into the DOM-driven projects next*

#### 📘 Topics Covered

| Category | Concepts Learned |
|-----------|-------------------|
| JS Introduction | What JS does, `alert()`, adding behaviour to a page |
| Data Types & Variables | Strings, numbers, booleans, `typeof`, `var`, naming conventions |
| Strings | Concatenation, `.length`, `.slice()`, case methods, `.charAt()` |
| Numbers | Arithmetic operators, modulo, operator precedence |
| Increment/Decrement | Prefix vs. postfix `++` / `--` |
| Functions | Declaring vs. calling, parameters vs. arguments, `return` |
| Randomness | `Math.random()`, `Math.floor()`, pseudorandom numbers |
| Conditionals | `if`/`else`, comparators, `&&` `||` `!` |
| Arrays | Creation, indexing, `.length`, `.includes()`, `.push()`/`.pop()` |
| Loops | `while` and `for` loops, avoiding infinite loops |

#### 🏋️ Exercises

`🟢` Variable naming quiz &nbsp;·&nbsp; `🟢` String casing challenge &nbsp;·&nbsp; `🟡` Karel the Robot &nbsp;·&nbsp; `🟡` Life in Weeks &nbsp;·&nbsp; `🟡` BMI Calculator &nbsp;·&nbsp; `🟡` Love Calculator &nbsp;·&nbsp; `🟡` Leap Year Challenge &nbsp;·&nbsp; `🔴` Who's Buying Lunch? &nbsp;·&nbsp; `🔴` 99 Bottles of Beer &nbsp;·&nbsp; `🔴` Fibonacci Generator

#### 💡 Key Takeaways
- Writing clean, reusable functions with parameters and return values
- `alert()` displays; `return` hands a value back to your code
- Building real logic (dice, love %, leap years) with randomness & conditionals
- Automating repetition safely with `while` and `for` loops

</details>

<br>

<a name="day-24-28"></a>
<details>
<summary><strong>📅 Day 24 – 28 &nbsp;·&nbsp; DOM Manipulation & Advanced JavaScript</strong> &nbsp; ✅</summary>

<br>

🛠️ **Projects:** 🎲 Dice Game, Drum Kit

#### 📘 Topics Covered

| Category | Concepts Learned |
|-----------|-------------------|
| The DOM | Document Object Model as a tree; properties vs. methods |
| Selecting Elements | `querySelector`, `querySelectorAll`, DOM collections |
| Styling via JS | Direct style changes, `classList.add`/`remove` |
| Separation of Concerns | HTML = content, CSS = style, JS = behaviour |
| Text & Attributes | `innerHTML` vs. `textContent`, `getAttribute`/`setAttribute` |
| Events | `addEventListener`, anonymous functions, `this` |
| Higher-Order Functions | Passing functions as arguments, callbacks |
| Switch Statements | Cleaner branching than long `if`/`else` chains |
| Objects | Object literals, properties, methods, dot notation |
| Constructor Functions | Blueprints for multiple objects via `new` and `this` |
| Keyboard Events | `keydown`, `event.key` |
| Animations | `setTimeout`, timed class toggling |

#### 🛠️ Projects Built

| Project | Description | Skills Used |
|---------|-------------|--------------|
| 🎲 Dice Game | Two-player dice roller — see [Featured Projects](#featured-projects) | DOM, `setAttribute`, conditionals |
| Drum Kit | Interactive pad triggered by clicks & key presses | Event Listeners, `switch`, Audio API |

#### 💡 Key Takeaways
- The DOM lets JS query and change a *live* page, not just the console
- Why structure, style, and behaviour stay in separate layers
- Passing callback functions into event listeners
- Modelling real entities with object literals & constructor functions

</details>

<br>

<a name="day-29-30"></a>
<details>
<summary><strong>📅 Day 29 – 30 &nbsp;·&nbsp; jQuery</strong> &nbsp; ✅</summary>

<br>

🛠️ **Projects:** 🎮 Simon Game

#### 📘 Topics Covered

| Category | Concepts Learned |
|-----------|-------------------|
| jQuery Basics | What it is, why it exists, CDN setup |
| Selecting with jQuery | `$()` syntax vs. vanilla `querySelector` |
| Styling with jQuery | `.css()`, `.addClass()`/`.removeClass()`/`.hasClass()` |
| Text & Attributes | `.text()`/`.html()`, `.attr()` |
| Events with jQuery | Click & keypress handlers, the jQuery way |
| DOM Changes | Adding/removing elements, triggering animations |
| Minification | How libraries like jQuery are shipped for performance |

#### 🛠️ Projects Built

| Project | Description | Skills Used |
|---------|-------------|--------------|
| 🎮 Simon Game | Full memory/pattern game — see [Featured Projects](#featured-projects) | jQuery, arrays, game-state, animation |

#### 💡 Key Takeaways
- Where jQuery genuinely simplifies DOM work — and where vanilla JS is just as clear
- Structuring a real interactive app around *state*, not a single linear script
- Combining DOM selection, events, arrays, conditionals, and animation into one cohesive build

</details>

<br>

<a name="all-projects"></a>
## 🛠️ All Projects

| # | Project | Phase | Focus |
|---|---------|-------|-------|
| 1 | Movie Ranking | Day 1–3 | HTML basics |
| 2 | Birthday Invitation | Day 1–3 | Media & links |
| 3 | Personal Portfolio | Day 1–3 | Multi-page navigation |
| 4 | Online Resume *(Capstone 1)* | Day 4–14 | HTML + CSS |
| 5 | Colour Vocab Website | Day 4–14 | CSS selectors |
| 6 | Motivational Poster | Day 4–14 | Box model |
| 7 | CSS Flag | Day 4–14 | Positioning |
| 8 | Web Design Agency Website | Day 4–14 | Responsive design |
| 9 | Pricing Table | Day 4–14 | Flexbox |
| 10 | Mondrian Painting | Day 4–14 | CSS Grid |
| 11 | TinDog Startup Website | Day 4–14 | Bootstrap |
| 12 | Drum Kit | Day 24–28 | Events, DOM, audio |
| 13 | 🎲 **Dice Game** | Day 24–28 | DOM & intermediate JS |
| 14 | 🎮 **Simon Game** | Day 29–30 | Advanced JS & jQuery |

<br>

<a name="whats-next"></a>
## 🧭 What's Next

Frontend foundations — HTML, CSS (Flexbox, Grid, Bootstrap), and JavaScript (through the DOM and jQuery) — are done. Next: the backend.

- [ ] Servers & backend fundamentals
- [ ] Databases (SQL / NoSQL)
- [ ] REST APIs
- [ ] Authentication
- [ ] Deploying full-stack applications

<br>

<div align="center">

*This README is updated as new topics, projects, and milestones are completed.*

</div>
