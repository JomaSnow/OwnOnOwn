import React from "react";
import { Main, PageTitle, Paragraph } from "./styles";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Display() {
  return (
    <>
      <Navbar currentPage={1} />
      <Main>
        <PageTitle>Sobre</PageTitle>
        <Paragraph>
          Tutor é parte de um trabalho de conclusão de curso para o curso de
          Ciência da Computação pela Universidade de Brasília (UnB). O objetivo
          maior do trabalho em questão é aprimorar conhecimento em cima da
          tecnologia Solid criada por Sir Time Bernes-Lee, o inventor da World
          Wide Web, com a meta de trazer esta tecnologia para o dia-a-dia de
          estudantes e professores da UnB. Para tanto, estão sendo desenvolvidos
          diversos outros trabalhos com o objetivo comum de aprimorar o
          smartUnB.ECOS, um ecossistema social para os alunos de computação da
          UnB idealizado pela Professor Germana Menezes da Nóbrega, orientadora
          deste trabalho.
        </Paragraph>

        <Paragraph>
          O objetivo principal do Tutor não é necessariamente fazer parte deste
          ecossistema, mas sim mostrar como uma aplicação voltada para o meio
          educacional poderia implementar a tecnologia Solid na raíz de seu
          funcionamento, visando principalmente fazer uso da característica de
          interopreabilidade da tecnologia. Isso é alcançado completamente
          quando acrescentamos na equação um segundo projeto que faz parte deste
          mesmo trabalho, uma aplicação que permite alunos da UnB visualizarem o
          cardápio da semana e avaliar os pratos de cada dia, podendo revelar
          intenção de comer no Restaurante Universitário naquele dia, além do
          aspecto social de poder ver quais pratos seus colegas gostam ou não.
        </Paragraph>

        <Paragraph>
          Quanto a esta aplicação em específico, ela consiste em facilitar o
          agendamento de reuniões entre dois estudantes da UnB, permitindo que
          eles vejam horários disponíveis de cada um para se reunirem no Campus.
          A aplicação informa as atualizações às respostas e às propostas de
          reuniões enviadas e recebidas. As informações de compromissos e
          agendas ficam armazenadas nos PODs individuais de cada aluno, sem
          possibilidade que outros escrevam neles. Uma última parte importatne é
          a sugestão de horário para reunir com base no uso da outra aplicação
          deste trabalho; caso ambos alunos demonstrem interesse na refeição
          daquele dia a aplicação recomendará que se reunam naquele horário, sem
          nenhum compartilhamento de dados por parte das aplicações envolvidas.
        </Paragraph>

        <Paragraph>
          Para utilizar o Tutor no total de sua capacidade, o usuário precisa
          ter acesso a um POD, seja um próprio ou algum outro hospedado
          gratuitamente em provedores como https://inrupt.net ou
          https://solidcommunity.net.
        </Paragraph>
      </Main>
      <Footer />
    </>
  );
}
