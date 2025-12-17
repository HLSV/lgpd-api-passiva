// /api/generate.js
import { TEMPLATES } from '../lib/templates.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  try {
    const { tipo_negocio, nome_empresa } = req.body;
    
    if (!tipo_negocio || !['pet_shop', 'medico', 'ecommerce', 'autonomo', 'restaurante'].includes(tipo_negocio)) {
      return res.status(400).json({ error: 'Tipo de negócio inválido' });
    }

    const template = TEMPLATES[tipo_negocio];
    
    if (!template) {
      return res.status(404).json({ error: 'Template não encontrado' });
    }

    const htmlContent = template.content.replace(/\[NOME DO SEU PET SHOP\]|\[NOME DO SEU CONSULTÓRIO\]|\[NOME DA SUA LOJA\]|\[SEU NOME PROFISSIONAL\]|\[NOME DO SEU RESTAURANTE\]/g, nome_empresa || 'Sua Empresa');
    
    res.status(200).json({
      html: `<h1>${template.title.replace(/\[.*?\]/, nome_empresa || 'Sua Empresa')}</h1>${htmlContent}`,
      disclaimer: "AVISO: Modelo educativo. Consulte advogado."
    });
    
  } catch (error) {
    console.error('Erro na API:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
}
