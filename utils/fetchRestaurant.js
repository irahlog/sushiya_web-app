export const fetchRestaurant = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getRestaurant`
  );

  const data = await res.json();
  const restaurant = data.restaurant;

  return restaurant;
};
