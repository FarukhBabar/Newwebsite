import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const ElectricalAccesssingle = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/eleaccessoriessingle');

export default ElectricalAccesssingle;