const initialState = {
  route: {
    location: {
      pathname: '/company/invisio-communications',
      search: '',
      hash: '',
    },
  },
  global: {
    communityScoring: {
      signupURL:
        'https://redeye.eu.auth0.com/authorize?client_id=UMTggUz5eGZlfloiaFElpg8D81DIdJlc&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Flogin_check&response_type=code&scope=openid+offline_access&state=eyJyZXR1cm5VcmwiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvY29tcGFueVwvaW52aXNpby1jb21tdW5pY2F0aW9ucz9pbnZlc3RtZW50LWludGVudGlvbnMiLCJub25jZSI6IlJKaXE2R2JUeU5Ic1NhZDdZcUNRUnpHMm9QTVlDZG04ME5USnZsR2U2MTAifQ%3D%3D&signup=true',
      loginURL:
        'https://redeye.eu.auth0.com/authorize?client_id=UMTggUz5eGZlfloiaFElpg8D81DIdJlc&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Flogin_check&response_type=code&scope=openid+offline_access&state=eyJyZXR1cm5VcmwiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvY29tcGFueVwvaW52aXNpby1jb21tdW5pY2F0aW9ucz9pbnZlc3RtZW50LWludGVudGlvbnMiLCJub25jZSI6IlJKaXE2R2JUeU5Ic1NhZDdZcUNRUnpHMm9QTVlDZG04ME5USnZsR2U2MTAifQ%3D%3D',
    },
    loginDownloadURL:
      'https://redeye.eu.auth0.com/authorize?client_id=UMTggUz5eGZlfloiaFElpg8D81DIdJlc&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Flogin_check&response_type=code&scope=openid+offline_access&state=eyJyZXR1cm5VcmwiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvY29tcGFueVwvaW52aXNpby1jb21tdW5pY2F0aW9ucz9sb2dpbi1kb3dubG9hZCIsIm5vbmNlIjoiUkppcTZHYlR5TkhzU2FkN1lxQ1FSekcyb1BNWUNkbTgwTlRKdmxHZTYxMCJ9',
    page: 'http://localhost:8000/company/invisio-communications',
    lang: 'en',
    user: {
      loggedIn: false,
      followedCompanies: false,
      followedCompaniesLoading: { following: [], unfollowing: [] },
    },
    companies: false,
    company: {
      nid: '306',
      uuid: '320e7a5f-c74c-3118-ad93-420d7b5fe6d1',
      name: 'Invisio Communications',
      city: false,
      country: false,
      url: false,
    },
  },
  communityScoring: {
    scores: {},
    numberOfScores: 1337,
    submittedLoading: false,
    scoresLoadingError: {},
    questions: {
      'c21fb114-375c-4c8d-8691-949a21087344': {
        title: 'Financials',
        questions: {
          'af6a5d0b-b4ed-4a0b-b7c4-d7c65f58603c':
            'Strong and reliable cash flow',
          '772f2dd9-3989-4a0e-aa6e-eacaf76145ff':
            'Sustainable high profitability',
          '2f2fede6-3e18-4b45-be55-72a19e9d8725': 'Healthy balance sheet',
        },
      },
      '9e264f45-7146-4d1c-aea3-f70c22482f84': {
        title: 'Business',
        questions: {
          'f0aabd23-8922-4e45-a856-adcd1daf3f50':
            'Attractive and innovative products/services',
          '87b68ae1-c4d8-4fd0-9d97-a8717b49f8c6': 'Compelling business model',
          'a52516e5-cf05-44e9-a6cb-a490e6243489': 'Positive growth outlook',
        },
      },
      '3fa74829-7500-4812-9b4c-b6ec2e96d6e1': {
        title: 'People',
        questions: {
          'c53b0ea0-a479-4059-95c5-81e3c8d8a043':
            'Trustworthy and competent leadership',
          '49d37de4-10a3-4275-9d42-96d8d194ed07':
            'Credible long-term vision and strategy',
          'e37a4b03-b931-41a7-b502-78382772dd48':
            'Strong and supportive owners',
        },
      },
      'dc90b8a7-b4e0-41e5-98af-9d3f8496a31b': {
        title: 'Sentiment',
        questions: {
          'e03a5e21-6e0f-444e-8ee1-5ea7d24a1095':
            'Expectations on favorable catalysts',
          'dcf234db-79c5-463b-b3d1-ad5d32944d16':
            'Attractive company valuation',
          '151f271a-a9d9-4703-b0f8-c7fbbc1ce530':
            'Reliable investor communications',
        },
      },
    },
    submittedError: false,
    questionsLoading: false,
    answers: {},
    questionsLoadingError: false,
    ownShares: '',
    submitted: false,
    scoresLoading: false,
    investmentPlan: '',
    currentTab: 0,
  },
  backgroundTasks: {
    communityScoringOpen: true,
    communityScoringIsScoring: false,
  },
};

export default initialState;
