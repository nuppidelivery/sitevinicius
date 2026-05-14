export const metadata = {
  title: 'Política de Privacidade | Vinícius Valente',
  description: 'Nossa política de privacidade e termos de uso de dados.',
};

export default function Privacidade() {
  return (
    <main className="flex-1 flex flex-col w-full pt-32 pb-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-10 text-primary">Política de Privacidade</h1>
        
        <div className="prose prose-invert max-w-none text-muted leading-relaxed">
          <p className="mb-6">
            A sua privacidade é importante para nós. É nossa política respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar em nosso site e outros sites que possuímos e operamos.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">1. Informações que coletamos</h2>
          <p className="mb-4">
            Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
          </p>
          <p className="mb-6">
            Os dados que podemos coletar incluem, mas não se limitam a: nome, endereço de e-mail, número de telefone e informações sobre a sua empresa, com o objetivo de entender o seu momento e avaliar se podemos ajudá-lo com nossos serviços.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">2. Uso das informações</h2>
          <p className="mb-4">
            Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
          </p>
          <p className="mb-6">
            Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">3. Cookies e tecnologias de rastreamento</h2>
          <p className="mb-6">
            Utilizamos cookies e tecnologias semelhantes (como o Meta Pixel e Google Analytics) para analisar o tráfego do site, otimizar campanhas de mídia e entender o comportamento dos usuários. Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">4. Links externos</h2>
          <p className="mb-6">
            O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">5. Aceite</h2>
          <p className="mb-6">
            O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">6. Contato</h2>
          <p className="mb-6">
            Para tirar dúvidas relacionadas a esta política de privacidade, por favor, entre em contato através do e-mail: <strong>contato@viniciusvalente.com.br</strong>
          </p>

          <p className="text-sm mt-16 opacity-70">
            Esta política é efetiva a partir de Maio de 2024.
          </p>
        </div>
      </div>
    </main>
  );
}
