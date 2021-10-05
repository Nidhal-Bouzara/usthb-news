import React from 'react'

// styles
import './Card.scss'

export interface NewsItem {
  id?: number
  title: string
  posted: string
  link: string
  img?: string
}

const Card = (props: NewsItem) => {
  const { title, posted, link } = props
  return (
    <a href={link} className="news_card">
      <h3 className="card_title">{title}</h3>
      <h4 className="card_date">{posted}</h4>
    </a>
  )
}

export default Card
