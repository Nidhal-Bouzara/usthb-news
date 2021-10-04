import { NewsPiece } from 'types/News'
import React from 'react'
import { Link } from '@inertiajs/inertia-react'
import { InertiaProgress } from '@inertiajs/progress'

export interface NewsProps {
  news: NewsPiece[]
}

const News = (props: NewsProps) => {
  InertiaProgress.init()
  return (
    <>
      <h1>The news is:</h1>
      {props.news.map((item) => (
        <div>
          <h3>{item.title}</h3>
          <h5>Posted: {new Date(item.posted).toDateString()}</h5>
        </div>
      ))}
      <Link href="news/create">Create News</Link>
    </>
  )
}

export default News
