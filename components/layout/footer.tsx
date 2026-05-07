import { ArrowRight, Github, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-surface-border bg-surface/20 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl">
                V
              </div>
              <span className="font-heading font-bold text-xl tracking-wide">Vorté</span>
            </div>
            <p className="text-muted text-sm leading-relaxed mb-6">
              A agência parceira para empresas que exigem alta performance, design de elite e engenharia de conversão.
            </p>
            <div className="flex items-center gap-4 text-muted">
              <a href="#" className="hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Github className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-foreground">Especialidades</h4>
            <ul className="space-y-4 text-sm text-muted">
              <li><a href="#" className="hover:text-primary transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Performance Marketing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Growth & CRO</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Automação com IA</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-foreground">Empresa</h4>
            <ul className="space-y-4 text-sm text-muted">
              <li><a href="#" className="hover:text-primary transition-colors">Sobre nós</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cases de Sucesso</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-foreground">Receba insights</h4>
            <p className="text-sm text-muted mb-4">Estratégias de growth diretamente no seu email.</p>
            <div className="flex items-center relative">
              <input 
                type="email" 
                placeholder="Seu melhor email" 
                className="w-full bg-surface border border-surface-border rounded-lg py-3 pl-4 pr-12 text-sm focus:outline-none focus:border-primary transition-colors text-foreground"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-dark transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        <div className="border-t border-surface-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>© {new Date().getFullYear()} Vorté Agência. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-foreground transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
