const data = 
{
    title: 'Meu curriculo',
    name: 'Lazaro Daniel Santos Souza',
    profession:'Development system junior',
    description: 'Experiência  em desenvolvimento de sistemas ',
    experience:[{
        company:'SEMA - Secretaria estadual do meio ambiente, Bahia',
        office: 'Estagiario em T.I .',
        description: 'Auxiliando no desenvolvimento do sistema interno da secretaria utilizando php puro no backend , postgres no gerenciamento de dados e bootstrap no frontend'
    },{
        company: 'Projeto experimental',
        office: 'Software Engineer.',
        description: 'Sistema de estoque de produtos web tipo crud ,utilizando framework laravel no backend , bootstrap no frontend  e o banco de dados postgres.'
    },
    {
        company: 'Mac engenharia',
        office: 'Macanico auxiliar.',
        descripition: 'Auxiliando na instalaçao de sistemas de refrigeração.'
    }],
    education:[{
        institution: 'IFBA',
        description: 'Análise em desenvolvimento de sistemas, 4º semestre'
    }],
    skill:['backend', 'frontend', 'infra', 'mobile','Aux. eletrico, mecanica e refrigeracao']
   
}

module.exports = data;