import axios from 'axios';

export default axios.create({
    baseURL: "https://ui-dev-mde.apps.tst.openshift-stg-ext.aws.myriad.com/",
    headers: {Authorization: "Bearer " + localStorage.getItem('jwtToken')},
});