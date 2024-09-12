import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Breadsingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/breadsingle');

export default Breadsingl;