import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Clocksingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/Clocksingle');

export default Clocksingle;