import React from "react";
import { Grid } from "@mui/material";
import NowPlaying from "../../components/now-playing/NowPlaying";
import TrendingBox from "../../components/trending/TrendingBox";
import MusicContent from "./MusicContent";
import { useGetTop200Query } from "../../features/api/spotifyApi";

function MainLandCont() {
  const filters = ["NG", "US", "FR"];

  const list = ["top Songs", "billboard topcharts"];
  const { data, isFetching, error } = useGetTop200Query({});
  console.log(data, isFetching, error);

  const { trackMetadata } = (data && data[0]) || {};
  const {
    trackName: name,
    trackUrl: url,
    displayImageUri: image,
    artists: allArtists,
  } = trackMetadata || {};
  const artistName = allArtists?.reduce((acc, { name }) => {
    return acc + name + " ";
  }, "");

  return (
    <>
      {isFetching ? (
        <div>loading..</div>
      ) : error ? (
        <div>error</div>
      ) : (
        <Grid container justifyContent={"space-between"}>
          <Grid item xs={12}>
            <TrendingBox name={name} image={image} artistName={artistName} />
          </Grid>
          <Grid item mt={5} xs={12} md={7.6}>
            <MusicContent list={list} data={data} />
          </Grid>
          <Grid item mt={5} xs={12} md={4}>
            <NowPlaying />
          </Grid>
        </Grid>
      )}
    </>
  );
}

export default MainLandCont;
