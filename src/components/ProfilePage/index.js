import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

export default function ProfilePage() {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
      <EditButton outlined>Editar perfil</EditButton>

        <h1>Clerton Filho</h1>
        <h2>@clerton_filho</h2>

        <p>
          Software Engineering student -
          <a href="https://www.quixada.ufc.br/" target="blank">
            UFC
          </a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Fortaleza - CE, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 21 de fevereiro de 1999
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>102</strong>
          </span>
          <span>
            <strong>23 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}
