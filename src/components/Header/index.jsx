import React from "react";
import Logo from "../imagens/logo_cvc.png";
import Avatar from "../imagens/avatar.png";
import LiderFlavio from "../imagens/flavio.png";
import LiderAntonio from "../imagens/antonio.png";
import LiderCosmai from "../imagens/cosmai.png";
import data from "../../data/squad.json";
import Card from "../Card/index";
import "./styles.css";

console.log("data", data.data.leader);

const Header = () => {
  return (
    <div className="containerHeader">
      <div className="content">
        <div className="contentLogo">
          <img src={Logo} alt="logo cvc" />
        </div>
        <div className="contentAvatar">
          <img src={Avatar} alt="logo cvc" />
        </div>
      </div>
      <div className="contentCard">
        <Card
          imgAvatar={LiderFlavio}
          title="Flávio Lopes de Sousa"
          office="Systems Engineer"
          contact="flaviosousa@cvccorp.com.br"
        />
        <Card
          imgAvatar={LiderCosmai}
          title="Thiago Cosmai"
          office="Tech Lead(Coordenador)"
          contact="tiagocosmai@cvccorp.com.br"
        />
        <Card
          imgAvatar={LiderAntonio}
          title="Antonio Marques dos Santos Filho"
          office="Engenheiro de software"
          contact="antoniofilho@ext.cvccorp.com.br"
        />
      </div>
    </div>
  );
};

export default Header;
