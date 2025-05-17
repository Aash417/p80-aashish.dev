const Socials = [
   { url: 'https://x.com/aashish_kathait', description: 'X' },
   {
      url: 'https://github.com/Aash417',
      description: 'github',
   },
];

const FullStackProjects = [
   [
      'suitcase.exchange',
      'https://suitcaseexchangeshow.vercel.app/',
      'A crypto exchange platform for trading digital assets with real-time data',
   ],
   [
      'formaker.com',
      'https://formakercom.vercel.app/',
      'Generate dynamic forms & collect responses from anyone',
   ],
   [
      'videoLib.com',
      'https://vlibcom.vercel.app/',
      'Video-sharing platform  upload, watch, and engage with content',
   ],
   [
      'schedule.com',
      'https://schedule-com-phi.vercel.app/',
      'Project management tool, invite team, track tasks, and manage projects',
   ],
   [
      'chatify.com',
      'https://chatify-com.vercel.app/',
      'Messaging platform for teams, communication through channels, DM, threads',
   ],
   [
      'cobracase.com',
      'https://p65-casecobra-next.vercel.app/',
      'Saas platform for your image on a custom phone case',
   ],
];

const FrontendProjects = [
   [
      '3d-fizzi.com',
      'https://3d-fizzi.vercel.app',
      'Landing page for a soda can company',
   ],
   [
      'glisten-ai.com',
      'https://modern-glisten-ai.vercel.app',
      'Landing page for an AI automation company',
   ],
   [
      '3d-portfolio.com',
      'https://p69-three-js-portfolio.vercel.app/',
      'A portfolio website with 3D effects',
   ],
   [
      'omnifood.com',
      'https://aash417.github.io/p25-Omnifood/',
      'Landing page for food ordering service',
   ],
];

const MiniProjects = [
   [
      'recipe-finder.com',
      'https://recipe-finder-aash.netlify.app/',
      'Find recipes of your favorite dishes',
   ],
   [
      'roll-a-dice.com',
      'https://aash417.github.io/p32-dice-roll/',
      'Play a dice rolling game with a friend',
   ],
   [
      'ping-pong.com',
      'https://aash417.github.io/p21-pong/',
      'Play a ping pong game',
   ],
   [
      'fast-pizza.com',
      'https://my-fast-pizza.netlify.app/',
      'Order a pizza online',
   ],
];

export default function Home() {
   return (
      <div
         className="min-h-screen flex flex-col items-center px-3 font-sans pb-10"
         style={{
            // @ts-expect-error custom css variable
            '--p-container': '0.75rem',
         }}
      >
         <div
            className="w-full max-w-(--breakpoint-sm) min-h-screen"
            style={{
               // @ts-expect-error custom css variable
               '--w-content': '640px',
            }}
         >
            <header className="pt-28 tracking-tight">
               <div className="text-4xl tracking-tighter">aashish</div>
               <div className="font-light text-foreground2 font-mono flex gap-x-4 flex-wrap">
                  <div className="w-full sm:w-auto">aashish kathait</div>
                  <div className="hidden sm:block">-</div>
                  {Socials.map((a, i) => {
                     return (
                        <div key={i + 1} className="">
                           <a
                              href={a.url}
                              target="_blank"
                              className="text-foreground2 hover:text-foreground"
                           >
                              {a.description}
                           </a>
                        </div>
                     );
                  })}
               </div>
            </header>

            <section className="pt-4">
               <div className="text-foreground font-mono text-sm">
                  i am a fullstack developer who builds end-to-end web apps,
                  from backend logic to polished UIs.
               </div>
            </section>

            <section className="pt-12">
               <div className="font-mono text-lg tracking-tight text-foreground2 font-light pb-4">
                  fullstack projects
               </div>
               {FullStackProjects.map((a, i) => {
                  return (
                     <div key={i + 1}>
                        <a
                           href={a[1]}
                           target="_blank"
                           className="text-foreground3 hover:text-foreground"
                        >
                           {a[0]}
                        </a>{' '}
                        <span className="text-foreground2">{a[2]}</span>
                     </div>
                  );
               })}
            </section>

            <section className="pt-12">
               <div className="font-mono text-lg tracking-tight text-foreground2 font-light pb-4">
                  frontend only projects
               </div>
               {FrontendProjects.map((a, i) => {
                  return (
                     <div key={i + 1}>
                        <a
                           href={a[1]}
                           target="_blank"
                           className="text-foreground3 hover:text-foreground"
                        >
                           {a[0]}
                        </a>{' '}
                        <span className="text-foreground2">{a[2]}</span>
                     </div>
                  );
               })}
            </section>

            <section className="pt-20">
               <div className="font-mono text-lg tracking-tight text-foreground2 font-light pb-4">
                  other mini projects
               </div>
               {MiniProjects.map((a, i) => {
                  return (
                     <div key={i + 1}>
                        <a
                           href={a[1]}
                           target="_blank"
                           className="text-foreground3 hover:text-foreground"
                        >
                           {a[0]}
                        </a>
                        <span className="text-foreground2">{a[2]}</span>
                     </div>
                  );
               })}
            </section>

            <footer>
               <div className="pt-20 text-center text-foreground2 pb-20">
                  <div className="text-sm">
                     © {new Date().getFullYear()} aashish
                  </div>
               </div>
            </footer>
         </div>
      </div>
   );
}
