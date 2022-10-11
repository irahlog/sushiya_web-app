export const fetchMenuCategories = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getMenuCategories`
  );

  const data = await res.json();
  const menuCategories = data.menuCategories;

  console.log('menuCategories in fetch:', menuCategories);

  return menuCategories;
};
