let centuryArray = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th'];

function century (year) {
  if (year < 100) {
    return ('1st');
  } else if (year < 200) {
    return ('2nd');
  } else if (year < 300) {
    return ('3rd');
  } else if (year < 400) {
    return ('4th');
  } else if (year < 500) {
    return ('5th');
  } else if (year < 600) {
    return ('6th');
  } else if (year < 700) {
    return ('7th')
  } else if (year < 800) {
    return ('8th');
  } else if (year < 900) {
    return ('9th');
  } else if (year < 1000) {
    return ('10th');
  } else if (year < 1100) {
    return ('11th');
  } else if (year < 1200) {
    return ('12th');
  } else if (year < 1300) {
    return ('13th');
  } else if (year )
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"