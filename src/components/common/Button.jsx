function Button({
  children,
  variant = "primary",
  className = "",
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 font-medium transition-all duration-300";

  const styles = {
    primary:
      "bg-sky-500 text-white hover:bg-sky-400 hover:scale-[1.03]",

    secondary:
      "border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10",
  };

  return (
    <button className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </button>
  );
}

export default Button;