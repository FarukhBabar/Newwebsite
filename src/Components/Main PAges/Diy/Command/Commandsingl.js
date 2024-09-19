import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Commandsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/commandsingle');

export default Commandsingle;