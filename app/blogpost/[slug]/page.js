import fs from 'fs'
import matter from 'gray-matter'
import { notFound } from 'next/navigation'

import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {unified} from 'unified'
import {reporter} from 'vfile-reporter'
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from '@rehype-pretty/transformers'



export default async function Page({ params }) {
  // const blog = {
  //   title: "Your Blog Title",
  //   author: "Pavan",
  //   description: "This is a brief description of the blog post.",
  //   date: "2024-09-24",
  //   // heading: "Main Heading of the Blog",
  //   content: "<p>This is the HTML content of the blog post. It can include <strong>formatted text</strong>, <em>images</em>, and other HTML elements.</p>"
  // };
  const filePath=`content/${params.slug}.md`
  if(!fs.existsSync(filePath)){
    notFound()
  }
  const fileContent=fs.readFileSync(filePath,"utf-8")
  const {data,content}=matter(fileContent)


  const processor = unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeDocument, {title: '👋🌍'})
  .use(rehypeFormat)
  .use(rehypeStringify)
  .use(rehypePrettyCode,{
    theme:'github-dark',
    transformers: [
      transformerCopyButton({
        visibility: 'always',
        feedbackDuration: 3_000,
      }),]
  })
  
 
  const htmlContent = (await processor.process(content)).toString()
  
    return (
    
    <div className="max-w-4xl dark:bg-slate-900 mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
      <p className=" border-l-4 dark:text-black border-blue-500 bg-gray-100 text-lg font-medium leading-relaxed my-4 pl-4">&quot;{data.description}&quot;</p>
      <div className="flex gap-4 items-center">
         <span className="italic">Written by: {data.author}</span>
         <span className=" ">{data.date}</span>
      </div>
      <div className="prose dark:prose-invert" dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>)}
    
  


 