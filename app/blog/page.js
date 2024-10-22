// pages/blog.js

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { buttonVariants } from "@/components/ui/button"
import fs, {readFileSync} from 'fs'
import matter from 'gray-matter';
import path from 'path'

// const dirContent = fs.readFileSync("content", "utf-8")
// const blogs= dirContent.map(file=>{
//   const fileContent = fs.readFileSync(`content/${file}`,"utf-8")
//   const {data} = matter(fileContent)
//   return data
// })




const contentDir = path.join(process.cwd(), 'content');
const files = fs.readdirSync(contentDir);

const blogs = files.map(file => {
  const filePath = path.join(contentDir, file);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data } = matter(fileContent);
  return data;
});





// const blogs = [
//   {
//     title: 'Blog Post 1',
//     description: 'This is the description for blog post 1.',
//     slug: 'blog-post-1',
//     date: '2024-09-24',
//     author: 'Author 1',
//     image: 'https://via.placeholder.com/400x200?text=Blog+Image+1',
//   },
//   {
//     title: 'Blog Post 2',
//     description: 'This is the description for blog post 2.',
//     slug: 'blog-post-2',
//     date: '2024-09-23',
//     author: 'Author 2',
//     image: 'https://via.placeholder.com/400x200?text=Blog+Image+2',
//   },
//   {
//     title: 'Blog Post 3',
//     description: 'This is the description for blog post 3.',
//     slug: 'blog-post-3',
//     date: '2024-09-22',
//     author: 'Author 3',
//     image: 'https://via.placeholder.com/400x200?text=Blog+Image+3',
//   },
// ];

const Blog = () => {
  return (
    <>
    <h1 className="text-4xl font-bold text-center mb-6 mt-6">Blog</h1>
    <div className="container mx-auto px-4 py-12 justify-center flex">
      {/* <h1 className="text-4xl font-bold text-center mb-8">Blog</h1> */}
      <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-1">
        {blogs.map((blog) => (
          <div key={blog.slug} className="max-w-md w-full dark:border-2 dark:bg-gray-900 shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105">
            <img src={blog.image} alt={blog.title} className="h-48 w-full object-center object-contain rounded-t-lg" />
            <h3 className="text-xl font-semibold mt-4">{blog.title}</h3>
            <p className="mt-4">{blog.description}</p>
            <p className="mt-2 text-sm">By {blog.author} on {new Date(blog.date).toLocaleDateString()}</p>
            <Link href={`/blogpost/${blog.slug}`} className="mt-4 inline-block hover:underline">
            <Button className="my-2" variant="outline" href="/blogpost">
          Read more
        </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Blog;
