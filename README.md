## Upvote

Upvote is a Reddit-esque web application that allows users to create posts, upvote and downvote posts, and comment on posts in a multi-threaded, nested list.

The project is built using Next.js with the /app router and [Tailwind CSS](https://tailwindcss.com/), and uses [Auth.js (formerly Next Auth)](https://authjs.dev/) for user authentication. The data is stored in a Postgres database, which is created and accessed with raw SQL queries using the `pg` package.

The project is a work in progress and is not yet complete.

## Features

- [x] View a list of posts
- [x] View a single post
- [x] Create a post
- [x] Upvote and downvote posts
- [x] Pagination of posts
- [x] Comment on posts
- [x] Nested comments (recursive lists)
- [x] User authentication

## Setup instructions

1. Fork the repository (check "copy the main branch only") and clone your fork to your local machine
2. Run `npm install`
3. Create a `.env.local` file in the root directory and add the following environment variables:
   - `DATABASE_URL` - the URL of your Postgres database (eg. the Supabase connection string)
   - `AUTH_SECRET` - the Next Auth secret string (this can be anything at all like a password, but keep it secret!)
   - `AUTH_GITHUB_ID` - the GitHub OAuth client ID (create yours in [Github developer settings](https://github.com/settings/developers)
   - `AUTH_GITHUB_SECRET` - the GitHub OAuth client secret (create this in [Github developer settings](https://github.com/settings/developers))
4. Create the database schema by running the SQL commands in `schema.sql` in your database (eg. by running the commands in Supabase Query Editor)
5. Run `npm run dev` to start the development server
6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the site

## Potential future features

- [ ] User profiles
- [ ] Sorting posts by recent (date posted), top (most upvotes), and most controversial (most upvotes _and_ downvotes)
- [ ] User karma scores
- [ ] User badges / trophies (awards for achievements like number of posts, years on the site, etc.)
- [ ] User settings (eg. number of posts per page, theme, etc.)
- [ ] Moderation tools / reporting or flagging objectionable comments for removable by admins
- [ ] Searching posts (possibly using simple SQL LIKE '%some search%', or [Postgres text search](https://www.crunchydata.com/blog/postgres-full-text-search-a-search-engine-in-a-database))
- [ ] Subreddits (separate communities, that isn't just one big list of posts, that can be created by users)
- [ ] User notifications
- [ ] User private messaging
- [ ] User blocking
- [ ] User following
- [ ] User feed (posts from users you follow)
- [ ] User flair

## Requirments met

1. It is deployed! Yippeee

2. Titles of the posts match the post title when you click on them

3. When not logged in and trying to vote, it redircts you to a page that tells you that you cant do that

4. Users can only upvote once with the unique constraint

5. Added post title to the metadata

6. You can sort posts by date and most or least upvotes - Pair programming with Luke

7. Linking to difficutly 2, Luke and I found a fix in the comments.js.

return { postId: postId, parentCommentId: parentCommentId, success: true };

Chaning the return to this allows the users to comment mutliple times without refreshing the page as it keeps the postid and parentcommentid instead of refreshing them when returning the success true.
This was an unknown bug that we found and managed to fix after much trial and error, I think it deserves double points in the marking! Thanks! :D

## Difficulties

1. I wasnt sure how to implement the tip tap text editor instead of the form, I had a read through the docs and Im sure i could implement it into the site, but im not sure how I would submit that content the use adds using the editor to supabase, because its all done with that tiptap component and not a form button which I can use to send the data off.

2. During pair programming with Luke, we found a bug when we post a comment it works but then if we try and do another comment it wont give the post id in the table, itll only post the comment content. we brought Manny in to have a look and he suggested it was something to do with the formsstatehook but was unsure 100% why this was happening. We managed to find the solution finally which you can find on requirments met 7.
