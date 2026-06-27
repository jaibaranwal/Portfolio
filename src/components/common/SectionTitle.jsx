function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center">
      <p className="text-sky-400 font-medium">
        {subtitle}
      </p>

      <h2 className="mt-3 text-4xl font-bold">
        {title}
      </h2>
    </div>
  );
}

export default SectionTitle;