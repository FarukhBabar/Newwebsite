
import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Tablecoversingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/tablecoversingle');

export default Tablecoversingle;