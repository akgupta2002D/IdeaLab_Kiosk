// app/idea-lab/page.js
'use client'

import { Container, Grid } from '@mui/material'
import IdeaCard from '../components/IdeaCard'

const ideas = [
  { title: 'Idea 1', description: 'Description of idea 1' },
  { title: 'Idea 2', description: 'Description of idea 2' }
  // Add more ideas as needed
]

const IdeaLabPage = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        {ideas.map((idea, index) => (
          <Grid item xs={12} md={6} key={index}>
            <IdeaCard title={idea.title} description={idea.description} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default IdeaLabPage
