import Layout from '@/components/layout'
import { Box, Container } from '@mui/material'
import React from 'react'

export default function Events() {
  return (
    <Layout>
      <Box>
        <Container maxWidth='lg'>
          <Box sx={{px:3, height: '500px'}}>
            <h1>Мероприятия</h1>
          </Box>
        </Container>
      </Box>
    </Layout>
  )
}
