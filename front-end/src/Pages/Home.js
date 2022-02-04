
import React from 'react'
import styled from 'styled-components'
import PopularProducts from '../components/PopularProducts'
import Slider from '../components/Slider'
const Container = styled.div`
over-flow:hidden`
const Home = () => {
    return (
        <Container>
        <Slider/>
        <PopularProducts/>
        </Container>
    )
}

export default Home
