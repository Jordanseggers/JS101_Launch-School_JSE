let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let colorSize = [];

Object.values(obj).forEach(produce => {
  if (produce['type'] === 'fruit') {
    colorSize.push(produce['colors'].map(color => {
     return color = color[0].toUpperCase() + color.slice(1);
    }));
  } else {
    colorSize.push(produce['size'].toUpperCase());
  }
});

console.log(colorSize);