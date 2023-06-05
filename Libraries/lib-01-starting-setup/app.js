const customers = ["mex", "manuel", "anna"];

const activeCustomers = ["mex", "manuel"];

const inActiveCustomers = _.difference(customers, activeCustomers);

console.log(inActiveCustomers);
