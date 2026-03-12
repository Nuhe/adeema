const variants = {
  primary:
    'bg-primary-600 hover:bg-primary-500 text-white border border-primary-500/50 hover:border-primary-400 shadow-lg hover:shadow-primary-500/25',
  secondary:
    'bg-transparent border border-primary-500/60 text-primary-400 hover:bg-primary-500/10 hover:border-primary-400',
  accent:
    'bg-accent hover:bg-accent-dark text-dark font-semibold border border-accent/50 hover:border-accent shadow-lg hover:shadow-accent/25',
  ghost:
    'bg-transparent text-slate-300 hover:text-white hover:bg-white/5 border border-transparent',
  outline:
    'bg-transparent border border-slate-600 text-slate-300 hover:border-slate-400 hover:text-white',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
  xl: 'px-10 py-5 text-lg',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  as: Tag = 'button',
  href,
  onClick,
  ...props
}) {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500/50 active:scale-95';

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Tag className={classes} onClick={onClick} {...props}>
      {children}
    </Tag>
  );
}
