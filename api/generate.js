import { TEMPLATES } from '../lib/templates.js';

export default function handler(req, res) {
  // Configuração de CORS para permitir requisições da RapidAPI e do seu site
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Trata requisição de pré-venda (preflight)
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Garante que apenas POST seja aceito
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido. Use POST.' });
  }

  // Extrai os dados do corpo da requisição
  const { tipo_negocio, nome_negocio } = req.body;

  // 1. Validação de campos vazios
  if (!tipo_negocio || !nome_negocio) {
    return res.status(400).json({ 
      error: 'Dados insuficientes. Informe tipo_negocio e nome_negocio.' 
    });
  }

  // 2. Mapeamento e Normalização (aceita pet_shop, PET SHOP, etc)
  const validTypes = {
    'pet_shop': ['pet_shop', 'pet shop', 'clínica veterinária'],
    'medico': ['medico', 'consultório médico', 'saúde'],
    'ecommerce': ['ecommerce', 'loja virtual', 'e-commerce'],
    'autonomo': ['autonomo', 'autônomo', 'mei', 'prestador de serviços'],
    'restaurante': ['restaurante', 'delivery']
  };

  const inputLimpo = tipo_negocio.toLowerCase().trim();
  
  // Encontra a chave correspondente no seu arquivo de templates
  const chaveFinal = Object.keys(validTypes).find(key => 
    key === inputLimpo || validTypes[key].includes(inputLimpo)
  );

  // 3. Verifica se o tipo existe nos seus templates
  if (!chaveFinal || !TEMPLATES[chaveFinal]) {
    return res.status(400).json({ 
      error: 'Tipo de negócio inválido',
      recebido: tipo_negocio,
      opcoes_validas: Object.keys(validTypes)
    });
  }

  try {
    // 4. Busca o template e substitui os placeholders pelo nome do negócio
    const templateOriginal = TEMPLATES[chaveFinal];
    
    // Substitui [NOME DO SEU...] pelo nome enviado, ignorando maiúsculas/minúsculas na tag
    const regexNome = /\[NOME DO SEU.*?\]/gi;
    
    const tituloProcessado = templateOriginal.title.replace(regexNome, nome_negocio);
    const conteudoProcessado = templateOriginal.content.replace(regexNome, nome_negocio);

    // 5. Resposta de Sucesso
    return res.status(200).json({
      title: tituloProcessado,
      content: conteudoProcessado,
      keywords: templateOriginal.keywords
    });

  } catch (error) {
    // Caso ocorra algum erro inesperado no processamento
    return res.status(500).json({ error: 'Erro interno ao gerar o template.' });
  }
}
