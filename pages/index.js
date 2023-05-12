import Layout from '@/components/layout'
import { Box, Container } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <Layout>
      <Box>
        <Container maxWidth='lg'>
          <Box sx={{px:3, height: "800px"}}>
            <h1>Home</h1>
          </Box>
        </Container>
      </Box>
    </Layout>    
  )
}
