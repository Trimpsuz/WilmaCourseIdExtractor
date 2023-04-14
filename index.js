const courses = []; //The names of the courses you want to find the IDs of, ex. 'KU1.1' or 'MAA6.2'

periods = [...document.getElementsByClassName('palkki')];
periods.forEach((period) =>
  [...period.getElementsByTagName('a')].forEach((course) => {
    if (courses.includes(course.innerText)) {
      console.log(course.groupID);
    }
  })
);
