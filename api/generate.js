// Substitua esta parte do código
if (!tipo_negocio || !['pet_shop', 'medico', 'ecommerce', 'autonomo', 'restaurante'].includes(tipo_negocio)) {

// Por esta versão mais flexível
const validTypes = {
  'pet_shop': ['pet shop', 'clínica veterinária', 'pet shop / clínica veterinária'],
  'medico': ['consultório médico', 'saúde', 'consultório médico / saúde'],
  'ecommerce': ['loja virtual', 'e-commerce', 'loja virtual / e-commerce'],
  'autonomo': ['autônomo', 'mei', 'prestador de serviços', 'autônomo / mei / prestador de serviços'],
  'restaurante': ['restaurante', 'delivery', 'restaurante / delivery']
};

// Converta para lowercase e remova caracteres especiais
const normalizedInput = tipo_negocio.toLowerCase().replace(/[^a-z0-9 ]/g, '');

// Verifique se o valor corresponde a algum tipo válido
const isValid = Object.keys(validTypes).some(key => 
  validTypes[key].some(value => value === normalizedInput)
);

if (!tipo_negocio || !isValid) {
  return res.status(400).json({ error: 'Tipo de negócio inválido' });
}
