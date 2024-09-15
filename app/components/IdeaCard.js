// components/IdeaCard.js
'use client'

import { Card, CardContent, Typography } from '@mui/material'

const IdeaCard = ({ title, description }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant='h6' color='primary'>
          {title}
        </Typography>
        <Typography variant='body2' color='textSecondary'>
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default IdeaCard
