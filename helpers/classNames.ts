const classNames = (...classes: Array<string | boolean>) =>
  classes.filter(Boolean).join(' ');

export default classNames;
