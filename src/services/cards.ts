import axios from "axios";

export const requestSetCards = async () => {
  try {
    const response = await axios.get(
      "https://db.ygoprodeck.com/api/v7/cardsets.php",
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export interface Filter {
  cardset?: string;
  fname?: string;
}

export const requestCards = async (filter: Filter) => {
  const filterCardSet = filter.cardset ? `cardset=${filter.cardset ?? ""}` : "";
  const filterFname = filter.fname ? `fname=${filter.fname ?? ""}` : "";
  const option = `?${filterCardSet}&${filterFname}`;
  try {
    const response = await axios.get(
      `https://db.ygoprodeck.com/api/v7/cardinfo.php${option}`,
    );
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};
