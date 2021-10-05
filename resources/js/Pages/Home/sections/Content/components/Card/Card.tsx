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
  const { title, posted, link, img } = props
  return (
    <a href={link} className="news_card">
      {img && (
        <div className="card_img_container">
          <img src={img} className="card_img" alt="" />
        </div>
      )}
      <div className="card_text">
        <h3 className="card_title">{title}</h3>
        <h4 className="card_date">{posted}</h4>
      </div>
    </a>
  )
}

export default Card
