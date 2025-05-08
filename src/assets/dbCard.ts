import { interfaceCard } from "./types"

export const wordArray: interfaceCard[] = [
  { front: "the", back: "o/a/os/as" },
  { front: "be", back: "ser/estar" },
  { front: "to", back: "para/a" },
  { front: "of", back: "de" },
  { front: "and", back: "e" },
  { front: "a", back: "um/uma" },
  { front: "in", back: "em" },
  { front: "that", back: "que/aquele" },
  { front: "have", back: "ter" },
  { front: "I", back: "eu" },
  { front: "it", back: "isso/ele/ela" },
  { front: "for", back: "para/por" },
  { front: "not", back: "não" },
  { front: "on", back: "em/sobre" },
  { front: "with", back: "com" },
  { front: "he", back: "ele" },
  { front: "as", back: "como" },
  { front: "you", back: "você" },
  { front: "do", back: "fazer" },
  { front: "at", back: "em/para" },
  { front: "this", back: "este/esta" },
  { front: "but", back: "mas" },
  { front: "his", back: "dele" },
  { front: "by", back: "por" },
  { front: "from", back: "de/desde" },
  { front: "they", back: "eles/elas" },
  { front: "we", back: "nós" },
  { front: "say", back: "dizer" },
  { front: "her", back: "dela" },
  { front: "she", back: "ela" },
  { front: "or", back: "ou" },
  { front: "an", back: "um/uma" },
  { front: "will", back: "vai/vão (futuro)" },
  { front: "my", back: "meu/minha" },
  { front: "one", back: "um/uma" },
  { front: "all", back: "todos/todas" },
  { front: "would", back: "iria/eria (condicional)" },
  { front: "there", back: "lá/ali" },
  { front: "their", back: "deles/delas" },
  { front: "what", back: "o que" },
  { front: "so", back: "então/tão" },
  { front: "up", back: "para cima" },
  { front: "out", back: "fora" },
  { front: "if", back: "se" },
  { front: "about", back: "sobre" },
  { front: "who", back: "quem" },
  { front: "get", back: "obter/conseguir" },
  { front: "which", back: "qual/quais" },
  { front: "go", back: "ir" },
  { front: "me", back: "me/mim" },
  { front: "when", back: "quando" },
  { front: "make", back: "fazer" },
  { front: "can", back: "poder" },
  { front: "like", back: "gostar/como" },
  { front: "time", back: "tempo/hora" },
  { front: "no", back: "não" },
  { front: "just", back: "apenas" },
  { front: "him", back: "ele" },
  { front: "know", back: "saber/conhecer" },
  { front: "take", back: "pegar/tomar" },
  { front: "people", back: "pessoas" },
  { front: "into", back: "para dentro" },
  { front: "year", back: "ano" },
  { front: "your", back: "seu/sua" },
  { front: "good", back: "bom/boa" },
  { front: "some", back: "alguns/algumas" },
  { front: "could", back: "poderia" },
  { front: "them", back: "eles/elas" },
  { front: "see", back: "ver" },
  { front: "other", back: "outro/outra" },
  { front: "than", back: "do que" },
  { front: "then", back: "então" },
  { front: "now", back: "agora" },
  { front: "look", back: "olhar" },
  { front: "only", back: "apenas" },
  { front: "come", back: "vir" },
  { front: "its", back: "dele/dela (coisas)" },
  { front: "over", back: "sobre/acima" },
  { front: "think", back: "pensar" },
  { front: "also", back: "também" },
  { front: "back", back: "costas/voltar" },
  { front: "after", back: "depois" },
  { front: "use", back: "usar" },
  { front: "two", back: "dois/duas" },
  { front: "how", back: "como" },
  { front: "our", back: "nosso/nossa" },
  { front: "work", back: "trabalho/trabalhar" },
  { front: "first", back: "primeiro" },
  { front: "well", back: "bem" },
  { front: "way", back: "caminho/maneira" },
  { front: "even", back: "mesmo/até" },
  { front: "new", back: "novo" },
  { front: "want", back: "querer" },
  { front: "because", back: "porque" },
  { front: "any", back: "qualquer" },
  { front: "these", back: "estes/estas" },
  { front: "give", back: "dar" },
  { front: "day", back: "dia" },
  { front: "most", back: "mais" },
  { front: "us", back: "nós" }
]

export const awsArray: interfaceCard[] = [

  {
    front: "O que é computação em nuvem?",
    back: "A computação em nuvem é um modelo de entrega de serviços de computação, armazenamento, banco de dados, rede e outros recursos pela internet.",
    tag: "Conceitos Básicos"
  },
  {
    front: "Qual é o modelo de responsabilidade compartilhada na AWS?",
    back: "A AWS é responsável pela segurança da nuvem, enquanto o cliente é responsável pela segurança na nuvem.",
    tag: "Segurança"
  },
  {
    front: "O que é uma zona de disponibilidade na AWS?",
    back: "Uma localização física isolada dentro de uma região da AWS, com infraestrutura independente para oferecer resiliência e alta disponibilidade.",
    tag: "Infraestrutura"
  },
  {
    front: "O que é o Amazon EC2 (Elastic Compute Cloud)?",
    back: "Serviço de computação em nuvem que permite criar e gerenciar instâncias virtuais com diversos sistemas operacionais.",
    tag: "Computação"
  },
  {
    front: "O que é o Amazon S3 (Simple Storage Service)?",
    back: "Serviço de armazenamento de objetos altamente escalável, seguro e com alta durabilidade.",
    tag: "Armazenamento"
  },
  {
    front: "O que é o AWS Lambda?",
    back: "Serviço de computação serverless que executa funções sob demanda sem necessidade de provisionar servidores.",
    tag: "Serverless"
  },
  {
    front: "O que é o Amazon RDS?",
    back: "Serviço gerenciado de banco de dados relacional que facilita a configuração, operação e escalabilidade.",
    tag: "Banco de Dados"
  },
  {
    front: "O que é o Amazon CloudWatch?",
    back: "Serviço de monitoramento e observabilidade para recursos da AWS e aplicações.",
    tag: "Monitoramento"
  },
  {
    front: "O que é o Amazon VPC?",
    back: "Serviço que permite provisionar uma rede isolada logicamente na nuvem.",
    tag: "Rede"
  },
  {
    front: "O que é o AWS IAM?",
    back: "Serviço para controle de acesso aos recursos da AWS de forma segura e granular.",
    tag: "Segurança"
  },
  {
    front: "O que é o Amazon CloudFront?",
    back: "Rede de distribuição de conteúdo (CDN) que acelera a entrega de conteúdo estático e dinâmico.",
    tag: "Rede"
  },
  {
    front: "O que é o Amazon Route 53?",
    back: "Serviço de DNS que gerencia nomes de domínio e roteamento de tráfego.",
    tag: "Rede"
  },
  {
    front: "O que é o AWS CloudFormation?",
    back: "Serviço que permite criar e gerenciar recursos da AWS com arquivos de modelo como código.",
    tag: "Infraestrutura como Código"
  },
  {
    front: "O que é o Amazon S3 Glacier?",
    back: "Serviço de armazenamento para arquivamento de dados de longo prazo com baixo custo.",
    tag: "Armazenamento"
  },
  {
    front: "O que é o AWS CloudTrail?",
    back: "Serviço de auditoria que registra ações feitas na conta da AWS para fins de conformidade e segurança.",
    tag: "Auditoria"
  },
  {
    front: "O que é o AWS Elastic Beanstalk?",
    back: "Plataforma para implantação e gerenciamento de aplicações web sem necessidade de infraestrutura detalhada.",
    tag: "Implantação"
  },
  {
    front: "O que é o Amazon SNS?",
    back: "Serviço de mensagens para envio de notificações por diversos canais.",
    tag: "Mensageria"
  },
  {
    front: "O que é o Amazon SQS?",
    back: "Serviço de filas gerenciado para desacoplar e escalar sistemas distribuídos.",
    tag: "Mensageria"
  },
  {
    front: "O que é o AWS Well-Architected Framework?",
    back: "Conjunto de boas práticas para projetar, construir e manter cargas de trabalho na AWS.",
    tag: "Boas Práticas"
  },
  {
    front: "O que é o Amazon EBS?",
    back: "Serviço de armazenamento em bloco para uso com instâncias EC2.",
    tag: "Armazenamento"
  },
  {
    front: "O que é o Amazon Aurora?",
    back: "Banco de dados relacional compatível com MySQL e PostgreSQL, otimizado para nuvem.",
    tag: "Banco de Dados"
  },
  {
    front: "O que é o AWS Trusted Advisor?",
    back: "Ferramenta que fornece recomendações para ajudar a seguir boas práticas de segurança, custo e desempenho.",
    tag: "Otimização"
  },
  {
    front: "O que é o Amazon Lightsail?",
    back: "Serviço que fornece instâncias de computação, armazenamento e rede simplificadas para pequenos projetos.",
    tag: "Computação"
  },
  {
    front: "O que é o Amazon DynamoDB e qual é a sua função?",
    back: "O Amazon DynamoDB é um serviço de banco de dados NoSQL altamente escalável e totalmente gerenciado. Ele oferece armazenamento e recuperação de dados de baixa latência e alta disponibilidade, sendo adequado para aplicativos que exigem desempenho rápido e dimensionamento automático.",
    tag: "Banco de Dados"
  },
  {
    front: "O que é o AWS CloudFront e qual é a sua finalidade?",
    back: "O AWS CloudFront é um serviço de CDN (Content Delivery Network) que acelera a entrega de conteúdo estático e dinâmico aos usuários finais. Ele armazena em cache o conteúdo em pontos de presença globais, reduzindo a latência e melhorando a experiência do usuário.",
    tag: "Rede"
  },
  {
    front: "O que é o Amazon EMR (Elastic MapReduce) e como ele é usado?",
    back: "O Amazon EMR é um serviço que facilita a execução de grandes cargas de trabalho de processamento e análise de dados usando frameworks populares, como Apache Hadoop e Spark. Ele provisiona e gerencia clusters de computação escaláveis para lidar com essas cargas de trabalho.",
    tag: "Análise de Dados"
  },
  {
    front: "O que é o AWS Glue e como ele é usado?",
    back: "O AWS Glue é um serviço de preparação e transformação de dados. Ele permite descobrir, catalogar e transformar dados de várias fontes para uso em análises, data lakes e data warehouses. O Glue também automatiza tarefas de ETL (Extract, Transform, Load).",
    tag: "Análise de Dados"
  },
  {
    front: "O que é o AWS Direct Connect e qual é a sua finalidade?",
    back: "O AWS Direct Connect é um serviço que estabelece uma conexão de rede dedicada entre o ambiente local de um cliente e a infraestrutura da AWS. Ele oferece uma conexão privada e de baixa latência, permitindo a transferência segura de dados entre os ambientes.",
    tag: "Rede"
  },
  {
    front: "O que é o AWS Secrets Manager e como ele é usado?",
    back: "O AWS Secrets Manager é um serviço que ajuda a proteger informações sensíveis, como senhas, chaves de API e tokens, armazenando-os de forma segura. Ele permite gerenciar e rotear de forma centralizada segredos para aplicativos e serviços da AWS.",
    tag: "Segurança"
  },
  {
    front: "O que é o Amazon SQS (Simple Queue Service) e qual é a sua finalidade?",
    back: "O Amazon SQS é um serviço de mensagens que permite a comunicação assíncrona entre componentes de um sistema distribuído. Ele permite que as mensagens sejam enviadas, armazenadas e processadas de forma confiável e escalável.",
    tag: "Mensageria"
  },
  {
    front: "O que é o Amazon Kinesis e como ele é usado?",
    back: "O Amazon Kinesis é um serviço de streaming de dados que permite capturar, processar e analisar grandes volumes de dados em tempo real. Ele é frequentemente usado para aplicativos de streaming, análise de logs, IoT e análise em tempo real.",
    tag: "Análise de Dados"
  },
  {
    front: "O que é o AWS Step Functions e qual é a sua finalidade?",
    back: "O AWS Step Functions é um serviço que permite coordenar e orquestrar fluxos de trabalho distribuídos baseados em estado. Ele ajuda a construir e visualizar fluxos de trabalho complexos, controlando a execução passo a passo de cada etapa.",
    tag: "Orquestração"
  },
  {
    front: "O que é o Amazon CloudSearch e qual é a sua finalidade?",
    back: "O Amazon CloudSearch é um serviço de pesquisa gerenciado que permite adicionar funcionalidades de pesquisa avançada a aplicativos e sites. Ele oferece recursos de pesquisa em texto completo, filtragem, classificação e destacamento de resultados.",
    tag: "Pesquisa"
  },
  {
    front: "O que é o Amazon Redshift e como ele é usado?",
    back: "O Amazon Redshift é um serviço de data warehousing que oferece análise rápida e escalável de grandes conjuntos de dados. Ele é projetado para consultas de data warehousing e análises de negócios, oferecendo alto desempenho e escalabilidade.",
    tag: "Análise de Dados"
  },
  {
    front: "O que é o AWS Batch e como ele é usado?",
    back: "O AWS Batch é um serviço que permite executar cargas de trabalho em lote de forma eficiente e escalável. Ele gerencia a execução de tarefas em contêineres ou instâncias EC2, otimizando o uso de recursos e facilitando a execução de trabalhos em lote.",
    tag: "Computação"
  },
  {
    front: "O que é o AWS CloudHSM e qual é a sua finalidade?",
    back: "O AWS CloudHSM é um serviço de gerenciamento de chaves de criptografia baseado em hardware. Ele oferece recursos de segurança e conformidade, permitindo a geração, o armazenamento e o uso de chaves criptográficas em um ambiente seguro e controlado.",
    tag: "Segurança"
  },
  {
    front: "O que é o AWS Data Pipeline e como ele é usado?",
    back: "O AWS Data Pipeline é um serviço que permite orquestrar e automatizar o processamento e a transferência de dados entre diferentes serviços e aplicativos. Ele facilita o fluxo de dados entre fontes, transformações e destinos, oferecendo suporte a programação e monitoramento.",
    tag: "Análise de Dados"
  },
  {
    front: "O que é o AWS Organizations e qual é a sua função?",
    back: "O AWS Organizations é um serviço que ajuda a gerenciar várias contas da AWS de forma centralizada. Ele permite criar hierarquias de contas, definir políticas de acesso e consolidar a faturação, facilitando o gerenciamento e o controle de várias contas da AWS.",
    tag: "Gerenciamento"
  },
  {
    front: "O que é o AWS Snowball e como ele é usado?",
    back: "O AWS Snowball é um serviço que permite transferir grandes volumes de dados para a AWS de forma rápida e segura. Ele fornece um dispositivo físico resistente que é enviado para você, permitindo que você transfira seus dados offline para a nuvem.",
    tag: "Armazenamento"
  },
  {
    front: "O que é o AWS Lambda e qual é a sua finalidade?",
    back: "O AWS Lambda é um serviço de computação sem servidor que permite executar código sem precisar provisionar ou gerenciar servidores. Ele é usado para executar trechos de código em resposta a eventos, de forma escalável e com cobrança baseada no tempo de execução.",
    tag: "Compute"
  },
  {
    front: "O que é o AWS Batch e como ele é usado?",
    back: "O AWS Batch é um serviço que permite executar cargas de trabalho em lote de forma eficiente e escalável. Ele gerencia a execução de tarefas em contêineres ou instâncias EC2, otimizando o uso de recursos e facilitando a execução de trabalhos em lote.",
    tag: "Compute"
  },
  {
    front: "O que é o AWS CloudHSM e qual é a sua finalidade?",
    back: "O AWS CloudHSM é um serviço de gerenciamento de chaves de criptografia baseado em hardware. Ele oferece recursos de segurança e conformidade, permitindo a geração, o armazenamento e o uso de chaves criptográficas em um ambiente seguro e controlado.",
    tag: "Security"
  },
  {
    front: "O que é o AWS Data Pipeline e como ele é usado?",
    back: "O AWS Data Pipeline é um serviço que permite orquestrar e automatizar o processamento e a transferência de dados entre diferentes serviços e aplicativos. Ele facilita o fluxo de dados entre fontes, transformações e destinos, oferecendo suporte a programação e monitoramento.",
    tag: "Data"
  },
  {
    front: "O que é o AWS Organizations e qual é a sua função?",
    back: "O AWS Organizations é um serviço que ajuda a gerenciar várias contas da AWS de forma centralizada. Ele permite criar hierarquias de contas, definir políticas de acesso e consolidar a faturação, facilitando o gerenciamento e o controle de várias contas da AWS.",
    tag: "Governance"
  },
  {
    front: "O que é o AWS Snowball e como ele é usado?",
    back: "O AWS Snowball é um serviço que permite transferir grandes volumes de dados para a AWS de forma rápida e segura. Ele fornece um dispositivo físico resistente que é enviado para você, permitindo que você transfira seus dados offline para a nuvem.",
    tag: "Storage"
  },
  {
    front: "O que é o AWS CloudWatch Logs e como ele é usado?",
    back: "O AWS CloudWatch Logs é um serviço que permite monitorar, armazenar e acessar logs de aplicativos e recursos da AWS. Ele coleta registros de várias fontes e oferece recursos de pesquisa, análise e visualização de logs.",
    tag: "Monitoring"
  },
  {
    front: "O que é o AWS Storage Gateway e qual é a sua finalidade?",
    back: "O AWS Storage Gateway é um serviço que permite integrar o armazenamento local com a nuvem da AWS. Ele oferece um gateway virtual que permite armazenar e recuperar dados na nuvem, tornando-os acessíveis localmente por aplicativos e serviços.",
    tag: "Storage"
  },
  {
    front: "O que é o AWS X-Ray e como ele é usado?",
    back: "O AWS X-Ray é um serviço de análise e depuração de aplicativos distribuídos. Ele permite rastrear e analisar solicitações à medida que atravessam vários componentes e serviços, identificando gargalos, erros e otimizando o desempenho do aplicativo.",
    tag: "Monitoring"
  },
  {
    front: "O que é o AWS IoT (Internet of Things) e qual é a sua finalidade?",
    back: "O AWS IoT é um serviço que permite conectar dispositivos à nuvem da AWS, facilitando a coleta, o processamento e o gerenciamento de dados de IoT. Ele fornece recursos para segurança, registro de dispositivos, comunicação e análise de dados de IoT.",
    tag: "IoT"
  },
  {
    front: "O que é o Amazon Neptune e como ele é usado?",
    back: "O Amazon Neptune é um serviço de banco de dados de grafo totalmente gerenciado. Ele permite armazenar, consultar e processar dados de grafo, sendo usado para casos de uso como análise de redes sociais, recomendações personalizadas e detecção de fraudes.",
    tag: "Database"
  },
  {
    front: "O que é o Amazon Aurora e como ele é usado?",
    back: "O Amazon Aurora é um serviço de banco de dados relacional compatível com MySQL e PostgreSQL. Ele oferece alta disponibilidade, durabilidade e desempenho, sendo usado para aplicativos que exigem um banco de dados relacional escalável e de alto desempenho.",
    tag: "Database"
  },
  {
    front: "O que é o AWS Firewall Manager e qual é a sua finalidade?",
    back: "O AWS Firewall Manager é um serviço que simplifica o gerenciamento de regras de firewall em várias contas e recursos da AWS. Ele permite centralizar a configuração e o monitoramento de firewalls, garantindo a conformidade e a segurança em toda a organização.",
    tag: "Security"
  },
  {
    front: "O que é o AWS Backup e como ele é usado?",
    back: "O AWS Backup é um serviço de backup e recuperação de dados que simplifica a proteção de dados na nuvem da AWS. Ele permite configurar políticas de backup automatizadas, fazer backups sob demanda e restaurar dados de maneira fácil e rápida.",
    tag: "Storage"
  },
  {
    front: "O que é o AWS CodeDeploy e qual é a sua finalidade?",
    back: "O AWS CodeDeploy é um serviço de implantação automatizada de aplicativos. Ele facilita a implantação de aplicativos em instâncias EC2, contêineres, servidores localizados e serviços da AWS, automatizando o processo de implantação e permitindo a atualização contínua de aplicativos.",
    tag: "DevOps"
  },
  {
    front: "O que é o AWS CodePipeline e como ele é usado?",
    back: "O AWS CodePipeline é um serviço de entrega contínua que permite criar, testar e implantar automaticamente aplicativos. Ele permite criar pipelines de implantação que automatizam o processo de liberação de software, desde a construção até a implantação em produção.",
    tag: "DevOps"
  },
  {
    front: "O que é o AWS CodeCommit e qual é a sua finalidade?",
    back: "O AWS CodeCommit é um serviço de hospedagem de repositório de controle de versão. Ele oferece um ambiente seguro e escalável para armazenar e gerenciar o código-fonte de aplicativos, facilitando a colaboração e o controle de versões.",
    tag: "DevOps"
  },
  {
    front: "O que é o AWS CodeBuild e como ele é usado?",
    back: "O AWS CodeBuild é um serviço de compilação de código que compila, testa e gera artefatos de software. Ele é usado para automatizar o processo de compilação de aplicativos, oferecendo um ambiente escalável e gerenciado para compilar código.",
    tag: "DevOps"
  },
  {
    front: "O que é o AWS CodeStar e qual é a sua finalidade?",
    back: "O AWS CodeStar é um serviço que simplifica o desenvolvimento de aplicativos na nuvem da AWS. Ele oferece um ambiente de desenvolvimento integrado (IDE), modelos de projeto pré-configurados e integração com outros serviços de desenvolvimento da AWS.",
    tag: "DevOps"
  },
  {
    front: "O que é o AWS Cloud9 e como ele é usado?",
    back: "O AWS Cloud9 é um ambiente de desenvolvimento baseado na nuvem. Ele oferece um IDE online que permite escrever, executar e depurar código em um navegador web, simplificando o desenvolvimento de aplicativos sem a necessidade de configuração local.",
    tag: "DevOps"
  },
  {
    front: "O que é o AWS AppSync e qual é a sua finalidade?",
    back: "O AWS AppSync é um serviço que permite criar APIs flexíveis e escaláveis para aplicativos móveis e web. Ele facilita a conexão com fontes de dados, como bancos de dados, serviços da AWS e APIs personalizadas, permitindo a consulta e a atualização de dados em tempo real.",
    tag: "App Services"
  },
  {
    front: "O que é o AWS RoboMaker e como ele é usado?",
    back: "O AWS RoboMaker é um serviço que facilita o desenvolvimento, a simulação e a implantação de aplicativos de robótica. Ele oferece um ambiente de simulação 3D e ferramentas para construir, testar e implantar aplicativos de robótica de forma escalável e eficiente.",
    tag: "Robotics"
  },
  {
    front: "O que é o AWS DataSync e qual é a sua finalidade?",
    back: "O AWS DataSync é um serviço que simplifica a transferência de dados entre locais on-premise e a nuvem da AWS. Ele permite mover grandes volumes de dados de maneira rápida, segura e automatizada, facilitando a migração e o backup de dados.",
    tag: "Storage"
  },
  {
    front: "O que é o AWS Transfer for SFTP e como ele é usado?",
    back: "O AWS Transfer for SFTP é um serviço que permite transferir arquivos de forma segura usando o protocolo SFTP (SSH File Transfer Protocol). Ele facilita a migração de cargas de trabalho SFTP para a nuvem da AWS, oferecendo segurança e gerenciamento centralizado.",
    tag: "Storage"
  },
  {
    front: "O que é o AWS WAF (Web Application Firewall) e qual é a sua finalidade?",
    back: "O AWS WAF é um serviço de firewall de aplicativos web que protege aplicativos contra ataques comuns na web. Ele permite definir regras personalizadas de filtragem de tráfego e oferece proteção contra ataques, como injeção de SQL, cross-site scripting e DDoS (Distributed Denial of Service).",
    tag: "Security"
  },
  {
    front: "O que é o AWS Managed Services e qual é a sua função?",
    back: "O AWS Managed Services é um serviço que fornece operações gerenciadas para infraestrutura e aplicativos na nuvem da AWS. Ele ajuda a gerenciar e operar recursos da AWS de maneira eficiente, garantindo conformidade, segurança e desempenho otimizado.",
    tag: "Management"
  },
  {
    front: "O que é o AWS Outposts e como ele é usado?",
    back: "O AWS Outposts é um serviço que estende a infraestrutura da AWS para o ambiente local de um cliente. Ele permite executar serviços da AWS em data centers locais, oferecendo uma experiência consistente entre a nuvem da AWS e o ambiente local.",
    tag: "Hybrid"
  }

];

export const awsQuestions: interfaceCard[] = [
  { front: "O que é computação em nuvem?", back: "Entrega de recursos de TI sob demanda pela internet, com pagamento conforme o uso.", tag: "cloud" },
  { front: "Quais são os três tipos de modelo de implantação em nuvem?", back: "Nuvem pública, privada e híbrida.", tag: "cloud" },
  { front: "Qual a diferença entre IaaS, PaaS e SaaS?", back: "IaaS fornece infraestrutura, PaaS fornece plataforma para desenvolvimento, SaaS fornece software pronto.", tag: "cloud" },
  { front: "O que é alta disponibilidade?", back: "Capacidade de um sistema continuar funcionando mesmo com falhas.", tag: "cloud" },
  { front: "O que significa escalabilidade horizontal e vertical?", back: "Horizontal: mais instâncias. Vertical: instâncias maiores.", tag: "cloud" },
  { front: "O que é elasticidade na computação em nuvem?", back: "Capacidade de ajustar recursos automaticamente conforme a demanda.", tag: "cloud" },
  { front: "Quais são os benefícios da computação em nuvem?", back: "Escalabilidade, custo sob demanda, agilidade, disponibilidade global.", tag: "cloud" },
  { front: "O que é uma região na AWS?", back: "Área geográfica onde os datacenters da AWS estão localizados.", tag: "cloud" },
  { front: "O que é uma zona de disponibilidade (AZ)?", back: "Um ou mais datacenters isolados dentro de uma região.", tag: "cloud" },
  { front: "O que é latência e por que é importante?", back: "Tempo de resposta da rede; importante para desempenho de aplicações.", tag: "cloud" },

  { front: "O que é o AWS IAM?", back: "Serviço de gerenciamento de identidade e acesso.", tag: "sec" },
  { front: "Qual a diferença entre usuário, grupo e função no IAM?", back: "Usuário: identidade individual. Grupo: conjunto de usuários. Função: acesso temporário.", tag: "sec" },
  { front: "O que é uma política no IAM?", back: "Documento JSON que define permissões.", tag: "sec" },
  { front: "O que é a responsabilidade compartilhada na AWS?", back: "AWS é responsável pela nuvem, o cliente é responsável no que está na nuvem.", tag: "sec" },
  { front: "O que é MFA?", back: "Autenticação multifator: requer algo que você sabe + algo que você tem.", tag: "sec" },
  { front: "O que é o AWS Organizations?", back: "Serviço para gerenciamento de várias contas AWS.", tag: "sec" },
  { front: "Qual serviço permite auditoria e rastreabilidade de ações?", back: "AWS CloudTrail.", tag: "sec" },
  { front: "O que é o AWS Shield?", back: "Serviço de proteção contra ataques DDoS.", tag: "sec" },
  { front: "Qual serviço protege contra DDoS?", back: "AWS Shield (Standard e Advanced).", tag: "sec" },
  { front: "Qual serviço permite gerenciamento de chaves de criptografia?", back: "AWS KMS (Key Management Service).", tag: "sec" },

  { front: "O que é o Amazon EC2?", back: "Serviço de máquinas virtuais escaláveis.", tag: "tech" },
  { front: "O que é o Amazon S3?", back: "Serviço de armazenamento de objetos escalável e durável.", tag: "tech" },
  { front: "O que é o Amazon RDS?", back: "Serviço gerenciado de bancos de dados relacionais.", tag: "tech" },
  { front: "Qual a diferença entre EC2 e Lambda?", back: "EC2 é servidor virtual gerenciado. Lambda executa código sem servidor.", tag: "tech" },
  { front: "O que é o Amazon VPC?", back: "Rede virtual privada para recursos AWS.", tag: "tech" },
  { front: "O que é um bucket no S3?", back: "Contêiner onde objetos (arquivos) são armazenados.", tag: "tech" },
  { front: "O que é o Amazon CloudFront?", back: "Rede de entrega de conteúdo (CDN).", tag: "tech" },
  { front: "O que é o Amazon Route 53?", back: "Serviço de DNS escalável e de alta disponibilidade.", tag: "tech" },
  { front: "O que é o AWS Elastic Load Balancer?", back: "Distribui o tráfego entre múltiplas instâncias.", tag: "tech" },
  { front: "Qual serviço gerencia containers na AWS?", back: "Amazon ECS ou Amazon EKS.", tag: "tech" },

  { front: "Quais são os modelos de precificação da AWS?", back: "Sob demanda, instâncias reservadas, instâncias spot.", tag: "bill" },
  { front: "O que é o AWS Free Tier?", back: "Nível gratuito de uso limitado para novos usuários AWS.", tag: "bill" },
  { front: "Qual ferramenta permite estimar custos na AWS?", back: "AWS Pricing Calculator.", tag: "bill" },
  { front: "O que é o AWS Cost Explorer?", back: "Ferramenta para visualizar e analisar gastos.", tag: "bill" },
  { front: "O que é o Consolidated Billing?", back: "Consolida cobranças de múltiplas contas em uma só fatura.", tag: "bill" },
  { front: "Qual a diferença entre contas vinculadas e conta-mãe?", back: "Conta-mãe paga e gerencia contas vinculadas no AWS Organizations.", tag: "bill" },
  { front: "O que é o AWS Budgets?", back: "Ferramenta para definir alertas e limites de gastos.", tag: "bill" },
  { front: "O que é o TCO Calculator?", back: "Ferramenta que compara custos locais vs AWS.", tag: "bill" },
  { front: "Quais são os níveis de suporte da AWS?", back: "Basic, Developer, Business e Enterprise.", tag: "bill" },
  { front: "O que o plano de suporte Developer oferece?", back: "Acesso a engenheiros da AWS para orientações em horário comercial.", tag: "bill" },

  { front: "O que é arquitetura sem servidor?", back: "Execução de código sem gerenciar servidores (ex: AWS Lambda).", tag: "arch" },
  { front: "O que é o Well-Architected Framework?", back: "Conjunto de boas práticas de arquitetura na AWS.", tag: "arch" },
  { front: "O que é o pilar de confiabilidade?", back: "Foco em recuperação, tolerância a falhas e disponibilidade.", tag: "arch" },
  { front: "O que é o pilar de desempenho?", back: "Foco em recursos eficientes e dimensionamento correto.", tag: "arch" },
  { front: "Quais são os 5 pilares do Well-Architected Framework?", back: "Excelência operacional, segurança, confiabilidade, desempenho e otimização de custos.", tag: "arch" },
  { front: "O que é o princípio do menor privilégio?", back: "Conceder apenas permissões mínimas necessárias.", tag: "arch" },
  { front: "O que é uma estratégia multi-AZ?", back: "Implantar recursos em várias zonas de disponibilidade para alta disponibilidade.", tag: "arch" },
  { front: "O que é o Auto Scaling?", back: "Ajuste automático de capacidade com base em demanda.", tag: "arch" },
  { front: "Como o S3 garante durabilidade de dados?", back: "Armazenando cópias redundantes em várias zonas de disponibilidade.", tag: "arch" },
  { front: "O que significa projetar para falhas?", back: "Pressupor falhas e criar sistemas que se recuperem automaticamente.", tag: "arch" }
];