
import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Flasksingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/flasksingle');

export default Flasksingl;