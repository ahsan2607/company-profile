import { Box } from '@mui/material'
import { BaseLayout } from './layouts'
import { BannerCarousel, About, Services, Programs } from './components'
import './App.css'

function App() {

  return (
    <>
      <BaseLayout>
      <BannerCarousel/>
      <Box sx={{ paddingTop: "25px", paddingBottom: "50px" }}>
      <About/>
      <Services/>
      <Programs/>
      </Box>
      </BaseLayout>
    </>
  )
}

export default App
