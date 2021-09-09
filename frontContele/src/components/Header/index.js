import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, ConteudoProfile, Profile } from '../Header/styles';
import { FaAdversal } from "react-icons/fa";


export default function Header() {

  const profile = useSelector(state => state.user.profile);

  return (

    <Container>

       <Profile>
       <ConteudoProfile>
         <div>
       <strong>Administrador: </strong>
        <span>ID: {profile.id} NOME: {profile.email}</span>
        </div>
        <div>
        <Link to="/profile">Meu perfil</Link>
        </div>
        </ConteudoProfile>
      </Profile>

    </Container>

  );

}
