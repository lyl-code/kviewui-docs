import Color from 'color';

function getRgbStr(color) {
  return Color(color)
    .rgb()
    .round()
    .color
    .join(',');
}

const formats = ['hex', 'rgb', 'hsl'];

function getFormat(format) {
  if (!format || formats.indexOf(format) < 0) {
    return 'hex';
  }
  return format;
}

function getColorString(color, format) {
  const innerFormat = getFormat(format);

  if (innerFormat === 'hex') {
    return color[innerFormat]();
  }
  return color[innerFormat]().round().string();
}

export default {
	getRgbStr,
	getColorString
}
