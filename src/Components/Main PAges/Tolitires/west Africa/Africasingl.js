import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Africasingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/africasingle');

export default Africasingle;