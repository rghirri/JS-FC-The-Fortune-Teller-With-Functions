function tellFortune(jobTitle, geoLocation, partner, numKids) {
    var future = 'You will be a ' + jobTitle + ' in ' + geoLocation + ' and married to ' +
   partner + ' ' + ' with ' + numKids + ' kids.';
    console.log(future);
}

tellFortune('Movie Star', 'Hollywood', 'George Clooney', 3);
tellFortune('Gardener', 'London', 'James Bond', 4);
tellFortune('Designer', 'France', 'Johnny Depp', 1);