import React from "react";
import Card from "../Card/index";
import DevAlison from "../imagens/alison.png";
import DevSergio from "../imagens/sergio.png";
import DevAna from "../imagens/ana.png";
import DevJulios from "../imagens/juliao.png";
import "./styles.css";

const Body = () => {
  return (
    <div className="containerBody">
      <Card
        imgAvatar={DevAlison}
        title="Alisson da Silva de Araujo"
        office="Develop backend"
        contact="alissonaraujo@cvc.com.br"
      />
      <Card
        imgAvatar={DevSergio}
        title="Sérgio lima dos santos"
        office="Desenvolvedor para a Web"
        contact="sergiodossantos@ext.cvccorp.com.br"
      />
      <Card
        imgAvatar={DevAna}
        title="Ana Maria Kroschinski"
        office="Develop backend"
        contact="anamaria@ext.cvccorp.com.br"
      />
      <Card
        imgAvatar={DevJulios}
        title="José David Julião Lopes"
        office="Develop backend"
        contact="joselopes@ext.cvccorp.com.br"
      />
    </div>
  );
};

export default Body;
