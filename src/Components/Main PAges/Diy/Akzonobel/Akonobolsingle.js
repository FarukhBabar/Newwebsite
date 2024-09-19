import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Akonobolsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/Akonobolsingle');

export default Akonobolsingle;
