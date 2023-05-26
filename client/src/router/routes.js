children: [
  { path: '', component: () => import('src/pages/HomePage.vue'), name: 'Home' },
  { path: 'poll/:user', component: () => import('src/pages/PollPage.vue'), name: 'Poll' },
  { path: 'results', component: () => import('src/pages/ResultsPage.vue'), name: 'Results' }
]



