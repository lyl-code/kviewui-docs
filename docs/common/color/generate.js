import colorPalette from './palette';
import colorPaletteDark from './palette-dark';

/**
 * @param {string} color
 * @param {Object} options
 * @param {number} options.index 1 - 10 (default: 6)
 * @param {boolean} options.dark
 * @param {boolean} options.list
 * @param {string} options.format 'hex' | 'rgb' | 'hsl'
 * 
 * @return string | string[]
 */
function generate(color, options = {}) {
  const { dark, list, index = 6, format = 'hex' } = options;

  if (list) {
    const list = [];
    for(let i = 1; i <= 10; i++) {
	  const func = dark ? colorPaletteDark.colorPaletteDark : colorPalette.colorPalette;
	  list.push(func(color, i, format));
    }
    return list;
  }
  return dark ? colorPaletteDark.colorPaletteDark(color, index, format) : colorPalette.colorPalette(color, index, format);
}

export default {
	generate,
	colorPalette,
	colorPaletteDark
}
