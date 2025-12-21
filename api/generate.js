import { TEMPLATES } from '../lib/templates.js';

export default function handler(req, res) {
  // 1. Verifica se o método é POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { tipo_negocio, nome_negocio } = req.body;

  // 2. Mapeamento para normalização dos tipos vindo do formulário ou API
  const typeMapping = {
    'pet_shop': ['pet_shop', 'pet shop', 'clínica veterinária', 'pet shop / clínica veterinária'],
    'medico': ['medico', 'consultório médico', 'saúde', 'consultório médico / saúde'],
    'ecommerce': ['ecommerce', 'loja virtual', 'e-commerce', 'loja virtual / e-commerce'],
    'autonomo': ['autonomo', 'autônomo', 'mei', 'prestador de serviços', 'autônomo / mei / prestador de serviços'],
    'restaurante': ['restaurante', 'delivery', 'restaurante / delivery']
  };

  // 3. Normalização do input
  const normalizedInput = tipo_negocio ? tipo_negocio.toLowerCase().trim() : '';
  
  // 4. Encontra a chave correta no objeto TEMPLATES
  const finalType = Object.keys(typeMapping).find(key => 
    typeMapping[key].includes(normalizedInput)
  );

  // 5. Validação
  if (!finalType || !nome_negocio) {
    return res.status(400).json({ 
      error: 'Dados insuficientes ou tipo de negócio inválido',
      recebido: tipo_negocio 
    });
  }

  // 6. Busca o template e substitui o nome do negócio
  const template = TEMPLATES[finalType];
  const renderedContent = template.content.replace(/\[NOME DO SEU.*?\]/g, nome_negocio);

  return res.status(200).json({
    title: template.title.replace(/\[NOME DO SEU.*?\]/g, nome_negocio),
    content: renderedContent,
    keywords: template.keywords
  });
}
