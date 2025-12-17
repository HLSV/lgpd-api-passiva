// /lib/templates.js
export const TEMPLATES = {
  pet_shop: {
    title: "Política de Privacidade - [NOME DO SEU PET SHOP]",
    content: `
      <h2>1. Dados que coletamos</h2>
      <p>Coletamos apenas:</p>
      <ul>
        <li>Seu nome e contato quando agenda serviço</li>
        <li>Nome, raça e histórico de saúde do seu pet</li>
        <li>E-mail para enviar lembretes de vacinas</li>
      </ul>
      
      <h2>2. Como usamos seus dados</h2>
      <p>Utilizamos exclusivamente para:</p>
      <ul>
        <li>Agendar banho, tosa ou consultas veterinárias</li>
        <li>Enviar alertas sobre vacinas e vermifugação</li>
        <li>Melhorar nossos serviços com base em seu feedback</li>
      </ul>
      
      <h2>3. Seus direitos como cliente</h2>
      <p>Você pode, a qualquer momento:</p>
      <ul>
        <li>Solicitar acesso aos dados armazenados</li>
        <li>Pedir correção de informações incorretas</li>
        <li>Excluir seus dados quando não forem mais necessários</li>
      </ul>
      
      <!-- ⚠️ AVISO LEGAL OBRIGATÓRIO (NÃO REMOVA) -->
      <div class="disclaimer" style="background:#fff8e1;padding:15px;border-left:4px solid #ffc107;margin:20px 0;font-family:Arial,sans-serif">
        <strong>⚠️ AVISO LEGAL OBRIGATÓRIO:</strong><br>
        Este documento é <u>exclusivamente um modelo educativo</u> gerado automaticamente.<br>
        <b>NÃO constitui consultoria jurídica</b> nem garante compliance com a LGPD (Lei 13.709/2018).<br>
        A legislação varia conforme seu negócio, porte e setor.<br>
        <b>Você assume total responsabilidade</b> por qualquer uso deste material.<br>
        Recomendamos <u>fortemente</u> revisão por advogado especializado antes da publicação.
      </div>
    `,
    keywords: ["pet shop", "banho e tosa", "vacinas pet", "dados de animais"]
  },
  
  medico: {
    title: "Política de Privacidade - [NOME DO SEU CONSULTÓRIO]",
    content: `
      <h2>1. Dados sensíveis coletados</h2>
      <p>Por sermos um serviço de saúde, coletamos:</p>
      <ul>
        <li>Dados pessoais (nome, CPF, contato)</li>
        <li>Histórico médico e condições de saúde</li>
        <li>Exames laboratoriais e imagens diagnósticas</li>
      </ul>
      
      <h2>2. Base legal para tratamento</h2>
      <p>Conforme Art. 7º e 11º da LGPD, tratamos seus dados para:</p>
      <ul>
        <li>Prestar atendimento médico adequado</li>
        <li>Cumprir obrigações legais perante conselhos de classe</li>
        <li>Proteger sua vida e saúde em emergências</li>
      </ul>
      
      <h2>3. Medidas de segurança</h2>
      <p>Armazenamos seus dados em:</p>
      <ul>
        <li>Sistemas criptografados com acesso restrito à equipe médica</li>
        <li>Prontuários físicos em cofre com controle de acesso</li>
        <li>Backup diário em servidor local (não na nuvem)</li>
      </ul>
      
      <!-- ⚠️ AVISO LEGAL OBRIGATÓRIO (NÃO REMOVA) -->
      <div class="disclaimer" style="background:#fff8e1;padding:15px;border-left:4px solid #ffc107;margin:20px 0;font-family:Arial,sans-serif">
        <strong>⚠️ AVISO LEGAL OBRIGATÓRIO:</strong><br>
        Este documento é <u>exclusivamente um modelo educativo</u> gerado automaticamente.<br>
        <b>NÃO constitui consultoria jurídica</b> nem garante compliance com a LGPD (Lei 13.709/2018).<br>
        A legislação varia conforme seu negócio, porte e setor.<br>
        <b>Você assume total responsabilidade</b> por qualquer uso deste material.<br>
        Recomendamos <u>fortemente</u> revisão por advogado especializado antes da publicação.
      </div>
    `,
    keywords: ["médico", "consultório", "prontuário eletrônico", "dados sensíveis"]
  },
  
  ecommerce: {
    title: "Política de Privacidade - [NOME DA SUA LOJA]",
    content: `
      <h2>1. Dados coletados em nosso site</h2>
      <p>Quando você navega ou compra em nossa loja, coletamos:</p>
      <ul>
        <li>Dados de navegação (cookies, IP, páginas visitadas)</li>
        <li>Informações de cadastro (nome, e-mail, telefone)</li>
        <li>Dados de pagamento (processados por gateway seguro)</li>
        <li>Endereço de entrega e histórico de pedidos</li>
      </ul>
      
      <h2>2. Compartilhamento de dados</h2>
      <p>Compartilhamos apenas com:</p>
      <ul>
        <li>Empresas de entrega (para envio de pedidos)</li>
        <li>Gateways de pagamento (para processar transações)</li>
        <li>Plataformas de marketing com seu consentimento explícito</li>
      </ul>
      
      <h2>3. Seus direitos como consumidor</h2>
      <p>Você pode exercer seus direitos na LGPD através de:</p>
      <ul>
        <li>Canal exclusivo: privacidade@seudominio.com.br</li>
        <li>Formulário online em nosso site (na seção "LGPD")</li>
        <li>Atendimento telefônico: (11) 99999-9999 (segunda a sexta)</li>
      </ul>
      
      <!-- ⚠️ AVISO LEGAL OBRIGATÓRIO (NÃO REMOVA) -->
      <div class="disclaimer" style="background:#fff8e1;padding:15px;border-left:4px solid #ffc107;margin:20px 0;font-family:Arial,sans-serif">
        <strong>⚠️ AVISO LEGAL OBRIGATÓRIO:</strong><br>
        Este documento é <u>exclusivamente um modelo educativo</u> gerado automaticamente.<br>
        <b>NÃO constitui consultoria jurídica</b> nem garante compliance com a LGPD (Lei 13.709/2018).<br>
        A legislação varia conforme seu negócio, porte e setor.<br>
        <b>Você assume total responsabilidade</b> por qualquer uso deste material.<br>
        Recomendamos <u>fortemente</u> revisão por advogado especializado antes da publicação.
      </div>
    `,
    keywords: ["e-commerce", "loja virtual", "dados de pagamento", "cookies"]
  },
  
  autonomo: {
    title: "Política de Privacidade - [SEU NOME PROFISSIONAL]",
    content: `
      <h2>1. Dados coletados em meu trabalho</h2>
      <p>Como profissional autônomo, recebo:</p>
      <ul>
        <li>Seus dados de contato (e-mail, telefone, WhatsApp)</li>
        <li>Informações sobre o serviço solicitado</li>
        <li>Documentos necessários para emissão de notas fiscais</li>
      </ul>
      
      <h2>2. Prazo de armazenamento</h2>
      <p>Mantenho seus dados apenas pelo tempo necessário:</p>
      <ul>
        <li>Contatos: 2 anos após o último serviço</li>
        <li>Documentos fiscais: 5 anos (exigência legal)</li>
        <li>E-mails: apagados após 6 meses</li>
      </ul>
      
      <h2>3. Como protegemos seus dados</h2>
      <p>Utilizo medidas simples mas eficazes:</p>
      <ul>
        <li>Celular com senha e criptografia de disco</li>
        <li>E-mails comerciais em conta separada do pessoal</li>
        <li>Nunca compartilho dados sem sua autorização por escrito</li>
      </ul>
      
      <!-- ⚠️ AVISO LEGAL OBRIGATÓRIO (NÃO REMOVA) -->
      <div class="disclaimer" style="background:#fff8e1;padding:15px;border-left:4px solid #ffc107;margin:20px 0;font-family:Arial,sans-serif">
        <strong>⚠️ AVISO LEGAL OBRIGATÓRIO:</strong><br>
        Este documento é <u>exclusivamente um modelo educativo</u> gerado automaticamente.<br>
        <b>NÃO constitui consultoria jurídica</b> nem garante compliance com a LGPD (Lei 13.709/2018).<br>
        A legislação varia conforme seu negócio, porte e setor.<br>
        <b>Você assume total responsabilidade</b> por qualquer uso deste material.<br>
        Recomendamos <u>fortemente</u> revisão por advogado especializado antes da publicação.
      </div>
    `,
    keywords: ["autônomo", "MEI", "freelancer", "dados de clientes"]
  },
  
  restaurante: {
    title: "Política de Privacidade - [NOME DO SEU RESTAURANTE]",
    content: `
      <h2>1. Dados coletados em nosso restaurante</h2>
      <p>Coletamos informações quando você:</p>
      <ul>
        <li>Faz reserva por WhatsApp ou site</li>
        <li>Cadastra seu cartão de fidelidade</li>
        <li>Pede delivery pelo nosso aplicativo</li>
        <li>Participa de promoções em redes sociais</li>
      </ul>
      
      <h2>2. Uso de tecnologia</h2>
      <p>Nossos sistemas incluem:</p>
      <ul>
        <li>Câmeras de segurança apenas em áreas comuns (entrada, caixa)</li>
        <li>Wi-Fi com termo de uso aceito na conexão</li>
        <li>Aplicativo de delivery com consentimento explícito</li>
      </ul>
      
      <h2>3. Dados sensíveis</h2>
      <p>NUNCA coletamos:</p>
      <ul>
        <li>Informações sobre restrições alimentares sem autorização</li>
        <li>Dados de saúde (ex: alergias) sem seu consentimento por escrito</li>
        <li>Documentos de identificação exceto para entrega de delivery</li>
      </ul>
      
      <!-- ⚠️ AVISO LEGAL OBRIGATÓRIO (NÃO REMOVA) -->
      <div class="disclaimer" style="background:#fff8e1;padding:15px;border-left:4px solid #ffc107;margin:20px 0;font-family:Arial,sans-serif">
        <strong>⚠️ AVISO LEGAL OBRIGATÓRIO:</strong><br>
        Este documento é <u>exclusivamente um modelo educativo</u> gerado automaticamente.<br>
        <b>NÃO constitui consultoria jurídica</b> nem garante compliance com a LGPD (Lei 13.709/2018).<br>
        A legislação varia conforme seu negócio, porte e setor.<br>
        <b>Você assume total responsabilidade</b> por qualquer uso deste material.<br>
        Recomendamos <u>fortemente</u> revisão por advogado especializado antes da publicação.
      </div>
    `,
    keywords: ["restaurante", "delivery", "reservas", "cartão fidelidade"]
  }
};
