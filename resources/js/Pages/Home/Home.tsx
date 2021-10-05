import React from 'react'
import Footer from '../../Shared/Footer/Footer'

// components
import Nav from '../../Shared/Nav/Nav'
import { NewsItem } from './sections/Content/components/Card/Card'
import Content from './sections/Content/Content'
import Hero from './sections/Hero/Hero'

export interface HomePageProps {
  news: NewsItem[]
}

const Home = (props: HomePageProps) => {
  const { news } = props
  return (
    <main className="main">
      <Nav />
      <Hero />
      <Content news={news} />
      <Footer />
    </main>
  )
}

export default Home
