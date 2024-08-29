import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import RenderTags from './RenderTags'
const hotQuestions = [
  {_id: 1, title:'Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?'},
  {_id: 2, title:'Is it only me or the font is bolder than necessary?'},
  {_id: 3, title:'Redux Toolkit Not Updating State as Expected'},
  {_id: 4, title:'Async/Await Function Not Handling Errors Properly'},
  {_id: 5, title:'Can I get the course for free?'}
]

const popularTags = [
  {_id: 1, name:'javascript', totalQuestions: 5},
  {_id: 2, name:'react', totalQuestions: 3},
  {_id: 3, name:'vue', totalQuestions: 2},
  {_id: 4, name:'python', totalQuestions: 8},
  {_id: 5, name:'redux', totalQuestions: 6},
]


const RightSidebar = () => {
  return (
    <section className='background-light900_dark200 light-border sticky right-0 top-0 flex h-screen  flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden w-[350px] custom-scrollbar'>

      <div className=''>
        <h3 className='h3-bold text-dark200_light900'>Top Questions</h3>
        <div className='mt-7 flex w-full flex-col gap-[30px]'>
          {hotQuestions.map((item) => (
            <Link
              href={`/questions/${item._id}`}
              key={item._id}
              className="flex cursor-pointer items-center justify-between gap-9"
            >
              <p className="body-medium text-dark500_light700">{item.title}</p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevron"
                height={20}
                width={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className='mt-16'>
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTags
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQue={tag.totalQuestions}
              showCount
            />
          ))}
          </div>
      </div>
    </section>
  )
}

export default RightSidebar