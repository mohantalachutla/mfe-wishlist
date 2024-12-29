const Container = ({
  children,
  className = '',
  size,
  mxAuto = true,
  flex = 'col',
  bgColor = 'inherit',
  fluid = false,
  ...props
}) => {
  let classes = [
    'relative',
    `${size ? size + ':' : ''}container`,
    'text-center',
  ];
  flex && classes.push(`flex flex-${flex} flex-wrap justify-around gap-4`);
  classes = fluid
    ? classes.concat(['w-full'])
    : classes.concat(['min-h-32', 'min-w-32']);
  mxAuto && classes.push('mx-auto');
  classes.push('px-4');
  bgColor && classes.push('bg-' + bgColor);
  return (
    <div className={classes.join(' ') + className} {...props}>
      {children}
    </div>
  );
};

export default Container;
