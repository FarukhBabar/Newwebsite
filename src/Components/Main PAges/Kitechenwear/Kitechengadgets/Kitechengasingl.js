import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Kitechengasingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/kitechengasingle');

export default Kitechengasingl;