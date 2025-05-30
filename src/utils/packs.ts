import { ref } from "vue";

export interface Pack {
  id: string;
  title: string;
  routeParam?: string;
  courseName?: string;
  youtubeIntro?: string;
  modules?: string[];
  discount: string;
  originalPrice: string;
  installmentPrice: string;
  fullPrice: string;
  benefits: string[];
  extraBenefit: string;
  link: string;
  description: string;
  icon: string;
  redirect: string;
}

export const cards = <Pack[]>[
  {
    id: "curso-criminologia",
    routeParam: "criminologia",
    modules: ["modulo-mentalidade", "modulo-negacao"],
    youtubeIntro: "https://www.youtube.com/embed/mWGrt7R3MWw",
    courseName: "Criminologia",
    title: "Pacote 1 - Criminologia",
    icon: "mdi-security",
    discount: "10% de desconto por tempo limitado",
    originalPrice: "R$ 249,00",
    installmentPrice: "R$ 14,48",
    fullPrice: "R$ 140,00",
    benefits: [
      "Garantia de 7 dias",
      "Assista pelo celular e computador",
      "Acesso por 1 ano",
    ],
    extraBenefit:
      "Acesso aos módulos Defesa Passiva, Mentalidade, Proteção Residencial, Proteção da Informação e Conduta Defensiva.",
    link: "https://pay.hotmart.com/X94711258W",
    redirect: "https://projetocaopastor.github.io/criminologia.pdf",
    description: `Um curso voltado para você entender como o crime realmente funciona. Pois ele dá gradativamente o tema, nossos instrutores também tratam o assunto com a expertise de quem testou as teorias no campo pratico. Esse conteúdo é indicado para todos aqueles que querem e precisam entender como funciona o crime, bem como a tomada de decisão de um criminoso.`,
  },
  {
    id: "curso-anatomia-do-combate",
    courseName: "Anatomia do combate",
    routeParam: "anatomia-do-combate",
    modules: [
      "modulo-mentalidade",
      "modulo-anatomia-do-combate",
      "modulo-escolhi-reagir",
    ],
    title: "Pacote 2 - Anatomia do combate",
    icon: "mdi-skull-crossbones",
    discount: "10% de desconto por tempo limitado",
    originalPrice: "R$ 799,00",
    installmentPrice: "R$ 61,95",
    fullPrice: "R$ 599,00",
    youtubeIntro: "https://www.youtube.com/embed/trSdFZ0UgXU",
    benefits: [
      "Garantia de 7 dias",
      "Assista pelo celular e computador",
      "Acesso por 1 ano",
    ],
    extraBenefit: "Acesso aos módulos Mentalidade e Anatomia do Combate.",
    link: "https://pay.hotmart.com/G93958528U",
    redirect: "https://projetocaopastor.github.io/anatomiadocombate.pdf",
    description: `Como se comportar em uma crise? Como não se desesperar? Como treinar para ser funcional em um conflito. Entenda os impactos legais que uma crise pode gerar, nesse curso, ensino para o aluno sobre legalidades, riscos, analise risco bem como a fisiologia impacta no combatente. Bem como ensinamos o aluno formas de inocular o estresse. Um conhecimento imprescindível para quem trabalha em condição de crise ou deseja trabalhar. Um operador não deveria ficar sem esses conhecimentos..`,
  },
  {
    id: "curso-conduta-inteligente",
    title: "Pacote 3 - Conduta Inteligente",
    modules: [
      "modulo-negacao",
      "modulo-protetor",
      "modulo-escolhi-reagir",
      "modulo-extra-legitima-defesa",
    ],
    youtubeIntro: "https://www.youtube.com/embed/55XXUZ7Gr8Y",
    courseName: "Conduta Inteligente",
    routeParam: "conduta-inteligente",
    icon: "mdi-eye-check",
    discount: "20% de desconto por tempo limitado",
    originalPrice: "R$ 699,00",
    installmentPrice: "R$ 51,61",
    fullPrice: "R$ 499,00",
    benefits: [
      "Garantia de 7 dias",
      "Assista pelo celular e computador",
      "Acesso por 1 ano",
    ],
    extraBenefit:
      "Acesso aos módulos Negação - Criminologia, Conduta Defensiva, Escolhi Reagir (Mentalidade em momentos de crise) e Legítima Defesa.",
    link: "https://pay.hotmart.com/H94599252R",
    redirect: "https://projetocaopastor.github.io/condutainteligente.pdf",
    description: `Desenvolva uma mentalidade de segurança proativa com o curso 'Conduta Inteligente'. Através de instruções especializadas, você aprenderá a melhorar sua percepção de risco e a se antecipar a crises de segurança, como assaltos. Explore a criminologia, analise os riscos e compreenda a legislação de legítima defesa para agir de forma preventiva em todas as situações. Busque no Google por palavras-chave como segurança, proteção e caveira para encontrar nosso produto e garantir sua tranquilidade.`,
  },
  {
    id: "curso-operador-de-crise",
    title: "Pacote 4 - Operador de crise",
    modules: [
      "modulo-aph",
      "modulo-defesa-pessoal",
      "modulo-instrucao-armamento-e-tiro",
      "modulo-conduta-armada",
      "modulo-anatomia-do-combate",
      "modulo-extra-legitima-defesa",
    ],
    youtubeIntro: "https://www.youtube.com/embed/VZl10S3SPvI",
    courseName: "Operador de Crise",
    routeParam: "operador-de-crise",
    icon: "mdi-target-account",
    discount: "15% de desconto por tempo limitado",
    originalPrice: "R$ 1299,00",
    installmentPrice: "R$ 103,32",
    fullPrice: "R$ 999,00",
    benefits: [
      "Garantia de 7 dias",
      "Assista pelo celular e computador",
      "Acesso por 1 ano",
    ],
    extraBenefit:
      "Acesso aos módulos APH, Defesa Pessoal, Instrução de Tiro, Conduta Armada, Anatomia do Combate e Legítima Defesa.",
    link: "https://pay.hotmart.com/W93957364R",
    redirect: "https://projetocaopastor.github.io/operadordecrise.pdf",
    description: `Torne-se um OPERADOR com o curso 'Operador de Crise'. Aprenda técnicas avançadas DE DEFESA, atendimento pré-hospitalar, e o uso de armas de fogo com segurança e precisão. Desenvolva habilidades para enfrentar situações de risco e garantir a proteção ativa de sua vida e das pessoas ao seu redor.`,
  },
  {
    id: "curso-protetor",
    title: "Pacote 5 - Protetor",
    modules: [
      "modulo-mentalidade",
      "modulo-defesa-passiva",
      "modulo-protecao-residencial",
      "modulo-protecao-da-informacao",
      "modulo-protetor",
    ],
    youtubeIntro: "https://www.youtube.com/embed/bk7r-HlbBkA",
    courseName: "Protetor",
    routeParam: "protetor",
    icon: "mdi-security",
    discount: "10% de desconto por tempo limitado",
    originalPrice: "R$ 1099,00",
    installmentPrice: "R$ 82,43",
    fullPrice: "R$ 797,00",
    benefits: [
      "Garantia de 7 dias",
      "Assista pelo celular e computador",
      "Acesso por 1 ano",
    ],
    extraBenefit:
      "Acesso aos módulos Defesa Passiva, Mentalidade, Proteção Residencial, Proteção da Informação e Conduta Defensiva.",
    link: "https://pay.hotmart.com/V94796189N?off=41hagyaa",
    redirect: "https://projetocaopastor.github.io/protetor.pdf",
    description: `Descubra como proteger você e sua família com o curso 'Conduta Defensiva'. Aprenda a desenvolver uma mentalidade de segurança, proteger sua residência e informações pessoais, e adotar uma conduta defensiva eficaz. Ideal para quem busca uma abordagem preventiva e segura para proteger o que mais importa.`,
  },
  {
    id: "curso-programa-de-protecao",
    title: "Pacote 6 - Programa de Proteção",
    modules: ["modulo-programa-de-protecao"],
    // youtubeIntro: "https://www.youtube.com/embed/bk7r-HlbBkA",
    courseName: "Programa de Proteção - Guia Prático de Sobrevivência Urbana",
    routeParam: "programa-de-protecao",
    icon: "mdi-security",
    discount: "10% de desconto por tempo limitado",
    originalPrice: "R$ 597,00",
    installmentPrice: "R$ 41,06",
    fullPrice: "R$ 397,00",
    benefits: [
      "Garantia de 7 dias",
      "Assista pelo celular e computador",
      "Acesso por 1 ano",
    ],
    extraBenefit:
      "Acesso aos módulos Defesa Passiva, Mentalidade, Proteção Residencial, Proteção da Informação e Conduta Defensiva.",
    link: "https://go.hotmart.com/E95659790K",
    redirect: "https://projetocaopastor.github.io/protetor.pdf",
    description: `
    Nosso curso é um guia essencial para quem deseja se proteger e proteger sua família em situações de risco. Aplicado de forma presencial, ele foi desenvolvido com o objetivo de instruir especialmente mulheres sobre como prevenir a violência, com foco na antecipação das crises e minimização de danos. Utilizamos técnicas práticas e acessíveis para garantir que qualquer pessoa, especialmente civis desarmados e aqueles em condições de vulnerabilidade, estejam preparados para agir com eficácia.<br><br>

Este curso é ideal para:<br>

- Civis desarmados que buscam estratégias eficientes para evitar confrontos;<br>

- Pais e familiares que desejam instruir seus entes queridos em práticas preventivas;<br>

- Instrutores de defesa pessoal que procuram melhorar a qualidade de seus treinamentos com foco na prevenção;<br>

- Mulheres em condição de vulnerabilidade, oferecendo-lhes ferramentas práticas e mentais para maior segurança.<br><br>

Nosso conteúdo integra neurociência, segurança pessoal e estratégias preventivas baseadas em estudos comprovados, formando um currículo completo que capacita o aluno a antecipar ameaças e tomar decisões seguras antes que uma crise se instale.<br>`,
  },
];

export const mainPack: Pack = {
  id: "curso-cao-pastor",
  title: "Turma Master",
  modules: [],
  youtubeIntro: "https://www.youtube.com/embed/YwKw8UwT1CQ",
  courseName: "Proteção e Segurança - Turma Master",
  routeParam: "cao-pastor",
  icon: "mdi-package-variant-closed",
  discount: "10% de desconto por tempo limitado",
  originalPrice: "R$ 2399,00",
  installmentPrice: "R$ 196,40",
  fullPrice: "R$ 1899,00",
  benefits: [
    "Grupo exclusivo para alunos",
    "Garantia de 7 dias",
    "Assista pelo celular e computador",
    "Acesso por 1 ano",
  ],
  extraBenefit: "",
  link: "https://pay.hotmart.com/I77956669P",
  redirect: "https://projetocaopastor.github.io/cursocaopastor.pdf",
  description: `O Curso de Proteção e Segurança foi criado para ajudar a você que quer aprender ou se especializar em segurança, que gosta de armamento e tiro e que deseja não só preservar a sua vida e a da sua família, mas aprender como exercer o seu direito de defesa. Entendemos que um Cão Pastor pode ser formado pelo adestrador ou pela matilha e essa é a nossa missão, fazendo a ponte entre conhecimento pertinente para todo o cidadão de bem. Nós iremos treiná-los a desenvolverem a mentalidade ativa e as técnicas para sobreviverem aos mais variados eventos de crise. Você vai estar treinado para fazer o máximo na garantia da sua proteção pessoal, familiar, patrimonial e empresarial, evoluindo diretamente na conquista dos seus objetivos. Esse curso é voltado para o público iniciante e para aqueles que já possuem alguma experiência. Acreditamos no seu potencial e vamos levá-lo ao seu máximo, mas, é essencial que você assuma o compromisso e realize as missões ao final de cada módulo! E aí, esta pronto para se tornar um Cão Pastor? "Você só faz o que treina!"`,
};
