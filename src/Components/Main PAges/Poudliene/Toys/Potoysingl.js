import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Potoysingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/potoysingle');

export default Potoysingl;