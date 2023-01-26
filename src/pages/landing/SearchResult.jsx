import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import React from "react";
import LongMusicCard from "../../components/music-lists/LongMusicCard";
import { useSearchMusicQuery } from "../../features/api/spotifyApi";

/**
 *
 * @param {search} the value of the search input
 * @renders a list of the search results
 */
function SearchResult({ search }) {
  const { data, isFetching, error } = useSearchMusicQuery({ search });
  const tracks = data?.tracks;
  return (
    <>
      {isFetching ? (
        <div>loading</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        <Stack mt={2} spacing={2.2}>
          {tracks.map(({ data }) => {
            const { artists, url, albumOfTrack, id, name, playability } = data;
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
        </Stack>
      )}
    </>
  );
}

export default SearchResult;
