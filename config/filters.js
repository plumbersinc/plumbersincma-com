const format = require("date-fns/format");

function ordered(list) {
  return list.sort((a, b) =>
    "data" in a ? a.data.order - b.data.order : a.order - b.order
  );
}

function date(date, dateFormat = "yyyy-MM-dd") {
  return format(date, dateFormat);
}

module.exports = {
  ordered,
  date,
};
