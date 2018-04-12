const initialState = {
  cases: [
    {
      title: 'BIG DATA',
    },
    {
      title: 'KNOWLEDGE CASES',
    },
    {
      title: 'SOCIAL NETWORKS',
    },
    {
      title: 'OPEN DOCUMENTS REGISTRIES',
    },
    {
      title: 'MASS MEDIA',
    },
    {
      title: 'DATA STORAGE',
    },
    {
      title: 'FILE SHARING',
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
}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}
