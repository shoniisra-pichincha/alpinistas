import React from 'react'
import Layout from '../components/templates/Layout'

const RoutesPage = () => {
  return (
    <Layout>
      <div>
        <ul>
          {['Alex', 'John', 'Jaz', 'fedrik', 'missali'].map((user, idx) => {
            return <li key={idx}>{user}</li>
          })}
        </ul>
      </div>
    </Layout>
  )
}

export default RoutesPage
