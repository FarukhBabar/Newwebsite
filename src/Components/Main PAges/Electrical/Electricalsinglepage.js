


import withDataFetching from '../../withDataFrtching';
import SinglePage from '../../Singlepage';

const Electricalsinglepage = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/elefreedelivery');

export default Electricalsinglepage;