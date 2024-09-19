import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Hilkasingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/hilkasingle');

export default Hilkasingl;