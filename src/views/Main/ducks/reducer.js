const initialState = {
  cases: [
    {
      icon: require('../assets/cases/data.svg'),
      title: 'BIG DATA',
    },
    {
      icon: require('../assets/cases/knowledge.svg'),
      title: 'KNOWLEDGE CASES',
    },
    {
      icon: require('../assets/cases/social.svg'),
      title: 'SOCIAL NETWORKS',
    },
    {
      icon: require('../assets/cases/docs.svg'),
      title: 'OPEN DOCUMENTS REGISTRIES',
    },
    {
      icon: require('../assets/cases/media.svg'),
      title: 'MASS MEDIA',
    },
    {
      icon: require('../assets/cases/storage.svg'),
      title: 'DATA STORAGE',
    },
    {
      icon: require('../assets/cases/sharing.svg'),
      title: 'FILE SHARING',
    },
  ],
  features: [
    {
      description: 'The absence of a single center control and failure, a completely self–organized network.',
      icon: require('../assets/features/decentralization.svg'),
      title: 'DECENTRALIZATION',
    },
    {
      description: 'Parallel operation of many servers ensures high speed of processing requests.',
      icon: require('../assets/features/search.svg'),
      title: 'ADVANCED SEARCH',
    },
    {
      description: 'Ability to edit and delete previously posted data for their owner.',
      icon: require('../assets/features/modifable.svg'),
      title: 'MODIFIABLE',
    },
  ],
  howItWorks: [
    {
      description: 'Все предоставляемые серверы объеденены в одну систему.',
      icon: require('../assets/how_it_works/network.svg'),
      title: 'NETWORK ARRANGEMENT',
    },
    {
      description: 'Кто угодно может разместить контент. Он распределяется по разным серверам.',
      icon: require('../assets/how_it_works/upload.svg'),
      title: 'UPLOAD',
    },
    {
      description: 'Кто угодно может запросить контент и он соберется в единое целое.',
      icon: require('../assets/how_it_works/download.svg'),
      title: 'SEARCH AND DOWNLOAD',
    },
  ],
  partners: [
    {
      link: 'https://diwtoken.com/',
      src: require('../assets/partners/diw.png'),
      title: 'DIW',
    },
    {
      link: 'https://exenium.io/',
      src: require('../assets/partners/exenium.png'),
      title: 'Exenium',
    },
    {
      link: 'https://www.varcrypt.io/',
      src: require('../assets/partners/varcrypt.png'),
      title: 'varcrypt',
    },
    {
      link: 'https://credits.com/ru/Home/New_Ins/2257',
      src: require('../assets/partners/credits.png'),
      title: 'Credits',
    },
    {
      link: 'https://canya.io/index.html',
      src: require('../assets/partners/canya.png'),
      title: 'CanYa',
    },
    {
      link: 'http://www.krtoken.com/',
      src: require('../assets/partners/krtoken.png'),
      title: 'KrToken',
    },
    {
      link: 'https://blocklancer.net/',
      src: require('../assets/partners/blocklancer.png'),
      title: 'blocklancer',
    },
    {
      link: 'https://wishknish.com/',
      src: require('../assets/partners/wishknish.png'),
      title: 'WishKnish',
    },
    {
      link: 'http://www.ecos.ee/',
      src: require('../assets/partners/ecos.png'),
      title: 'ECOS',
    },
    {
      link: 'https://medium.com/iagon-official/iagon-and-ties-db-partnership-410ffb1a4192',
      src: require('../assets/partners/iagon.png'),
      title: 'IAGON',
    },
    {
      link: 'https://bcharity.io/',
      src: require('../assets/partners/bcharity.png'),
      title: 'BCharity',
    },
    {
      link: 'https://hoqu.io',
      src: require('../assets/partners/hoqu.png'),
      title: 'HOQU',
    },
  ],
  roadmap: [
    {
      description: 'API prototyping. White paper published.',
      from: '2017-01-01',
      title: 'Q1 2017',
      to: '2017-03-31',
    },
    {
      description: 'Pre Token generation event marketing campaign. Yellow paper published. Prototype launch and testing. TGE announced.',
      from: '2017-07-01',
      title: 'Q3 2017',
      to: '2017-09-30',
    },
    {
      description: 'Start of Ties.DB development.',
      from: '2017-10-01',
      title: 'Q4 2017',
      to: '2017-12-31',
    },
    {
      description: 'Development of Alpha Ties.DB.',
      from: '2018-01-01',
      title: 'Q1 2018',
      to: '2018-03-31',
    },
    {
      description: 'Ties.DB Alpha launching and testing.',
      from: '2018-04-01',
      title: 'Q2 2018',
      to: '2018-06-30',
    },
    {
      description: 'Ties.DB Beta testing.',
      from: '2018-07-01',
      title: 'Q3 2018',
      to: '2018-09-30',
    },
    {
      description: 'Full decentralization launch. Ties.DB Beta launch. Ties.DB marketing campaign.',
      from: '2018-10-01',
      title: 'Q4 2018',
      to: '2018-12-31',
    },
    {
      description: 'Integration with other blockchains started.',
      from: '2019-01-01',
      title: 'Q1 2019',
      to: '2019-03-31',
    },
  ],
  whyNeed: [
    {
      description: 'Ties.DB servers are completely independent, scattered across the planet and accept payment in the crypto currency (TIE-token), which gives dapps-y very flexible options for working with the network Ties.DB.',
      icon: require('../assets/why_need/daaps.svg'),
      link: {
        href: '/',
        title: 'BE 100% DECENTRALIZED',
      },
      preface: 'Centralized storage solutions are vulnerable. Decentralized solutions used Today, they do not allow a quick search and modification of data.',
      title: 'DAPPS',
    },
    {
      description: 'We take from a concrete block system data encryption to generate keys in the signature and suggest that the creation of decentralized applications for This block, announcing that the data will be stored in Ties.DB.',
      icon: require('../assets/why_need/blockchains.svg'),
      link: {
        href: '/',
        title: 'BE 100% COMPETITIVE',
      },
      preface: 'Today there is no effective storage solution data that entails the difficulty of attracting and hold dApps.',
      title: 'BLOCKCHAINS',
    },
    {
      description: 'Large projects can store Ties.DB file indexes, and in the future, store in Ties.DB and the files themselves. Any large project can make a fork of Ties.DB network to store data in a separate network.',
      icon: require('../assets/why_need/international.svg'),
      link: {
        href: '/',
        title: 'BE 100% BOUNDLESS',
      },
      preface: 'It is difficult to build self-service today cross-border infrastructure.',
      title: 'INTERNATIONAL PROJECTS',
    },
  ],
}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}
