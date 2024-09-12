import withDataFetching from '../../withDataFrtching';
import SinglePage from '../../Singlepage';

const Foodsinglpage = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/lightersingalepage');

export default Foodsinglpage;
