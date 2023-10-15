export const imoveis = [
    {
        id: 1,
        valor: 5,
        local: 'Joinville-sc',
        estado: 'SC',
        tipo: 'casa',
        QtdQua: '5',        
        QtdBanh: '3',
        img: 'https://projetaronline.com/wp-content/uploads/2022/11/casa-pequena-planta-baixa-0.png'
    },
    {
        id: 2,
        valor: 10.000,
        local: 'Araquari-sc',
        estado: 'SC',
        tipo: 'casa',
        QtdQua: '7',
        QtdBanh: '4',
        img: 'https://i.pinimg.com/564x/f5/47/99/f54799e42148e400a5d2b448a40a6a6e.jpg'
    },
    {
        id: 3,
        valor: 10.000,
        local: 'Porto Seguro-ba',
        estado: 'BA',
        tipo: 'casa',
        QtdQua: '6',
        QtdBanh: '4',
        img: 'https://www.tuacasa.com.br/wp-content/uploads/2019/02/fachadas-de-casas-modernas-0.jpg'
    },
    {
        id: 4,
        valor: 2.000,
        local: 'itajoinaquari-ff',
        estado: 'FF',
        tipo: 'casa',
        QtdQua: '4',
        QtdBanh: '3',
        img: 'https://www.totalconstrucao.com.br/wp-content/uploads/2018/08/casas-lindas-35.jpg'
    },
    {
        id: 5,
        valor: 11,
        local: 'Rio de Janeiro-rj',
        estado: 'RJ',
        tipo: 'apartamento',
        QtdQua: '4',  
        QtdBanh: '3',

        img: 'https://casaeconstrucao.org/wp-content/uploads/2020/09/Apartamento-decorado-grande-com-belas-janelas-e-moveis-que-ornam-em-toda-decoracao.jpg'
    },
    {
        id: 6,
        valor: 4.900,
        local: 'Guaruja-sp',
        estado: 'SP',
        tipo: 'apartamento',
        QtdQua: '3',
        QtdBanh: '2',
        img: 'https://casaeconstrucao.org/wp-content/uploads/2020/09/Apartamento-grande-com-locais-integrados.jpg'
    },
    {
        id: 7,
        valor: 5.700,
        local: 'Santos-sp',
        estado: 'SP',
        tipo: 'apartamento',
        QtdQua: '3',
        QtdBanh: '2',
        img: 'https://www.simplesdecoracao.com.br/wp-content/uploads/2015/11/08d-apes-pequenos-que-provam-que-da-pra-viver-bem-com-pouco-espaco.jpeg'
    },
    {
        id: 8,
        valor: 2.500,
        local: 'Salvador-ba',
        estado: 'BA',
        tipo: 'apartamento',
        QtdQua: '3',
        QtdBanh: '2',
        img: 'https://cdn.refugiosurbanos.com.br/wp-content/uploads/2020/11/31191852/1606336412-12.jpg'
    },
    {
        id: 9,
        valor: 30.000,
        local: 'Manaus-am',
        estado: 'AM',
        tipo: 'chacara',
        QtdQua: '13',
        QtdBanh: '6',
        img: 'https://thumbs.jusbr.com/imgs.jusbr.com/publications/artigos/images/chacara1468618371.jpg'
    },
    {
        id: 10,
        valor: 50.000,
        local: 'Brasilia-df',
        estado: 'DF',
        tipo: 'chacara',
        QtdQua: '12',
        QtdBanh: '6',
        img: 'https://i.pinimg.com/564x/a0/3e/5e/a03e5e0a7a7fee27066c86c9009c5a6e.jpg'
    },
    {
        id: 11,
        valor: 40.000,
        local: 'Goiania-go',
        estado: 'GO',
        tipo: 'chacara',
        QtdQua: '10',
        QtdBanh: '5',
        img: 'https://www.residenciaimoveis.com/foto_/2023/6489/mococa-rural-chacara-chacara-bela-vista-28-03-2023_10-08-56-1.webp'
    },
    {
        id: 12,
        valor: 20.000,
        local: 'Gramado-rs',
        estado: 'RS',
        tipo: 'chacara',
        QtdQua: '14',
        QtdBanh: '7',
        img: 'https://fotos.vivadecora.com.br/decoracao-chacara-mobiliario-metalico-branco-e-banco-de-madeira-revistavd-196189-proportional-height_cover_medium.jpg'
    },
]

export function getImovelById(id) {
    return imoveis.find(imovel => imovel.id == id)
}