## Inspiration
The inspiration for Wildscape was the ever-growing crisis of environmental decay. As college students, we are passionate about supporting our local environment, but we find it difficult to make a real impact without being a part of a government body. We know that thousands of people our age share our strong interest in protecting the environment, and Wildscape provides an innovative and appealing platform to do just that. 

## What it does
As an online hub for the world's most luxurious scenes in nature, Wildscape empowers adolescents to make an impact by showing off their favorite "spots" and writing about why they deserve to be protected. If our users haven't found their "spot" yet, they can explore our discovery section to find locations that captivate them.

## How we built it
We built our web application with the following stack [Next.JS](https://nextjs.org/) (which includes [React.JS](https://react.dev/)), [Pocketbase](https://pocketbase.io/) (DB) and writing in typescript. To deploy we had [Vercel](https://vercel.com/) hosting [docker](https://www.docker.com/) as our container and [Fly.io](https://fly.io/) as our builder. The libraries we used were the [Google Maps API](https://developers.google.com/maps), [OAuth 2.0](https://oauth.net/2/), [TailwindCSS](https://tailwindcss.com/), [Framer Motion](https://www.framer.com/motion/) and [GSAP](https://gsap.com/). We also both made our own components but we had some help with these component libraries: [shadcn](https://ui.shadcn.com/), [aceternity](https://ui.aceternity.com/), and [Oliver Larose's blog](https://blog.olivierlarose.com/tutorials/text-gradient-opacity-on-scroll). 

## Challenges we ran into
One large challenge we ran into initially is since we are using so many tools some of them conflicted on initial setup so we had to wipe and make a new repo on day two. An additional struggle was the usage of a new database system, pocketbase, setting it up to fit our needs was difficult at first. After having Pocketbase setup it worked flawlessly and was very easy to use.

## Accomplishments that we're proud of
Some accomplishments we are proud of is our UI design using many different animation libraries giving engaging feedback to the user. Additionally being able to use the Google Maps API made us ecstatic connecting our data and being able to see visually on a map where our 'spots' are is satisfying. We were also were able to implement mobile responsiveness!

## What we learned
We learned how to deploy a Pocketbase backend, using the Google Maps API, and making UI with the six design principles.

## What's next for Wildscape
Within the maps page use the google maps API to navigate from the maps page to see the 'spot'. We want to in the future implement AI so that when a user uploads a photo the AI will scan and ensure only nature photos can be posted. Add the ability to add in comments. Partnering with environmental sustainability stakeholders such as the National Park Service. Make mobile app for Wildscape instead of it being a webapp. 

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
