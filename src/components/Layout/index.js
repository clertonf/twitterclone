import React from 'react'

import MenuBar from '../MenuBar';
import Main from '../Main';
import Sidebar from '../SideBar';

import { Container, Wrapper } from './styles'


export default function Layout() {
    return (
        <div>
            <Container>
                <Wrapper>
                   
                    <MenuBar />
                    <Main />
                    <Sidebar />

                </Wrapper>
            </Container>

        </div>
    )
}

