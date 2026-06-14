/* MENU */

function abrirMenu(){

    const menu =
        document.getElementById("menu");

    menu.style.display =
        menu.style.display === "block"
        ? "none"
        : "block";
}

/* TEMA */

function alternarTema(){

    if(document.body.classList.contains("dark")){

        document.body.classList.remove("dark");
        document.body.classList.add("light");

    }else{

        document.body.classList.remove("light");
        document.body.classList.add("dark");
    }
}

/* COR DA LETRA */

function alterarCorTexto(){

    const cor =
        document.getElementById("corTexto").value;

    document.documentElement
        .style.setProperty("--text-color", cor);
}

/* TRADUÇÕES */

const traducoes = {

pt:{

titulo:"O Desenvolvimento Agropecuário e o Cuidado Ambiental",

slide2:"Atualmente, tem se tornado cada vez mais difícil equilibrar o cuidado ambiental e a crescente necessidade de aumento de produção, principalmente quando o crescimento populacional, a maior carência por alimentos e matérias-primas e a constante exportação exige cada vez mais deste setor.",

slide3:"No entanto, essa expansão de produção agropecuária deve ocorrer de forma harmoniosa com a natureza, assegurando a preservação dos recursos naturais para as futuras gerações.",

slide4:"A adoção de práticas agropecuárias sustentáveis contribui para a amplificação da produtividade sem causar grandes consequências ao ecossistema.",

slide5a:"Um exemplo de prática consciente é a rotação de culturas, que consiste na alternância de diferentes plantações em uma área ao decorrer do tempo.",

slide5b:"Essa técnica tem como benefícios:",

beneficio1:"Melhora da fertilidade do solo;",
beneficio2:"Diminuição da ocorrência de pragas;",
beneficio3:"Redução da necessidade de fertilizantes e agrotóxicos.",

slide6:"Além disso, o investimento em tecnologias é um auxílio de extrema importância, pois o uso de aparelhos como drones, sensores e sistemas para a aplicação e pulverização de produtos agrotóxicos, fungicidas e herbicidas e irrigação de plantações ou pastos reduzem o desperdício destes mesmos e aumentam, também, a eficiência produtiva. Com a preservação ambiental, poderiam ser usados os próprios insetos presentes na fauna local para o controle de pragas nas plantas.",

slide7:"Portanto, para garantir uma produção agropecuária forte e crescente e um futuro sustentável e equilibrado, é preciso apoiar práticas conscientes e facilitar o acesso a novas tecnologias.",

slide8:"Produtores rurais devem agir juntamente ao governo e às instituições de pesquisas e desenvolvimentos tecnológicos, que poderiam promover qualificações para a população, investimentos e políticas de incentivo à produção sustentável, como a diminuição de impostos para produtores que tenham algum tipo de ação para a proteção do meio ambiente.",

slide9:"Assim, por meio desta cooperação, será possível manter um desenvolvimento sustentável entre produção e meio ambiente, ajudando aos produtores, ao cenário ambiental e às futuras gerações."

},

en:{

titulo:"Agricultural Development and Environmental Care",

slide2:"Currently, it has become increasingly difficult to balance environmental protection and the growing need for increased production.",

slide3:"However, this expansion of agricultural production must occur in harmony with nature.",

slide4:"The adoption of sustainable agricultural practices contributes to increasing productivity without causing major consequences to the ecosystem.",

slide5a:"An example of a conscious practice is crop rotation.",

slide5b:"Benefits include:",

beneficio1:"Improved soil fertility;",
beneficio2:"Reduced pest occurrence;",
beneficio3:"Reduced need for fertilizers and pesticides.",

slide6:"Investment in technologies such as drones, sensors and irrigation systems increases efficiency and reduces waste.",

slide7:"To ensure strong agricultural production and a sustainable future, it is necessary to support conscious practices and facilitate access to new technologies.",

slide8:"Farmers should work together with governments and research institutions to encourage sustainable production.",

slide9:"Through this cooperation, sustainable development between production and the environment will be possible."

},

es:{

titulo:"El Desarrollo Agropecuario y el Cuidado Ambiental",

slide2:"Actualmente es cada vez más difícil equilibrar el cuidado ambiental y la producción.",

slide3:"Sin embargo, esta expansión debe realizarse en armonía con la naturaleza.",

slide4:"La adopción de prácticas sostenibles contribuye al aumento de la productividad sin perjudicar el ecosistema.",

slide5a:"Un ejemplo es la rotación de cultivos.",

slide5b:"Sus beneficios incluyen:",

beneficio1:"Mejora de la fertilidad del suelo;",
beneficio2:"Disminución de plagas;",
beneficio3:"Reducción del uso de fertilizantes y pesticidas.",

slide6:"La inversión en tecnologías aumenta la eficiencia y reduce el desperdicio.",

slide7:"Es necesario apoyar prácticas conscientes y facilitar el acceso a nuevas tecnologías.",

slide8:"Los productores deben actuar junto con gobiernos e instituciones de investigación.",

slide9:"Mediante esta cooperación será posible mantener un desarrollo sostenible."

}

};

function trocarIdioma(){

const idioma =
document.getElementById("idioma").value;

document.getElementById("titulo").innerText =
traducoes[idioma].titulo;

document.getElementById("texto-slide2").innerText =
traducoes[idioma].slide2;

document.getElementById("texto-slide3").innerText =
traducoes[idioma].slide3;

document.getElementById("texto-slide4").innerText =
traducoes[idioma].slide4;

document.getElementById("texto-slide5a").innerText =
traducoes[idioma].slide5a;

document.getElementById("texto-slide5b").innerText =
traducoes[idioma].slide5b;

document.getElementById("beneficio1").innerText =
traducoes[idioma].beneficio1;

document.getElementById("beneficio2").innerText =
traducoes[idioma].beneficio2;

document.getElementById("beneficio3").innerText =
traducoes[idioma].beneficio3;

document.getElementById("texto-slide6").innerText =
traducoes[idioma].slide6;

document.getElementById("texto-slide7").innerText =
traducoes[idioma].slide7;

document.getElementById("texto-slide8").innerText =
traducoes[idioma].slide8;

document.getElementById("texto-slide9").innerText =
traducoes[idioma].slide9;
}