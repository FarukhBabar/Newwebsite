import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Umbrellaupdate = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/auth/umbrella2single');

export default Umbrellaupdate;