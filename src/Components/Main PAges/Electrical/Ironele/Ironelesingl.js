import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Ironelesingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/ironelesingle');

export default Ironelesingle;