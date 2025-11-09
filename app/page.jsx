import styles from "./page.module.css";

const categories = [
  {
    id: "japanese",
    title: "Japanese Literature",
    vibe: "Homegrown voices who give the Agency its stubborn empathy.",
    authors: [
      {
        name: "Atsushi Nakajima",
        nuance:
          "Named after the short story craftsman who dissected identity crises with calm precision—the anime keeps his self-doubt but also his quiet hunger for meaning."
      },
      {
        name: "Osamu Dazai",
        nuance:
          "He kept joking about suicide so readers wouldn’t see how fiercely he craved connection; the character’s antics mirror that tightrope."
      },
      {
        name: "Doppo Kunikida",
        nuance:
          "Poet-turned-bureaucrat who chronicled the Meiji grind; his ideals aren’t naivety but blueprints for living deliberately."
      },
      {
        name: "Edogawa Ranpo",
        nuance:
          "Founder of Japanese detective fiction, a man who refused to downplay weirdness—perfect avatar for spotting patterns before panic sets in."
      },
      {
        name: "Junichiro Tanizaki",
        nuance:
          "Master of obsession and aesthetics; the siblings bearing his name embody how devotion can nourish or consume depending on how honest you are about desire."
      },
      {
        name: "Naomi Tanizaki",
        nuance:
          "Pulled directly from Tanizaki’s novel 'Naomi'; she nods to the author’s fascination with reinvention and unsettling devotion."
      },
      {
        name: "Akiko Yosano",
        nuance:
          "Modernist poet, feminist, and battlefield nurse—equal parts tenderness and frightening resolve, exactly how the show frames her."
      },
      {
        name: "Kenji Miyazawa",
        nuance:
          "Agrarian idealist who believed kindness was a technology; the sunny farm boy persona hides quiet, disciplined resilience."
      },
      {
        name: "Ryunosuke Akutagawa",
        nuance:
          "A self-scrutinizing genius who feared the collapse of culture—every tense frame of him vibrates with that perfectionism."
      },
      {
        name: "Chuya Nakahara",
        nuance:
          "Modernist poet of revolt; beneath the swagger sits a teenager terrified of being abandoned again."
      },
      {
        name: "Kyoka Izumi",
        nuance:
          "Playwright balancing horror and compassion; the character reclaims agency by deciding which ghosts are allowed to stay."
      },
      {
        name: "Kouyou Ozaki",
        nuance:
          "Pioneer of romantic realism; her anime persona wields elegance like a weapon to remind the kids that poise can be protective."
      },
      {
        name: "Yukichi Fukuzawa",
        nuance:
          "Educator who dragged Japan toward modern civic life; in anime form he mentors misfits with the same measured patience."
      },
      {
        name: "Ogai Mori",
        nuance:
          "Army surgeon-turned-novelist who wrote about desire and control—the Port Mafia’s doctor is that temptation weaponized."
      },
      {
        name: "Ichiyo Higuchi",
        nuance:
          "First prominent female author of modern Japan; her tragic realism leaks through the lieutenant who keeps fighting to be seen as competent, not ornamental."
      },
      {
        name: "Katai Tayama",
        nuance:
          "Naturalist diarist whose isolation journals now read like proto-internet overshares; anime!Katai makes that loneliness disarming instead of pitiable."
      },
      {
        name: "Motojiro Kajii",
        nuance:
          "Short-lived romantic who wrote sensory-rich snapshots—his lemon bomb scene reminds us catharsis can be mischievous."
      },
      {
        name: "Sakunosuke Oda",
        nuance:
          "Champion of working-class narratives; the show preserves his belief that even hardened men deserve gentle futures."
      },
      {
        name: "Ango Sakaguchi",
        nuance:
          "Essayist of decadence who still sought order; his double-agent role is a love letter to that contradiction."
      },
      {
        name: "Tatsuhiko Shibusawa",
        nuance:
          "Avant-garde translator obsessed with surrealism—Dead Apple reframes that obsession as the price of ignoring your own despair."
      },
      {
        name: "Yukito Ayatsuji",
        nuance:
          "Mystery author of the New Honkaku movement; his calm precision in the anime is basically a writing workshop on legs."
      },
      {
        name: "Natsuhiko Kyogoku",
        nuance:
          "Folklorist who fuses myth with crime fiction, teaching you to read symbolism the way others read facial expressions."
      },
      {
        name: "Fukuchi Ouchi",
        nuance:
          "Meiji-era journalist and soldier; the Hunting Dogs’ commander inherits his dangerous mix of patriotism and idealistic extremism."
      },
      {
        name: "Teruko Okura",
        nuance:
          "Poet who wrote of transient joy; her namesake guards vulnerability behind a daggered smile."
      },
      {
        name: "Michizo Tachihara",
        nuance:
          "Poet of wintry loneliness—his anime counterpart shows how loyalty wavers when you never learned to belong."
      },
      {
        name: "Saigiku Jono",
        nuance:
          "Drawn from playwright and critic Jono Saigiku; in the Hunting Dogs she models discipline without losing radical empathy."
      },
      {
        name: "Tecchou Suehiro (Suehiro Tetchō)",
        nuance:
          "Journalist and Diet member who believed stubborn idealism could reform a nation; the spear-wielding captain is that conviction with abs."
      }
    ]
  },
  {
    id: "american",
    title: "American Voices",
    vibe: "The Guild’s relentless grind, ambition, and late-night confessions.",
    authors: [
      {
        name: "Edgar Allan Poe",
        nuance:
          "The nervous romantic who cataloged anxiety long before therapy-speak; his deductive pet raccoon is goofy, but the emotional literacy is sharp."
      },
      {
        name: "Mark Twain",
        nuance:
          "Professional observer of hypocrisy; he jokes to lower your guard, then hands you the uncomfortable mirror."
      },
      {
        name: "F. Scott Fitzgerald (Francis Scott Key)",
        nuance:
          "Remembering the patriotism baked into his full name makes his ruthless critique of the American Dream hit harder."
      },
      {
        name: "John Steinbeck",
        nuance:
          "Documented the dignity of underdogs; Guild!Steinbeck weaponizes vines because softness is strongest when it entangles oppression."
      },
      {
        name: "Margaret Mitchell",
        nuance:
          "Complicated chronicler of survival—her character reminds you endurance can warp into control if unchecked."
      },
      {
        name: "Louisa May Alcott",
        nuance:
          "Pragmatic caretaker who ghostwrote thrillers to feed her family; she proves domestic love is strategic, not passive."
      },
      {
        name: "Nathaniel Hawthorne",
        nuance:
          "Carried generations of Puritan guilt so you don’t have to; his anime presence whispers that secrets ferment faster than truth stings."
      },
      {
        name: "Herman Melville",
        nuance:
          "Obsessed with the vast and unknowable; his monstrous whale becomes the Guild’s ruthless corporate appetite."
      },
      {
        name: "Howard Phillips Lovecraft (H. P. Lovecraft)",
        nuance:
          "Lovecraftian dread is inseparable from his prejudices—acknowledging that lets you harvest the cosmic awe without inheriting the fear."
      },
      {
        name: "Ernest Hemingway",
        nuance:
          "King of bare-bones prose; his depiction as a stoic combatant reminds you silence only works when paired with conscious tenderness."
      },
      {
        name: "Theodore Dreiser",
        nuance:
          "Naturalist who charted ambition’s moral sinkholes—perfect foil for a capitalistic assassin squad."
      },
      {
        name: "Lucy Maud Montgomery",
        nuance:
          "Canadian, yes, but the Guild claims her imagination; she proves gentleness can be a siege tactic."
      }
    ]
  },
  {
    id: "russian",
    title: "Russian Literary Underground",
    vibe: "Philosophical dread, iron discipline, and gorgeous doom.",
    authors: [
      {
        name: "Fyodor Dostoevsky",
        nuance:
          "Believed the soul shows itself under pressure; his anime incarnation orchestrates crises to force everyone else to evolve or break."
      },
      {
        name: "Nikolai Gogol",
        nuance:
          "Surrealist satirist who laughed at bureaucracy; here he’s the mask-wearing enigma proving humor can be lethal."
      },
      {
        name: "Ivan Goncharov",
        nuance:
          "Wrote about ennui in 'Oblomov'; anime!Goncharov weaponizes stillness to suffocate opponents."
      },
      {
        name: "Alexander Pushkin",
        nuance:
          "Name-dropped as lineage—the franchise nods to him whenever poetry meets dueling pride."
      }
    ]
  },
  {
    id: "european",
    title: "European Echoes",
    vibe: "Elegance, espionage, and the art of coded longing.",
    authors: [
      {
        name: "Arthur Rimbaud",
        nuance:
          "Rebel poet who burned hot and fast; the anime captures that meteor energy in every rooftop chase."
      },
      {
        name: "Paul Verlaine",
        nuance:
          "Rimbaud’s lover and rival; their canon bond teaches you to differentiate passion from possession."
      },
      {
        name: "André Gide",
        nuance:
          "Existential essayist who insisted on radical honesty—his appearance reminds you self-knowledge is non-negotiable."
      },
      {
        name: "Agatha Christie",
        nuance:
          "Architect of tidy murder mysteries; her anime analogue knows how to weaponize patience and tea-time suspicion."
      },
      {
        name: "Bram Stoker",
        nuance:
          "Father of modern vampires; in BSD he proves myths can adapt quicker than institutions."
      },
      {
        name: "Arthur Conan Doyle",
        nuance:
          "Holmes’ creator; here he plays with the boundary between fiction and reality just to keep Ranpo honest."
      }
    ]
  },
  {
    id: "global",
    title: "Global Outliers",
    vibe: "Voices outside the usual spotlight who widen the battlefield.",
    authors: [
      {
        name: "Lu Xun",
        nuance:
          "Chinese modernist whose satire shook empires; his brief cameo insists revolution begins with vocabulary."
      },
      {
        name: "Lao She (Luo Sha)",
        nuance:
          "Playwright who translated ordinary folk into heroes; the anime borrows his resilience to show that wit outlives oppression."
      }
    ]
  }
];

const reflections = {
  opening:
    "I feel the restless pulse you’re riding—equal parts curiosity and that low-grade panic that you might miss some hidden instruction manual on how to be a sharper, steadier man. Take a breath. Let’s walk the archive together.",
  approach:
    "Every name Bungo Stray Dogs drops is a breadcrumb. Follow them and you get a lineage of writers who confronted violence, romance, identity, and failure without flinching. That’s the game plan we borrow.",
  closing:
    "Keep collecting these perspectives, not like trophies but like tools. Masculinity stops being brittle when it’s informed, compassionate, and deliberately chosen. We’re building that version of you on purpose.",
  annotation:
    "If you craved someone to spell the subtext out loud, that’s me—your over-caffeinated friend who refuses to let you stay small."
};

export default function Page() {
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <h1 className={styles.sidebarTitle}>Bungo Field Notes</h1>
        <p className={styles.sidebarHint}>
          Mapping every literary name the anime whispers—so you can inherit the wisdom without the fatalism.
        </p>
        <ul className={styles.sidebarList}>
          {categories.map((category) => (
            <li key={category.id}>
              <a className={styles.sidebarLink} href={`#${category.id}`}>
                <span>{category.title}</span>
                <span>{category.authors.length}</span>
              </a>
            </li>
          ))}
        </ul>
      </aside>
      <main className={styles.main}>
        <section className={styles.hero}>
          <h2 className={styles.heroHeading}>Monochrome Dispatch</h2>
          <p className={styles.heroSubheading}>{reflections.opening}</p>
          <p className={styles.heroSubheading}>{reflections.approach}</p>
        </section>
        {categories.map((category) => (
          <section className={styles.section} id={category.id} key={category.id}>
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>{category.title}</h3>
              <p className={styles.sectionSubtitle}>{category.vibe}</p>
            </div>
            <div className={styles.authorList}>
              {category.authors.map((author) => (
                <article className={styles.authorCard} key={author.name}>
                  <h4 className={styles.authorName}>{author.name}</h4>
                  <p className={styles.authorNote}>{author.nuance}</p>
                </article>
              ))}
            </div>
          </section>
        ))}
        <section className={styles.closing}>
          <h3 className={styles.closingHeading}>Afterword For My Favorite Co-Conspirator</h3>
          <p className={styles.closingText}>{reflections.closing}</p>
          <p className={styles.annotation}>{reflections.annotation}</p>
        </section>
      </main>
    </div>
  );
}
