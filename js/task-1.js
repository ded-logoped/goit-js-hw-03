function slugify(title) {
  const titleSmall = title.toLowerCase();
  const words = titleSmall.split(" ");
  const slug = words.join("-");
  return slug;
}
