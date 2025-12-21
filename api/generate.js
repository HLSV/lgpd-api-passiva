import { TEMPLATES } from '../lib/templates.js';

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const { tipo_negocio, nome_negocio, nome_empresa } = req.body || {};
  
  // Aceita tanto nome_negocio quanto nome_empresa
  const nomeFinal = nome_negocio || nome_empresa;

  if (!tipo_negocio || !nomeFinal) {
    return res.status(400).json({ error: 'Dados insuficientes. Envie tipo_negocio e nome_negocio.' });
  }

  const input = tipo_negocio.toLowerCase().trim();
  const template = TEMPLATES[input];

  if (!template) {
    return res.status(400).json({ error: 'Tipo de negócio inválido' });
  }

  const regex = /\[NOME DO SEU.*?\]/gi;
  return res.status(200).json({
    title: template.title.replace(regex, nomeFinal),
    content: template.content.replace(regex, nomeFinal)
  });
}
