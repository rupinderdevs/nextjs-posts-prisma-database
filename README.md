## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

# Sync Database with Prisma Model

npx prisma db push

# Open visuals

npx prisma studio

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

<!--  -->

Adding posts

Next.js allows you to create serverless API routes without creating an entire backend server. API routes provide a solution to build your API with Next.js. Next.js uses server-side bundles that treat server code as an API endpoint instead of a page. It does that using alias pages/api path. This way, any file under api will be treated as an endpoint. This provides an easy solution to build your API within the same codebase.

pages/api will create all API handler functions using Next.js. This handler will act as the API endpoint to excite Prisma CRUD methods.

Create a ‘post’ directory in the pages/api directory. Inside the post directory, create an index.js file. In this index.js, add the handler for adding posts as follows:
