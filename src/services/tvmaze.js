const PLACEHOLDER_IMAGE = "https://placehold.co/210x295";

export const getShowData = async (id) => {
  const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
  if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
  const data = await response.json();

  return {
    name: data.name,
    rating: data.rating,
    image: data.image?.medium ?? PLACEHOLDER_IMAGE
  };
};

export const getEpisodeList = async (id) => {
  const response = await fetch(`https://api.tvmaze.com/shows/${id}/episodes`);
  if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
  const episodes = await response.json();

  const episodeList = episodes.map((episode) => ({
    number: episode.number,
    season: episode.season,
    rating: episode.rating.average
  }));

  return Object.groupBy(episodeList, (episode) => episode.season);
};