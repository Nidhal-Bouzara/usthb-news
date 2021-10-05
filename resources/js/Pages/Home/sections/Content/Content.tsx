import React from 'react'
import Card, { NewsItem } from './components/Card/Card'

interface ContentProps {
  news: NewsItem[]
}

const Content = (props: ContentProps) => {
  const { news } = props
  return (
    <div className="content_container">
      <h1 className="news_title">The News</h1>
      <ul className="news_list">
        {news.slice(0, 12).map((item) => (
          <li className="news_item">
            <Card link={item.link} img={item.img} title={item.title} posted={item.posted} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Content
