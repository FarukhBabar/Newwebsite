import withDataFetching from '../../../../../withDataFetching';
import SinglePage from '../../../../../SinglePage';

const Dektonsingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/dektonsingle');

export default Dektonsingle;