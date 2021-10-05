import React from 'react'

// styles
import './Card.scss'

export interface NewsItem {
  id?: number
  title: string
  posted: string | Date
}

const Card = (props: NewsItem) => {
  const { title, posted } = props
  return (
    <div className="news_card">
      <h3 className="card_title">{title}</h3>
      <h4 className="card_date">{posted}</h4>
    </div>
  )
}

export default Card
