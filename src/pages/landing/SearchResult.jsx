import React, { useState } from "react";
import { Stack } from "@mui/material";
import CustomButton from "../../components/custom-mui/CustomButton";
import LongMusicCard from "../../components/music-lists/LongMusicCard";
import { useSearchMusicQuery } from "../../features/api/spotifyApi";

/**
 *
 * @param {search} the value of the search input
 * @renders a list of the search results
 */
function SearchResult({ search }) {
  const [activeFilter, setActiveFilter] = useState("Tracks");
  const { data, isFetching, error } = useSearchMusicQuery({
    search,
    activeFilter,
  });
  const tracks = data?.tracks;
  const artists = data?.artists?.items;

  const SearchFilters = () => {
    const filters = ["Artists", "Tracks", "Genres", "Albums", "All"];
    const handleClick = (ev) => {
      const active = ev.target.textContent;
      setActiveFilter(() => ev.target.textContent);
    };
    return (
      <Stack columnGap={2} direction={"row"}>
        {filters?.map((filter) => (
          <CustomButton
            sx={{
              backgroundColor: filter === activeFilter && "#0d47a1",
              border: filter === activeFilter && "1px solid",
            }}
            key={filter}
            children={filter}
            handleClick={handleClick}
          />
        ))}
      </Stack>
    );
  };
  return (
    <>
      {isFetching ? (
        <div>loading</div>
      ) : error ? (
        <div>Sorry, an error occured</div>
      ) : (
        <>
          <SearchFilters />
          <Stack mt={2} spacing={2.2}>
            {tracks?.map(({ data }) => {
              const { artists, url, albumOfTrack, id, name, playability } =
                data;
              const allArtists = artists.items;
              const artistName = allArtists.reduce((acc, { profile }) => {
                return acc + profile.name + " ";
              }, "");
              const [image] = albumOfTrack.coverArt.sources;
              return (
                <LongMusicCard
                  key={id}
                  name={name}
                  artistName={artistName}
                  image={image}
                />
              );
            })}
            {artists?.map(({ data }) => {
              const { url, profile, visuals } = data;
              const { url: image } = visuals?.avatarImage?.sources[0];
              return (
                <LongMusicCard
                  key={profile.name}
                  name={profile.name}
                  image={image}
                />
              );
            })}
          </Stack>
        </>
      )}
    </>
  );
}

export default SearchResult;
