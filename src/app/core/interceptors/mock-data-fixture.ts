export const mockDataFixture = [
  {
    'name': 'GET Conference Divisions',
    'method': 'GET',
    'regex': /.*\/v1\/conference\/divisions/,
    'mock_url': './app/core/mocks/data/conference-divisions.json',
    'mock_method': 'GET'
  },
  {
    'name': 'GET Conference teams',
    'method': 'GET',
    'regex': /.*\/v1\/conference\/teams/,
    'mock_url': './app/core/mocks/data/conference-teams.json',
    'mock_method': 'GET'
  },
  {
    'name': 'GET team',
    'method': 'GET',
    'regex': /.*\/v1\/team/,
    'mock_url': './app/core/mocks/data/team.json',
    'mock_method': 'GET'
  }
];