import React from 'react';

import { Container } from './styles';

import Logo from '../../assets/SVG/Logo.svg';

export default function Header() {
  return (
    <Container>
      <img src={Logo} alt="ComicClan" />
    </Container>
  );
}
